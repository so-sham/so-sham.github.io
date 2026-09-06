import Link from "next/link"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Reveal, RevealSpine } from "@/components/reveal"
import { Section } from "@/components/layout/section"

type SubChapter = {
  date: string
  title: string
  body?: string
}

type FullTimeRow = {
  dates: string
  org: string
  title: string
  metrics: string
  body: string
  small?: boolean
  internship?: boolean
  subChapters?: SubChapter[]
}

type AlongsideRow = {
  dates: string
  org: string
  role: string
  body: string
  highlights: string[]
}

const FULL_TIME_ROWS: FullTimeRow[] = [
  {
    dates: "Jul 2023 — now",
    org: "Narayana Health · Bangalore & Cayman Islands",
    title: "Product Manager",
    metrics: "4 verticals · 50+ cross-functional · installs 1.64M → 3.67M",
    body: "NH Care, HCCI Cayman and One Health Cayman. The guided service journey 0→1, passkey authentication, a four-portal insurance platform, and Mixpanel across the organisation. Two months on the ground in Cayman, twice.",
    subChapters: [
      { date: "2023", title: "NH Care, India", body: "The guided service journey rebuilt 0→1." },
      { date: "2024", title: "HCCI, Cayman Islands", body: "Passkeys and a rebuilt OTP, login 60% → 93–95%." },
      { date: "2024 — 25", title: "Subscriptions and payments", body: "Revenue ₹31.8L → ₹3.75Cr." },
      { date: "2025 — now", title: "One Health Cayman, Arya, Pulse AI" },
    ],
  },
  {
    dates: "2022 — 2023",
    org: "Kampd · Singapore",
    title: "Growth Manager",
    metrics: "+67% DAU engagement · 5× user engagement · −25% churn on Soapbox",
    body: "A platform for building interactive professional communities. I wrote the community and social strategy for it, then ran it in the field: organiser for Singapore FinTech Festival, TiE Global Summit and IIT Techfest — content, reels, website. Also the first time I owned a feature end to end and settled it with user tests.",
    subChapters: [
      { date: "2022", title: "Strategy", body: "Wrote the community and social strategy for the platform." },
      { date: "2022 — 23", title: "Field operations", body: "Singapore FinTech Festival, TiE Global Summit, IIT Techfest." },
      { date: "2023", title: "First feature owned end to end", body: "Settled with user tests." },
    ],
  },
  {
    dates: "Apr — Jul 2022",
    org: "Springworks · Bangalore",
    title: "Operations Intern, Customer Success",
    metrics: "Zoho CRM implementation · −30% errors · +20% customer satisfaction",
    body: "My first look at what a support team actually does with a product. Streamlined the customer database and cut data entry time 40% — unglamorous, and the reason I now instrument before I build.",
    small: true,
    internship: true,
  },
]

const ALONGSIDE_ROWS: AlongsideRow[] = [
  {
    dates: "2025 — now",
    org: "Xthrive & independent",
    role: "Independent AI product builder",
    body: "AI fitness reports for a real gym, and two AI products of my own shipped end to end. Proof that the product instinct works without a team behind it.",
    highlights: ["70 paying members", "3 products shipped solo", "Anthropic API · React · Supabase"],
  },
  {
    dates: "2022 — 2025",
    org: "The Product Folks · Bangalore",
    role: "Product & growth",
    body: "Three years leading Asia's largest product community — content, engagement and events — nearly doubling membership. Hosted Asia's biggest product conference and its social launch, started the product podcast, ran the Women in Product community, and built the AI PM Interview Simulator 0→1.",
    highlights: ["100K → 200K members", "Insurjo: 35K registrations", "Ally Product #2 on Product Hunt"],
  },
  {
    dates: "2021 — 2022",
    org: "AIESEC · while at university",
    role: "Chief product operations officer",
    body: "Persona mapping, market analysis, product strategy and day-to-day operations for a physical product, across time zones, at twenty-one. This is where I learned that most product failures are coordination failures.",
    highlights: ["60-member international team", "50% market share growth", "+22% funnel conversion"],
  },
]

