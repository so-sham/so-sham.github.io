import Link from "next/link"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Reveal, RevealSpine } from "@/components/reveal"
import { Section } from "@/components/layout/section"

type Row = {
  dates: string
  org: string
  title: string
  metrics: string
  body: string
  current?: boolean
  small?: boolean
}

const ROWS: Row[] = [
  {
    dates: "Jul 2023 — now",
    org: "Narayana Health · Bangalore & Cayman Islands",
    title: "Product Manager",
    metrics: "4 verticals · 50+ cross-functional · installs 1.64M → 3.67M",
    body: "NH Care, HCCI Cayman and One Health Cayman. The guided service journey 0→1, passkey authentication, a four-portal insurance platform, and Mixpanel across the organisation. Two months on the ground in Cayman, twice.",
    current: true,
  },
  {
    dates: "2025 — now",
    org: "Xthrive & independent · evenings",
    title: "AI & Operations · Independent AI Product Builder",
    metrics: "Anthropic API · React · Supabase · 70 paying members",
    body: "AI fitness reports for a real gym, and two AI products of my own shipped end to end. Proof that the product instinct works without a team behind it.",
    current: true,
  },
  {
    dates: "2022 — 2025",
    org: "The Product Folks · Bangalore",
    title: "Product & Growth",
    metrics: "Asia's largest product community · under 100K → nearly 200K members · Insurjo 35K registrations",
    body: "Three years leading Asia's largest product community — content, engagement and events — nearly doubling membership. Hosted Asia's biggest product conference and its social launch, started the product podcast, ran the Women in Product community, and built the AI PM Interview Simulator 0→1.",
  },
  {
    dates: "2022 — 2023",
    org: "Kampd · Singapore",
    title: "Growth Manager",
    metrics: "+67% DAU engagement · 5× user engagement · −25% churn on Soapbox",
    body: "A platform for building interactive professional communities. I wrote the community and social strategy for it, then ran it in the field: organiser for Singapore FinTech Festival, TiE Global Summit and IIT Techfest — content, reels, website. Also the first time I owned a feature end to end and settled it with user tests.",
  },
  {
    dates: "Apr — Jul 2022",
    org: "Springworks · Bangalore",
    title: "Operations Intern, Customer Success",
    metrics: "Zoho CRM implementation · −30% errors · +20% customer satisfaction",
    body: "My first look at what a support team actually does with a product. Streamlined the customer database and cut data entry time 40% — unglamorous, and the reason I now instrument before I build.",
    small: true,
  },
  {
    dates: "2021 — 2022",
    org: "AIESEC · while at university",
    title: "Chief Product Operations Officer",
    metrics: "60-member international team · 50% market share growth · +22% funnel conversion",
    body: "Persona mapping, market analysis, product strategy and day-to-day operations for a physical product, across time zones, at twenty-one. This is where I learned that most product failures are coordination failures.",
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

      <div className="relative pl-8">
        <div className="absolute top-2 bottom-2 left-[3px] w-px bg-rule-warm-2">
          <RevealSpine className="h-full w-full bg-rule-warm-2" />
        </div>
        {ROWS.map((row, i) => (
          <Reveal
            key={row.dates + row.org}
            index={i}
            as="div"
            className="relative border-t border-rule py-8 first:border-t-0 first:pt-0"
          >
            <span
              className="absolute top-2 -left-[29px] h-1.5 w-1.5"
              style={{ background: row.current ? "var(--rust)" : "var(--accent-blue)" }}
            />
            <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
              <div className="font-mono text-[13px] leading-[1.4] text-ink-55">
                {row.dates}
                <div className="mt-1 text-ink-35">{row.org}</div>
              </div>
              <div>
                <h3 className={cnTitle(row.small)}>{row.title}</h3>
                <p className="mt-1 font-mono text-[12px] tracking-[0.02em] text-ink-55">{row.metrics}</p>
                <p className="mt-3 max-w-[600px] text-[16px] leading-[1.6] text-ink-80">{row.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function cnTitle(small?: boolean) {
  return small
    ? "font-serif text-[24px] leading-[1.2] font-normal text-ink"
    : "font-serif text-[29px] leading-[1.2] font-normal text-ink"
}
