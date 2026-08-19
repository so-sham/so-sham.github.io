import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/reveal"

/* ---------------------------------------------------------------------------
   Case-study diagrams
   ---------------------------------------------------------------------------
   Hand-drawn-style stand-ins for the real artefacts in each document. All four
   share one frame (title strip / plot area / footer strip on a `--surface`
   card), one type scale (mono, uppercase) and one stroke weight (1px hairline),
   because they repeat down a single column. viewBox is 210×280 so one SVG unit
   equals one CSS pixel at the rendered desktop size — font sizes below are real
   pixel sizes, which is what keeps them legible in a 210px-wide column.
--------------------------------------------------------------------------- */

const DIAGRAM_VIEWBOX = "0 0 210 280"
const PAD = 14
const RIGHT = 196
const HEAD_RULE = 34
const FOOT_RULE = 246
const FOOT_TEXT = 261

const MONO = { fontFamily: "var(--font-mono)", letterSpacing: "0.05em" } as const
const MONO_WIDE = { fontFamily: "var(--font-mono)", letterSpacing: "0.08em" } as const
const MONO_TITLE = {
  fontFamily: "var(--font-mono)",
  letterSpacing: "0.1em",
  fontWeight: 500,
} as const

/** A line with a single, deterministic bow in it — enough to read as drawn by
 *  hand rather than plotted, not enough to look like a rendering bug. */
function RoughLine({
  x1,
  y1,
  x2,
  y2,
  bow = 0.6,
  ...rest
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  bow?: number
} & React.SVGProps<SVGPathElement>) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const cx = (x1 + x2) / 2 + (-dy / len) * bow * 2
  const cy = (y1 + y2) / 2 + (dx / len) * bow * 2
  return <path d={`M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`} fill="none" {...rest} />
}

function DiagramFrame({
  title,
  footer,
  children,
}: {
  title: string
  footer: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <svg viewBox={DIAGRAM_VIEWBOX} className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="0.5" y="0.5" width="209" height="279" fill="var(--surface)" stroke="var(--rule-warm-2)" />
      <text x={PAD} y="25" fontSize="9" fill="var(--ink)" style={MONO_TITLE}>
        {title}
      </text>
      <line x1={PAD} y1={HEAD_RULE} x2={RIGHT} y2={HEAD_RULE} stroke="var(--rule-warm)" strokeWidth="1" />
      {children}
      <line x1={PAD} y1={FOOT_RULE} x2={RIGHT} y2={FOOT_RULE} stroke="var(--rule-warm)" strokeWidth="1" />
      {footer}
    </svg>
  )
}

/* 01 — Jawbone UP · competitor teardown + post-mortem -----------------------
   A depth-vs-price positioning map. The three incumbents that survived are
   blue dots; Jawbone is a rust cross, not a dot, because the row's whole point
   is that it is a post-mortem of a company that is no longer on the board. */