export function Journey() {
  return (
    <Section id="sec-journey" band>
      <Reveal className="mb-14 flex items-baseline justify-between gap-6">
        <div>
          <Eyebrow n="02" label="The journey" className="mb-6" />
          <h2 className="max-w-[26ch] font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
            Four years of <em className="em-accent">product</em>, one step at a time.
          </h2>
        </div>
        <Link href="/about" className="link shrink-0 font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
          Full CV →
        </Link>
      </Reveal>

      <h3 className="mb-6 font-mono text-[11px] font-medium tracking-[0.14em] text-ink-35 uppercase">
        Full-time roles
      </h3>
      <div className="relative pl-8">
        <div className="absolute top-2 bottom-2 left-[3px] w-px bg-rule-warm-2">
          <RevealSpine className="h-full w-full bg-rule-warm-2" />
        </div>
        {FULL_TIME_ROWS.map((row, i) => (
          <Reveal
            key={row.dates + row.org}
            index={i}
            as="div"
            className="relative border-t border-rule py-8 first:border-t-0 first:pt-0"
          >
            <span className="dot-marker absolute top-2 -left-[33.5px] h-2.5 w-2.5" style={{ background: "var(--rust)" }} />
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[13px] tracking-[0.02em]">
              <span className="font-medium text-rust">{row.dates}</span>
              <span className="tracking-[0.06em] text-ink-55 uppercase">{row.org}</span>
            </p>
            <h4 className={cnTitle(row.small)}>
              {row.title}
              {row.internship && (
                <span className="ml-2 align-middle font-mono text-[10px] font-medium tracking-[0.08em] text-ink-35 uppercase">
                  Internship
                </span>
              )}
            </h4>
            <p className="mt-2 font-mono text-[12px] tracking-[0.02em] text-ink-55">{row.metrics}</p>
            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-ink-80">{row.body}</p>
            {row.subChapters && (
              <div className="mt-6 space-y-6 border-l border-rule-warm-2 pl-6">
                {row.subChapters.map((sc) => (
                  <div key={sc.date + sc.title}>
                    <p className="flex flex-wrap items-baseline gap-x-2.5">
                      <span className="font-mono text-[12px] font-medium text-rust">{sc.date}</span>
                      <span className="font-serif text-[20px] leading-[1.3] font-normal text-ink">{sc.title}</span>
                    </p>
                    {sc.body && (
                      <p className="mt-1.5 max-w-[560px] text-[14px] leading-[1.55] text-ink-55">{sc.body}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-2 font-mono text-[11px] font-medium tracking-[0.14em] text-ink-80 uppercase">
          Alongside the full-time work
        </h3>
        <p className="mb-8 text-[16px] leading-[1.5] text-ink-55">Evenings, weekends and university years.</p>
        <div>
          {ALONGSIDE_ROWS.map((row, i) => (
            <Reveal
              key={row.dates + row.org}
              index={i}
              as="div"
              className="grid gap-2 border-t border-rule py-7 first:border-t-0 first:pt-0 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <p className="inline-flex items-center gap-2 font-mono text-[13px] leading-[1.4] text-ink-55">
                <span className="dot-marker h-2 w-2 shrink-0" style={{ background: "var(--accent-blue)" }} />
                {row.dates}
              </p>
              <div>
                <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">{row.org}</p>
                <h4 className="mt-2 font-serif text-[26px] leading-[1.2] font-normal text-ink">{row.role}</h4>
                <p className="mt-3 max-w-[600px] text-[16px] leading-[1.6] text-ink-80">{row.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {row.highlights.map((h) => (
                    <span
                      key={h}
                      className="border border-rule-warm bg-surface px-3 py-[7px] font-mono text-[11px] tracking-[0.04em] text-ink-80 uppercase"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function cnTitle(small?: boolean) {
  return small
    ? "mt-3 font-serif text-[24px] leading-[1.2] font-normal text-ink"
    : "mt-3 font-serif text-[29px] leading-[1.2] font-normal text-ink"
}
