import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/reveal"

function PositioningDiagram() {
  const dots = [
    { label: "Apple", x: 78, y: 22, color: "var(--accent-blue)" },
    { label: "Fitbit", x: 58, y: 45, color: "var(--accent-blue)" },
    { label: "Samsung", x: 68, y: 60, color: "var(--accent-blue)" },
    { label: "Jawbone", x: 30, y: 75, color: "var(--rust)" },
  ]
  return (
    <div className="relative h-full w-full border border-rule-warm bg-paper-tint p-4">
      <div className="absolute bottom-8 left-8 h-px w-[calc(100%-4rem)] bg-ink-35" />
      <div className="absolute bottom-8 left-8 h-[calc(100%-4rem)] w-px bg-ink-35" />
      {dots.map((d) => (
        <div
          key={d.label}
          className="absolute h-2 w-2 -translate-x-1/2 translate-y-1/2"
          style={{ left: `${d.x}%`, bottom: `${100 - d.y}%`, background: d.color }}
        />
      ))}
      <p className="absolute top-3 left-3 font-mono text-[9px] text-ink-55 uppercase">Depth ↑</p>
      <p className="absolute right-3 bottom-3 font-mono text-[9px] text-ink-55 uppercase">Price →</p>
    </div>
  )
}

function SessionFlowDiagram() {
  return (
    <div className="flex h-full w-full flex-col justify-between border border-rule-warm bg-paper-tint p-4">
      <div className="space-y-2">
        <div className="w-3/5 border border-accent-blue bg-white px-2 py-1 text-[10px] text-ink-80">Hey, rough day?</div>
        <div className="ml-auto w-3/5 border border-ink-35 bg-white px-2 py-1 text-right text-[10px] text-ink-80">
          Yeah, work has been a lot.
        </div>
        <div className="w-3/5 border border-rust bg-white px-2 py-1 text-[10px] text-rust">STALLS</div>
      </div>
      <p className="font-mono text-[9px] text-ink-55 uppercase">2 msg / min · rematch</p>
    </div>
  )
}

function HappyFlowDiagram() {
  const rows: Array<{ label: string; breakAt: number }> = [
    { label: "Parent", breakAt: 3 },
    { label: "Teacher", breakAt: 4 },
  ]
  return (
    <div className="flex h-full w-full flex-col justify-between border border-rule-warm bg-paper-tint p-4">
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.label}>
            <p className="mb-1 font-mono text-[9px] text-ink-55 uppercase">{row.label}</p>
            <div className="flex gap-1">
              {Array.from({ length: 6 }, (_, i) => (
                <span
                  key={i}
                  className="h-2.5 w-2.5"
                  style={{ background: i === row.breakAt ? "var(--rust)" : "var(--rule-warm-2)" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="font-mono text-[9px] text-ink-55 uppercase">Where it breaks</p>
    </div>
  )
}

function BillingBarsDiagram() {
  const bars = [
    { label: "Cash-heavy", pct: 20, color: "var(--rust)" },
    { label: "Mixed", pct: 55, color: "#C9A96A" },
    { label: "GST-led", pct: 90, color: "var(--accent-blue)" },
  ]
  return (
    <div className="flex h-full w-full items-end justify-center gap-4 border border-rule-warm bg-paper-tint p-4">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-col items-center justify-end gap-2" style={{ height: "100%" }}>
          <div className="w-8" style={{ height: `${b.pct}%`, background: b.color }} />
          <p className="font-mono text-[8px] whitespace-nowrap text-ink-55 uppercase">{b.label}</p>
        </div>
      ))}
    </div>
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
