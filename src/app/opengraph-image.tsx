import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/lib/profile";

export const alt =
  "Pradhumn Gautam — Software Engineer at QodexAI. Reliable backend systems, data infrastructure, and AI products.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const font = await readFile(
    join(process.cwd(), "src/assets/fonts/geist-400.ttf"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#111111",
          color: "#ededed",
          padding: "0 70px",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderLeft: "1px solid #2a2a2a",
            borderRight: "1px solid #2a2a2a",
          }}
        >
          <div
            style={{
              display: "flex",
              height: 104,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 46px",
              borderBottom: "1px solid #2a2a2a",
              fontSize: 19,
              letterSpacing: "1px",
              color: "#a0a0a0",
            }}
          >
            <span>SOFTWARE ENGINEER AT QODEXAI</span>
            <span>PRADHUMN.COM</span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              padding: "0 46px",
              fontSize: 74,
              letterSpacing: "-2px",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 150,
              padding: "25px 46px",
              borderTop: "1px solid #2a2a2a",
              color: "#aaaaaa",
              fontSize: 27,
              lineHeight: 1.4,
            }}
          >
            Software engineer building reliable backend systems, data
            infrastructure, and AI products.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: font, weight: 400, style: "normal" }],
    },
  );
}
