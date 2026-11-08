const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

// Exercise the same pure TypeScript parser used by the server without adding a test runtime.
const source = fs.readFileSync(
  path.join(__dirname, "../src/lib/contribution-parser.ts"),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(compiled, context);
const { parseContributions } = context.exports;

function fixture() {
  const rows = [],
    tips = [];
  for (let index = 0; index < 365; index++) {
    const date = new Date(Date.UTC(2025, 0, index + 1))
      .toISOString()
      .slice(0, 10);
    rows.push(
      `<td id="day-${index}" data-level="${
        index % 5
      }" data-date="${date}"></td>`,
    );
    tips.push(
      `<tool-tip for="day-${index}">${
        index % 5 === 0 ? "No" : "1,234"
      } contributions on January 1st.</tool-tip>`,
    );
  }
  return `<h2 id="js-contribution-activity-description">12,345 contributions in the last year</h2>${rows
    .reverse()
    .join("")}${tips.join("")}`;
}

test("preserves GitHub's reported total and sorts real daily values", () => {
  const parsed = parseContributions(fixture(), "2026-11-08T00:00:00Z");
  assert.equal(parsed.total, 12345);
  assert.equal(parsed.days.length, 365);
  assert.equal(parsed.days[0].date, "2025-01-01");
  assert.equal(parsed.days[0].count, 0);
  assert.equal(parsed.days[1].count, 1234);
});
test("rejects an error page instead of reporting zero activity", () => {
  assert.throws(
    () => parseContributions("<html>rate limited</html>", "now"),
    /Incomplete/,
  );
});
test("rejects missing tooltips instead of inventing daily counts", () => {
  assert.throws(
    () =>
      parseContributions(
        fixture().replace('for="day-10"', 'for="missing"'),
        "now",
      ),
    /Unrecognized/,
  );
});
test("rejects duplicate dates and malformed intensity levels", () => {
  assert.throws(
    () =>
      parseContributions(
        fixture().replace('data-date="2025-01-02"', 'data-date="2025-01-01"'),
        "now",
      ),
    /Incomplete/,
  );
  assert.throws(
    () =>
      parseContributions(
        fixture().replace('data-level="1"', 'data-level="9"'),
        "now",
      ),
    /Unrecognized/,
  );
});
test("rejects a gap in the calendar", () => {
  assert.throws(
    () =>
      parseContributions(
        fixture().replace('data-date="2025-01-01"', 'data-date="2024-12-30"'),
        "now",
      ),
    /Non-contiguous/,
  );
});