function PositioningDiagram() {
  const X0 = 42
  const X1 = 192
  const Y0 = 54
  const Y1 = 214
  const px = (p: number) => X0 + (p / 100) * (X1 - X0)
  const py = (p: number) => Y0 + (p / 100) * (Y1 - Y0)

  const dots = [
    { label: "Apple", x: 72, y: 20 },
    { label: "Fitbit", x: 40, y: 46 },
    { label: "Samsung", x: 60, y: 64 },
  ]
  const dead = { label: "Jawbone", x: 22, y: 84 }
  const dx = px(dead.x)
  const dy = py(dead.y)

  return (
    <DiagramFrame
      title="POSITIONING"
      footer={
        <>
          <path
            d={`M${PAD} 255 l7 7 M${PAD + 7} 255 l-7 7`}
            stroke="var(--rust)"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
          <text x={PAD + 13} y={FOOT_TEXT} fontSize="8" fill="var(--ink-55)" style={MONO_WIDE}>
            DID NOT SURVIVE
          </text>
        </>
      }
    >
      {/* quadrant guides */}
      <line
        x1={px(50)}
        y1={Y0}
        x2={px(50)}
        y2={Y1}
        stroke="var(--rule-warm)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <line
        x1={X0}
        y1={py(50)}
        x2={X1}
        y2={py(50)}
        stroke="var(--rule-warm)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* axes */}
      <RoughLine x1={X0} y1={Y0} x2={X0} y2={Y1} stroke="var(--rule-strong)" strokeWidth="1" />
      <RoughLine x1={X0} y1={Y1} x2={X1} y2={Y1} stroke="var(--rule-strong)" strokeWidth="1" />

      <text
        x="31"
        y={(Y0 + Y1) / 2}
        fontSize="7"
        fill="var(--ink-35)"
        textAnchor="middle"
        transform={`rotate(-90 31 ${(Y0 + Y1) / 2})`}
        style={MONO_WIDE}
      >
        DEPTH
      </text>
      <text x={X1} y="228" fontSize="7" fill="var(--ink-35)" textAnchor="end" style={MONO_WIDE}>
        PRICE →
      </text>

      {dots.map((d) => (
        <g key={d.label}>
          <circle cx={px(d.x)} cy={py(d.y)} r="3.2" fill="var(--accent-blue)" />
          <text x={px(d.x) + 7} y={py(d.y) + 3} fontSize="8" fill="var(--ink-80)" style={MONO}>
            {d.label}
          </text>
        </g>
      ))}

      <path
        d={`M${dx - 4.5} ${dy - 4.5} l9 9 M${dx + 4.5} ${dy - 4.5} l-9 9`}
        stroke="var(--rust)"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <text x={dx + 9} y={dy + 3} fontSize="8" fill="var(--rust)" style={{ ...MONO, fontWeight: 500 }}>
        {dead.label}
      </text>
    </DiagramFrame>
  )
}

/* 02 — Jumping Minds · what counts as a meaningful conversation -------------
   The artefact is a session read top-to-bottom as rhythm, not as content:
   messages land at ~2/min, the listener goes quiet, the rematch fires and the
   cadence picks back up. Bubbles are deliberately blank — the metric being
   defined is the tempo, and the subject matter is not ours to mock up. */
function SessionFlowDiagram() {
  const seeker = { fill: "var(--paper-tint)", stroke: "var(--rule-warm-2)" }
  const listener = { fill: "var(--accent-blue-tint)", stroke: "var(--accent-blue)" }
  const H = 13

  const bubbles = [
    { x: 36, w: 104, y: 50, ...seeker },
    { x: 92, w: 104, y: 68, ...listener },
    { x: 36, w: 118, y: 86, ...seeker },
    { x: 116, w: 80, y: 104, ...listener },
    { x: 36, w: 96, y: 188, ...seeker },
    { x: 104, w: 92, y: 206, ...listener },
    { x: 36, w: 110, y: 224, ...seeker },
  ]

  return (
    <DiagramFrame
      title="SESSION FLOW"
      footer={
        <text x={PAD} y={FOOT_TEXT} fontSize="8" fill="var(--ink-55)" style={MONO_WIDE}>
          FLOW → <tspan fill="var(--rust)">STALL</tspan> → <tspan fill="var(--rust)">REMATCH</tspan>
        </text>
      }
    >
      {bubbles.map((b) => (
        <rect
          key={`${b.x}-${b.y}`}
          x={b.x}
          y={b.y}
          width={b.w}
          height={H}
          fill={b.fill}
          stroke={b.stroke}
          strokeWidth="1"
        />
      ))}

      {/* cadence bracket over the first four turns */}
      <path
        d="M34 50 H30 V117 H34"
        fill="none"
        stroke="var(--ink-35)"
        strokeWidth="1"
        strokeLinecap="square"
      />
      <text
        x="22"
        y="83.5"
        fontSize="7"
        fill="var(--ink-55)"
        textAnchor="middle"
        transform="rotate(-90 22 83.5)"
        style={MONO_WIDE}
      >
        2 MSG / MIN
      </text>

      {/* the silence */}
      <path
        d="M39 124 H45 M42 124 V160 M39 160 H45"
        fill="none"
        stroke="var(--rust)"
        strokeWidth="1"
        strokeDasharray="3 3"
        strokeLinecap="square"
      />
      <text x="52" y="139" fontSize="8" fill="var(--rust)" style={{ ...MONO_WIDE, fontWeight: 500 }}>
        STALLS
      </text>
      <text x="52" y="150" fontSize="7" fill="var(--ink-35)" style={MONO}>
        LISTENER QUIET
      </text>

      {/* rematch */}
      <line x1="36" y1="172" x2="196" y2="172" stroke="var(--rust)" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="94" y="166" width="44" height="12" fill="var(--surface)" />
      <text
        x="116"
        y="175"
        fontSize="7.5"
        fill="var(--rust)"
        textAnchor="middle"
        style={{ ...MONO_WIDE, fontWeight: 500 }}
      >
        REMATCH
      </text>
    </DiagramFrame>
  )
}

