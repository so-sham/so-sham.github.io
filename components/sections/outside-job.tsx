import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/reveal"

const DIAGRAM_VIEWBOX = "0 0 150 200"
const MONO_LABEL = { fontFamily: "var(--font-mono)", letterSpacing: "0.05em" } as const

function DiagramFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox={DIAGRAM_VIEWBOX} className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="0.5" y="0.5" width="149" height="199" fill="var(--paper-tint)" stroke="var(--rule-warm)" />
      {children}
    </svg>
  )
}

function PositioningDiagram() {
  const dots = [
    { label: "Apple", x: 78, y: 22, color: "var(--accent-blue)" },
    { label: "Fitbit", x: 58, y: 45, color: "var(--accent-blue)" },
    { label: "Samsung", x: 68, y: 60, color: "var(--accent-blue)" },
    { label: "Jawbone", x: 30, y: 75, color: "var(--rust)" },
  ]
  const plotX = (x: number) => 24 + (x / 100) * 110
  const plotY = (y: number) => 172 - (y / 100) * 150

  return (
    <DiagramFrame>
      <line x1="24" y1="20" x2="24" y2="172" stroke="var(--ink-35)" strokeWidth="1" />
      <line x1="24" y1="172" x2="140" y2="172" stroke="var(--ink-35)" strokeWidth="1" />
      {dots.map((d) => (
        <rect
          key={d.label}
          x={plotX(d.x) - 2.5}
          y={plotY(d.y) - 2.5}
          width="5"
          height="5"
          fill={d.color}
        />
      ))}
      <text x="8" y="14" fontSize="7" fill="var(--ink-55)" style={MONO_LABEL}>
        DEPTH ↑
      </text>
      <text x="98" y="188" fontSize="7" fill="var(--ink-55)" style={MONO_LABEL}>
        PRICE →
      </text>
    </DiagramFrame>
  )
}

function SessionFlowDiagram() {
  return (
    <DiagramFrame>
      <rect x="12" y="14" width="92" height="16" fill="white" stroke="var(--accent-blue)" />
      <text x="18" y="25" fontSize="7" fill="var(--ink-80)">
        Hey, rough day?
      </text>

      <rect x="46" y="40" width="92" height="26" fill="white" stroke="var(--ink-35)" />
      <text x="52" y="52" fontSize="7" fill="var(--ink-80)">
        Yeah, work has
      </text>
      <text x="52" y="61" fontSize="7" fill="var(--ink-80)">
        been a lot.
      </text>

      <rect x="12" y="76" width="54" height="16" fill="white" stroke="var(--rust)" />
      <text x="18" y="87" fontSize="7" fill="var(--rust)">
        STALLS
      </text>

      <text x="12" y="184" fontSize="7" fill="var(--ink-55)" style={MONO_LABEL}>
        2 MSG / MIN · REMATCH
      </text>
    </DiagramFrame>
  )
}

function HappyFlowDiagram() {
  const rows: Array<{ label: string; breakAt: number; y: number }> = [
    { label: "PARENT", breakAt: 3, y: 26 },
    { label: "TEACHER", breakAt: 4, y: 78 },
  ]
  const squareSize = 11
  const gap = 4

  return (
    <DiagramFrame>
      {rows.map((row) => (
        <g key={row.label}>
          <text x="14" y={row.y - 8} fontSize="7" fill="var(--ink-55)" style={MONO_LABEL}>
            {row.label}
          </text>
          {Array.from({ length: 6 }, (_, i) => (
            <rect
              key={i}
              x={14 + i * (squareSize + gap)}
              y={row.y}
              width={squareSize}
              height={squareSize}
              fill={i === row.breakAt ? "var(--rust)" : "var(--rule-warm-2)"}
            />
          ))}
        </g>
      ))}
      <text x="14" y="184" fontSize="7" fill="var(--ink-55)" style={MONO_LABEL}>
        WHERE IT BREAKS
      </text>
    </DiagramFrame>
  )
}

function BillingBarsDiagram() {
  const bars = [
    { label: "CASH-HEAVY", pct: 20, color: "var(--rust)" },
    { label: "MIXED", pct: 55, color: "#C9A96A" },
    { label: "GST-LED", pct: 90, color: "var(--accent-blue)" },
  ]
  const baseline = 168
  const maxHeight = 130
  const barWidth = 26
  const centers = [38, 75, 112]

  return (
    <DiagramFrame>
      <line x1="16" y1={baseline} x2="134" y2={baseline} stroke="var(--rule-warm-2)" strokeWidth="1" />
      {bars.map((b, i) => {
        const h = (b.pct / 100) * maxHeight
        return (
          <g key={b.label}>
            <rect x={centers[i] - barWidth / 2} y={baseline - h} width={barWidth} height={h} fill={b.color} />
            <text x={centers[i]} y="184" fontSize="6" fill="var(--ink-55)" textAnchor="middle" style={MONO_LABEL}>
              {b.label}
            </text>
          </g>
        )
      })}
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
