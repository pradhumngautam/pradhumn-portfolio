type Point = [number, number];
const project = (x: number, y: number, z = 0): Point => [
  380 + (x - y) * 0.86,
  248 + (x + y) * 0.5 - z,
];
const points = (...vertices: Point[]) =>
  vertices.map((point) => point.join(",")).join(" ");

function Block({
  x,
  y,
  width,
  depth,
  height,
  z = 0,
  hatch = false,
}: {
  x: number;
  y: number;
  width: number;
  depth: number;
  height: number;
  z?: number;
  hatch?: boolean;
}) {
  const a = project(x, y, z + height),
    b = project(x + width, y, z + height);
  const c = project(x + width, y + depth, z + height),
    d = project(x, y + depth, z + height);
  return (
    <g className="drawing-block">
      <polygon
        className="drawing-face"
        points={points(
          d,
          c,
          project(x + width, y + depth, z),
          project(x, y + depth, z),
        )}
      />
      <polygon
        className="drawing-side"
        points={points(
          b,
          c,
          project(x + width, y + depth, z),
          project(x + width, y, z),
        )}
      />
      <polygon className="drawing-face" points={points(a, b, c, d)} />
      {hatch && (
        <polygon
          fill="url(#drawing-hatch)"
          points={points(
            d,
            c,
            project(x + width, y + depth, z),
            project(x, y + depth, z),
          )}
        />
      )}
    </g>
  );
}

function Cylinder({
  x,
  y,
  height,
  radius,
}: {
  x: number;
  y: number;
  height: number;
  radius: number;
}) {
  const [cx, cy] = project(x, y);
  return (
    <g className="drawing-block">
      <path
        className="drawing-face"
        d={`M ${cx - radius} ${cy - height} v ${height} a ${radius} ${
          radius * 0.43
        } 0 0 0 ${radius * 2} 0 v -${height}`}
      />
      {[0.33, 0.66, 1].map((fraction) => (
        <path
          key={fraction}
          fill="none"
          d={`M ${cx - radius} ${cy - height * fraction} a ${radius} ${
            radius * 0.43
          } 0 0 0 ${radius * 2} 0`}
        />
      ))}
      <ellipse
        className="drawing-face"
        cx={cx}
        cy={cy - height}
        rx={radius}
        ry={radius * 0.43}
      />
    </g>
  );
}

function Label({
  x,
  y,
  z,
  text,
  dx = 0,
  dy = -35,
}: {
  x: number;
  y: number;
  z: number;
  text: string;
  dx?: number;
  dy?: number;
}) {
  const [cx, cy] = project(x, y, z);
  return (
    <g className="drawing-label">
      <path d={`M ${cx} ${cy} v ${dy + 9} h ${dx}`} fill="none" />
      <circle cx={cx} cy={cy} r="1.5" />
      <text x={cx + dx + 4} y={cy + dy + 4}>
        {text}
      </text>
    </g>
  );
}