/* 03 — SparkStudio · the happy flow, mapped twice and then broken -----------
   Two journeys run side by side down the tall frame — the customer's and the
   operator's, which is the lesson the row describes — crossed by the three
   stages. Where a stage breaks, the node fills rust and the connector below it
   degrades to a dashed rust line: the flow literally stops being continuous. */
function HappyFlowDiagram() {
  const COLS = [
    { label: "PARENT", x: 100 },
    { label: "TEACHER", x: 166 },
  ]
  const STAGES = [
    { label: "ACTIVATION", y: 84 },
    { label: "ENGAGEMENT", y: 140 },
    { label: "CONVERSION", y: 196 },
  ]
  // Only the four failures named in the write-up are marked; "|" breaks a line.
  const BREAKS: Record<string, string[]> = {
    PARENT: ["PAYMENT|FAILS", "CONNECTIVITY", ""],
    TEACHER: ["ZOOM|SETUP", "", "NO PROGRESS|VIEW"],
  }
  const N = 11
  const TOP = 62
  const BOTTOM = 228

  return (
    <DiagramFrame
      title="HAPPY FLOW × 2"
      footer={
        <>
          <rect x={PAD} y="254" width="7" height="7" fill="var(--rust)" />
          <text x={PAD + 13} y={FOOT_TEXT} fontSize="8" fill="var(--ink-55)" style={MONO_WIDE}>
            WHERE IT BREAKS
          </text>
        </>
      }
    >
      {/* stage bands */}
      <line x1={PAD} y1="116" x2={RIGHT} y2="116" stroke="var(--rule-warm)" strokeWidth="1" />
      <line x1={PAD} y1="172" x2={RIGHT} y2="172" stroke="var(--rule-warm)" strokeWidth="1" />
      {STAGES.map((s) => (
        <text key={s.label} x={PAD} y={s.y + 3} fontSize="7" fill="var(--ink-55)" style={MONO_WIDE}>
          {s.label}
        </text>
      ))}

      <line x1="70" y1="57" x2={RIGHT} y2="57" stroke="var(--rule-warm)" strokeWidth="1" />

      {COLS.map((col) => {
        const breaks = BREAKS[col.label]
        const edges = [
          [TOP, STAGES[0].y - N / 2],
          [STAGES[0].y + N / 2, STAGES[1].y - N / 2],
          [STAGES[1].y + N / 2, STAGES[2].y - N / 2],
          [STAGES[2].y + N / 2, BOTTOM],
        ]
        return (
          <g key={col.label}>
            <text
              x={col.x}
              y="50"
              fontSize="8"
              fill="var(--ink-55)"
              textAnchor="middle"
              style={{ ...MONO_WIDE, fontWeight: 500 }}
            >
              {col.label}
            </text>

            {edges.map(([y1, y2], i) => {
              // The segment leaving a broken stage is the one that degrades.
              const broken = i > 0 && breaks[i - 1] !== ""
              return (
                <line
                  key={i}
                  x1={col.x}
                  y1={y1}
                  x2={col.x}
                  y2={y2}
                  stroke={broken ? "var(--rust)" : "var(--rule-strong)"}
                  strokeWidth="1"
                  strokeDasharray={broken ? "3 3" : undefined}
                />
              )
            })}

            {STAGES.map((s, i) => {
              const label = breaks[i]
              return (
                <g key={s.label}>
                  <rect
                    x={col.x - N / 2}
                    y={s.y - N / 2}
                    width={N}
                    height={N}
                    fill={label ? "var(--rust)" : "none"}
                    stroke={label ? "var(--rust)" : "var(--accent-blue)"}
                    strokeWidth="1"
                  />
                  {label
                    ? label.split("|").map((line, li) => {
                        const w = line.length * 4.9 + 5
                        return (
                          <g key={line}>
                            {/* knock the connector out from behind the label */}
                            <rect
                              x={col.x - w / 2}
                              y={s.y + 9 + li * 8}
                              width={w}
                              height="8"
                              fill="var(--surface)"
                            />
                            <text
                              x={col.x}
                              y={s.y + 15 + li * 8}
                              fontSize="7"
                              fill="var(--rust)"
                              textAnchor="middle"
                              style={{ ...MONO, fontWeight: 500 }}
                            >
                              {line}
                            </text>
                          </g>
                        )
                      })
                    : null}
                </g>
              )
            })}
          </g>
        )
      })}
    </DiagramFrame>
  )
}