export default function ArchitectureDrawing() {
  return (
    <section
      className="architecture-cover"
      aria-label="An architectural sketch of my engineering stack"
    >
      <div className="hanging-label" aria-hidden="true">
        <span className="label-cord" />
        <span className="label-tag">
          KEEP
          <br />
          BUILDING<span className="tag-mark">↗</span>
        </span>
      </div>
      <svg
        className="architecture-svg"
        viewBox="0 0 760 460"
        role="img"
        aria-labelledby="drawing-title drawing-description"
      >
        <title id="drawing-title">A sketch of reliable backend systems</title>
        <desc id="drawing-description">
          An isometric drawing connects an API gateway to FastAPI services,
          background workers, PostgreSQL, Redis, and Docker containers.
        </desc>
        <defs>
          <pattern
            id="drawing-hatch"
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-2 2L2-2M0 7L7 0M5 9L9 5"
              stroke="currentColor"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <g className="construction-lines" fill="none">
          <path d="M-30 65L790 480M-30 430L790 30" strokeDasharray="4 5" />
          <path d="M380 55V420" strokeDasharray="2 7" />
        </g>
        <g stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round">
          <Block
            x={-170}
            y={-150}
            width={340}
            depth={300}
            height={10}
            z={-10}
            hatch
          />
          <g fill="none" strokeDasharray="3 4" className="drawing-routes">
            <polyline
              points={points(
                project(-30, -97),
                project(87, -97),
                project(87, -65),
              )}
            />
            <polyline
              points={points(
                project(-30, -97),
                project(-30, -16),
                project(-82, -16),
              )}
            />
            <polyline
              points={points(
                project(-80, 5),
                project(-80, 65),
                project(-40, 65),
              )}
            />
            <polyline
              points={points(
                project(93, -52),
                project(93, 72),
                project(35, 72),
              )}
            />
            <polyline
              points={points(project(13, 0), project(13, 70), project(-35, 70))}
            />
          </g>
          <Block x={-70} y={-130} width={14} depth={25} height={90} hatch />
          <Block x={-24} y={-130} width={14} depth={25} height={90} hatch />
          <Block x={-70} y={-130} width={60} depth={25} height={13} z={90} />
          {[0, 15, 30].map((z) => (
            <Block
              key={z}
              x={50}
              y={-115}
              width={65}
              depth={44}
              height={10}
              z={z}
              hatch
            />
          ))}
          <Block x={-122} y={-38} width={25} depth={25} height={31} />
          <Block x={-93} y={-38} width={25} depth={25} height={48} />
          <Block x={-122} y={-9} width={25} depth={25} height={24} />
          <Block x={-93} y={-9} width={25} depth={25} height={32} />
          <Block x={-9} y={-16} width={67} depth={61} height={8} />
          {[
            [-4, -11, 23],
            [20, -11, 30],
            [44, -11, 20],
            [-4, 13, 17],
            [20, 13, 24],
            [44, 13, 29],
          ].map(([x, y, h]) => (
            <Block
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={17}
              depth={17}
              height={h}
              z={8}
            />
          ))}
          <Cylinder x={-118} y={65} height={17} radius={21} />
          <Cylinder x={-35} y={91} height={52} radius={26} />
          <Block x={91} y={42} width={17} depth={51} height={55} hatch />
          <Block x={111} y={42} width={17} depth={51} height={64} hatch />
          <Block x={131} y={42} width={17} depth={51} height={72} hatch />
          <Label x={-40} y={-120} z={103} text="gateway" dy={-22} />
          <Label x={83} y={-95} z={40} text="fastapi" dy={-31} />
          <Label x={-95} y={-21} z={48} text="workers" dy={-27} dx={-18} />
          <Label x={21} y={8} z={38} text="docker" dy={-28} />
          <Label x={-118} y={65} z={17} text="redis" dy={-29} />
          <Label x={-35} y={91} z={52} text="postgres" dy={-32} />
          <Label x={141} y={67} z={72} text="events" dy={-30} />
          <g className="drawing-label">
            <path
              d="M380 407h64M380 407l38 22"
              fill="none"
              strokeDasharray="2 3"
            />
            <path d="M413 407a34 34 0 0 1 -4 17" fill="none" />
            <text x="423" y="421">
              30°
            </text>
          </g>
        </g>
      </svg>
      <dl className="drawing-stamp">
        <div>
          <dt>Engineer</dt>
          <dd>Pradhumn Gautam</dd>
        </div>
        <div>
          <dt>Project</dt>
          <dd>pradhumn.com</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>Backend systems</dd>
        </div>
        <div>
          <dt>Sheet</dt>
          <dd>01 / 01</dd>
        </div>
      </dl>
      <span className="drawing-caption">
        SYSTEMS / AN EXPLORATION IN RELIABILITY
      </span>
    </section>
  );
}