/* 04 — MyBillBook · every bill, not just the GST ones -----------------------
   Plain bars would only show that three personas differ. What the row is
   actually about is the headroom above each bar, so each persona gets a
   full-height column — every bill they write — with the digital share filled
   in and a blue dashed target across the top. The empty part is the pitch. */
function BillingBarsDiagram() {
  const TOP = 70
  const BASE = 206
  const H = BASE - TOP
  const W = 40

  const cols = [
    { label: "CASH-HEAVY", pct: 20, x: 24, fill: "var(--rust)" },
    { label: "MIXED", pct: 55, x: 86, fill: "var(--rule-strong)" },
    { label: "GST-LED", pct: 90, x: 148, fill: "var(--accent-blue)" },
  ]

  return (
    <DiagramFrame
      title="DIGITAL BILLING"
      footer={
        <>
          <text x={PAD} y={FOOT_TEXT} fontSize="8" fill="var(--ink-55)" style={MONO_WIDE}>
            3 PERSONAS
          </text>
          <text x={RIGHT} y={FOOT_TEXT} fontSize="8" fill="var(--ink-55)" textAnchor="end" style={MONO_WIDE}>
            MH · TN · MP
          </text>
        </>
      }
    >
      {/* the target: every bill on the app */}
      <text x="20" y="65" fontSize="7" fill="var(--accent-blue)" style={{ ...MONO_WIDE, fontWeight: 500 }}>
        EVERY BILL
      </text>
      <text x="192" y="65" fontSize="7" fill="var(--accent-blue)" textAnchor="end" style={MONO_WIDE}>
        100%
      </text>
      <line x1="20" y1={TOP} x2="192" y2={TOP} stroke="var(--accent-blue)" strokeWidth="1" strokeDasharray="4 3" />

      {cols.map((c) => {
        const h = Math.round((c.pct / 100) * H)
        return (
          <g key={c.label}>
            <rect x={c.x} y={TOP} width={W} height={H} fill="var(--paper-tint)" />
            <rect x={c.x} y={BASE - h} width={W} height={h} fill={c.fill} />
            <rect
              x={c.x + 0.5}
              y={TOP + 0.5}
              width={W - 1}
              height={H - 1}
              fill="none"
              stroke="var(--rule-warm-2)"
              strokeWidth="1"
            />
            <text
              x={c.x + W / 2}
              y="221"
              fontSize="9.5"
              fill="var(--ink)"
              textAnchor="middle"
              style={{ ...MONO, fontWeight: 500 }}
            >
              {c.pct}%
            </text>
            <text
              x={c.x + W / 2}
              y="233"
              fontSize="7"
              fill="var(--ink-55)"
              textAnchor="middle"
              style={MONO}
            >
              {c.label}
            </text>
          </g>
        )
      })}

      <line x1="20" y1={BASE} x2="192" y2={BASE} stroke="var(--rule-strong)" strokeWidth="1" />
    </DiagramFrame>
  )
}

const ROWS = [
  {
    diagram: <PositioningDiagram />,
    caption: "Jawbone UP · post-mortem",
    kicker: "Product strategy · 2023",
    title: "Designing a health wearable that doesn't repeat Jawbone's mistakes",
    body: "A strategy document for entering a crowded wearables market: competitor teardown across Fitbit, Apple and Samsung, segmentation and trends, then a post-mortem of why Jawbone UP failed and what Fitbit's struggles say about the category. Ends with a research approach, prioritisation, a roadmap and the business, product and satisfaction metrics I would hold it to.",
    links: [{ label: "Read the document →", href: "https://drive.google.com/file/d/1ToxWvJUs7MiqRwuwjP9I7kuIkqg1aEGp/view" }],
  },
  {
    diagram: <SessionFlowDiagram />,
    caption: "What counts as meaningful",
    kicker: "UX & metrics · Jumping Minds, 2023",
    title: "Making an anonymous peer support chat worth staying for",
    body: "A timed, anonymous chat between someone struggling and a volunteer listener. I defined what a meaningful conversation actually is — flow at two messages a minute, likes, extensions — picked working professionals as the persona to design for, then wireframed the whole flow: matching, in-chat prompts when the listener freezes, mid-conversation feedback, and the rematch path when a peer goes quiet.",
    links: [
      { label: "Read the case study →", href: "https://drive.google.com/file/d/1TBb0MZvOW3eVLyIjik2X6h2LV0lkvOH0/view" },
      { label: "Wireframes →", href: "https://drive.google.com/file/d/1mc7kKOGTLv-BkWu4PDiDBJ1m7PskJwvE/view" },
    ],
  },
  {
    diagram: <HappyFlowDiagram />,
    caption: "Payments · Zoom · no progress view",
    kicker: "Journey mapping · SparkStudio, 2023",
    title: "Finding every place a live online class loses a student",
    body: "Mapping the happy flow twice — once for parents and students, once for teachers — then breaking it deliberately at activation, engagement and conversion. Payment failures, connectivity drop-offs, Zoom onboarding, teachers with no way to see progress, and a fix proposed for each. The exercise that taught me to write the operator's journey next to the customer's.",
    links: [{ label: "Read the document →", href: "https://drive.google.com/file/d/1ZZc1d_SQQKuKhmmCG-XaJcTUIbMCtmXY/view" }],
  },
  {
    diagram: <BillingBarsDiagram />,
    caption: "Same product · 3 shopkeeper states",
    kicker: "Growth · MyBillBook, 2023",
    title: (
      <>
        Getting small businesses to put <em className="em-accent">every bill</em> on the app, not
        just the GST ones
      </>
    ),
    body: "Some SMEs bill 20% digitally, some 90%. I looked at why through five competitors — Vyapar, Marg, Tally, Zoho Books, KhataBook — and three shopkeeper personas across Maharashtra, Tamil Nadu and Madhya Pradesh. The blocker was rarely awareness: it was cash transactions nobody wants an invoice for, an interface built for accountants, and missing language support.",
    links: [{ label: "Read the document →", href: "https://drive.google.com/file/d/1F3S6B7YT1lHBOAzOvylVQyj3ZmyO15wz/view" }],
  },
]

export function OutsideJob() {
  return (
    <Section id="sec-outside-job" band>
      <Reveal className="mb-14 grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Eyebrow n="06" label="Outside the job" className="mb-6" />
          <h2 className="max-w-[26ch] font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
            Case studies and competitions, done on my own <em className="em-accent">time</em>
          </h2>
        </div>
        <p className="self-end text-[17px] leading-[1.62] text-ink-80">
          Market analysis, personas, wireframes and metrics.{" "}
          <span className="em-underline">Full documents linked</span>.
        </p>
      </Reveal>

      <div>
        {ROWS.map((row, i) => (
          <Reveal
            key={row.kicker}
            index={i}
            className="grid gap-8 border-t border-rule py-10 first:border-t-0 first:pt-0 md:grid-cols-[210px_1fr]"
          >
            <div>
              <div style={{ aspectRatio: "3/4" }}>{row.diagram}</div>
              <p className="mt-2 text-center font-mono text-[10px] text-ink-55">{row.caption}</p>
            </div>
            <div>
              <p className="font-mono text-[12px] tracking-[0.08em] text-ink-55 uppercase">{row.kicker}</p>
              <h3 className="mt-3 font-serif text-[24px] leading-[1.2] font-normal text-ink">{row.title}</h3>
              <p className="mt-3 max-w-[600px] text-[16px] leading-[1.6] text-ink-80">{row.body}</p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {row.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="link text-[14px] font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
