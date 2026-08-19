import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/layout/container"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Media, FillImg } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"
import { CsStatRow } from "@/components/case-study/case-study-kit"

export const metadata: Metadata = {
  title: "About — Shamitha Gowda",
}

const CV_HREF = "/assets/Shamitha-Gowda-Resume.pdf"
const CALENDLY_HREF = "https://calendar.app.google/N412NUMFDHnZgN8fA"
const EMAIL = "shamitha2807@gmail.com"

const PRINCIPLES = [
  {
    title: <>I <em className="em-accent">instrument</em> before I build</>,
    body: "If the behaviour is not measured today, the feature cannot be evaluated tomorrow. This costs a sprint and I have never regretted it.",
  },
  {
    title: <>The <em className="em-accent">edge case</em> is the product</>,
    body: "In health, the 2% who fall outside the flow are the people with the most at stake. Designing for them last means designing for them never.",
  },
  {
    title: <>Write the <em className="em-accent">boundary</em> down early</>,
    body: "What we own, what we rent, what is out of scope — one page, signed. Every dependency I have lost was cheaper because that page existed.",
  },
  {
    title: <>A manual process that <em className="em-accent">runs</em> beats an elegant one that slips</>,
    body: "I will ship a file exchange and a reconciliation report over a real-time integration that arrives after the renewal date. This makes engineers unhappy and it is still right.",
  },
]

const BEYOND = [
  {
    label: "Personal training",
    a: "Coaching part-time at Xthrive in Bangalore, while pursuing CASM certification. Programming for people who are not athletes and do not want to become one.",
    b: "Five or six years in now. I got into it more seriously during grief after my father's death, and since coming out of that I have been trying to keep it up in a non-stress environment. Six months coaching, and the CASM coursework I'm currently working through is teaching me most of what I know — and it is the closest thing I have to a research lab on adherence.",
  },
  {
    label: "Communities",
    a: "Three years of product and growth at The Product Folks — doubled the community, ran GTM for Insurjo, their landmark event (35K registrations, +17% attendance) and Ally Product (#2 on Product Hunt).",
    b: "Chapter lead for Women in AI Bangalore, and co-organiser of InVisible Women in AI with Peak XV, The Product Folks and Women in Product.",
  },
  {
    label: "AIESEC",
    a: "Chief Product Operations Officer, 2021–22. A 60-member international team, 50% market share growth and a 22% lift in sales funnel conversion through persona mapping and international partnerships.",
    b: "Twenty-one years old, running operations across time zones. Nothing since has felt logistically harder.",
  },
  {
    label: "Dance",
    a: "They say art speaks louder than words. About ten years of Bharatanatyam — multiple performances, awards, three exams passed, certified as a senior dancer.",
    b: "I hit a pause after my college era and always yearn to restart. The discipline and the creativity it brought stay throughout life.",
  },
]

const BOOKS = [
  {
    src: "/assets/img/cover-sapiens.webp",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    take: "Particularly interesting for the way it explains human psychology. The thing that stood out: humans became extraordinarily powerful because we can believe in and cooperate around things that exist only in our collective imagination — money, religion, brands.",
  },
  {
    src: "/assets/img/cover-palace.webp",
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    take: "Revolutionary for me. I always thought about the women in the Ramayana and Mahabharata — we hear the story from a hero's point of view and miss that the women were integral and had human emotions like us. Draupadi's telling shows the one-dimensional women of our myths to be the complex humans they were.",
  },
  {
    src: "/assets/img/cover-coffee.webp",
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    take: "A small café in Japan where you can time travel. It shows how everyone regrets, and wants to go back in time just to feel the same emotions. Contemporary, but it tackles the incredible feeling of loss, regret and guilt. I loved the series.",
  },
]

const CV_ENTRIES = [
  {
    dates: "Jul 2023 — present",
    place: "Bangalore · Cayman Islands",
    title: "Product Manager — Narayana Health",
    sub: "4 verticals · 50+ cross-functional (25+ eng, 10 design, 7+ QA, ops, biz) · NH Care, HCCI Cayman, One Health Cayman",
    bullets: [
      <>Built the guided service journey 0→1 — booking, check-in, consultation, investigations, payments and follow-ups as one workflow. Pay Online revenue grew ₹40L → ₹13.3Cr/month. <Link href="/work/guided-journey" className="link">Case study →</Link></>,
      "Digital bookings 32% → 53% of total appointments, by revamping the booking flow with consultation-specific slots and alternate provider suggestions, and closing the drop-offs Mixpanel exposed.",
      "Grew subscription revenue ₹31.8L → ₹3.75Cr in FY24-25 (42% digital, peak 59%) via Easy Add Plan at checkout, Onboarding 2.0 at 91% completion, and Renewal 2.0 at 51% digital renewal. Health packages +157% (₹0.43Cr → ₹1.10Cr).",
      <>Shipped Pulse AI report intelligence — OCR ingestion plus LLM analysis producing plain-language summaries with CTAs. <Link href="/work/pulse-ai" className="link">Case study →</Link></>,
      "Launched the Banashankari consumer subscription with UPI and card AutoPay mandates on Juspay HyperPG — payment and mandate in a single transaction; flow and architecture designed in one month. Live, rolling out August 2026.",
      "Built the Arya vertical 0→1 — a purchase workflow covering checkup scheduling, automated pricing, decisioning, plan creation, renewals and activation UX, instrumented at every step. In controlled rollout.",
      "Introduced and implemented Mixpanel org-wide — events, funnels, retention and flow-level analytics across records, bookings and subscriptions; connected to Zoho CRM, extended to both Cayman platforms.",
      "Built Health Records into the app's retention layer: 40% post-login adoption, 90K monthly viewers, 50% same-day return, 248 organic bookings in two weeks with zero marketing spend.",
      <>Originated passkey authentication for HCCI Cayman after spotting that SIM and number recycling was breaking account security; login success 60% → 93–95%, appointments +41–65%, repeat visits +75%, cancellations −12–14%. <Link href="/work/passkey-identity" className="link">Case study →</Link></>,
      "Delivered digital registration, payments, checkups and OTP login for HCCI at 80% process automation — digital payments from near-zero to $50K+/month.",
      <>Product Owner for One Health Cayman: four portals serving 10,000+ members, 100+ employers, 5,000+ users, 75 Cayman facilities and 50+ US providers, with VBA and athenahealth integrations automating eligibility, claims and policy operations. <Link href="/work/one-health-cayman" className="link">Case study →</Link></>,
    ],
  },
  {
    dates: "Dec 2025 — present",
    place: "Independent",
    title: "Independent AI Product Builder — sosham.me",
    sub: "React · Vite · Supabase · Anthropic API",
    bullets: [
      <>AI Nutrition Planner and AI Workout Planner — LLM-generated meal plans across dietary preferences, macros and regional cuisines, and progressive training programmes. Problem discovery, UX, prompt engineering, API integration and deployment, all solo. <Link href="/#sec-building" className="link">More →</Link></>,
    ],
  },
  {
    dates: "Aug 2025 — Feb 2026",
    place: "Bangalore",
    title: "AI & Operations — Xthrive Fitness",
    sub: "",
    bullets: [
      <>Built AI fitness reports for 70 paying members — Anthropic API with evals generating personalised 11-page PDFs: percentile scoring, badge and tier logic, AI narrative summaries. <Link href="/#sec-building" className="link">More →</Link></>,
      "Streamlined member onboarding, cutting manual steps for staff.",
    ],
  },
  {
    dates: "Jun 2024 — Sept 2024",
    place: "Lean On · Mental health",
    title: "Product Consultant — Lean On",
    sub: "",
    bullets: ["Led 0→1 product and community growth — built a roadmap through user feedback, GTM strategy, and user engagement insights."],
  },
  {
    dates: "Apr 2022 — Jul 2025",
    place: "Bangalore",
    title: "Product & Growth — The Product Folks",
    sub: "",
    bullets: [
      "Led Asia's largest product community for three years — content, engagement and events — growing membership from under 100K to nearly 200K.",
      "Hosted Asia's biggest product conference and ran its social launch; launched the product podcast end to end (recording, video, social); organised recurring product teardowns and launches, online and offline.",
      "Ran the Women in Product community — events and community management.",
      "Built the AI PM Interview Simulator 0→1: prompt architecture, evaluation rubric and feedback UX. Adopted across the PM community.",
      "Led GTM for Insurjo (35K registrations, +17% attendance) and Ally Product (#2 on Product Hunt, 800 week-one signups).",
    ],
  },
  {
    dates: "Jul 2022 — Jul 2023",
    place: "Singapore",
    title: "Growth Manager — Kampd",
    sub: "",
    bullets: [
      "Owned the community and social media strategy for a platform building interactive professional communities.",
      "Organiser for Singapore FinTech Festival and TiE Global Summit — event content, reels and website work — and community and social support for IIT Techfest, including its content strategy.",
      "Grew DAU engagement 67% with those partnerships and the IITs as early adopters: 5× user engagement, 20% brand recognition lift. Built multiple college communities.",
      "Optimised the Soapbox feature through user testing — 30% higher satisfaction, 25% lower churn — and doubled partnership growth with AWS, WWF and IBM.",
    ],
  },
  {
    dates: "2018 — 2022",
    place: "Bangalore",
    title: "B.E. — Sir M. Visvesvaraya Institute of Technology",
    sub: "",
    bullets: [
      "CGPA 7.9. Chief Product Operations Officer at AIESEC (Jan 2021 – Jan 2022): led a 60-member international team to 50% market share growth and a 22% increase in sales funnel conversion through persona mapping and international partnerships.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container className="pt-[120px] pb-16">
          <div className="grid items-start gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal className="order-2 md:order-1">
              <Eyebrow n="03" label="About" className="mb-6" />
              <h1 className="max-w-[16ch] font-serif text-[clamp(34px,3.8vw,54px)] leading-[1.06] font-light tracking-[-0.022em] text-ink">
                I build products in <em className="em-accent">complex systems</em>
              </h1>
              <div className="mt-6 max-w-[600px] space-y-[1.35em] text-[17px] leading-[1.62] text-ink-80">
                <p>
                  Four years of consumer healthcare product work across India, the Cayman Islands
                  and the US. At Narayana Health I built Journeys 0→1 — the hospital visit modelled
                  as a state machine rather than a booking — and took online payments from ₹40L to
                  ₹13.3Cr a month, digital appointments from 32% to 53%. Then an insurance platform
                  for CIHL: four portals for members, employers, providers and administrators,
                  integrated with VBA and athenahealth across two markets.
                </p>
                <p>
                  The work I keep gravitating towards is the kind where the product sits on top of
                  systems that were never designed to talk to each other — queue management, claims
                  adjudication, EMR, identity — and someone has to decide what the person on the
                  other side is actually shown.{" "}
                  <span className="em-underline">
                    Identity, authentication and risk had been one database field
                  </span>{" "}
                  before that project; separating them was the product decision, and the login
                  screen was the consequence.
                </p>
                <p>
                  Two of those platforms were scoped in markets I had to fly to and live in, on{" "}
                  <span className="em-underline">150+ user interviews across 10+ nationalities</span>
                  . Before all of it I ran a 60-person international team at AIESEC, which is where
                  I learned that most product failures are coordination failures wearing a technical
                  costume.
                </p>
              </div>
            </Reveal>
            <Reveal index={1} className="order-1 md:order-2">
              <Media ratio="4/5" className="bg-paper-tint">
                <FillImg src="/assets/img/about-portrait-collage.webp" alt="Speaking and hosting at community events" />
              </Media>
            </Reveal>
          </div>
        </Container>

        <div className="band py-24">
          <Container>
            <Reveal className="mb-10">
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
                How I operate
              </h2>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={i} index={i} className="border-t border-rule-warm pt-6">
                  <h3 className="font-serif text-[27px] leading-[1.2] font-light text-ink">{p.title}</h3>
                  <p className="mt-3 max-w-[420px] text-[15px] leading-[1.55] text-ink-80">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>

        <Container className="py-24">
          <Reveal className="mb-10">
            <h2 className="max-w-[26ch] font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
              The things I keep doing outside the job — and what they teach me about people.
            </h2>
          </Reveal>
          <div>
            {BEYOND.map((row, i) => (
              <Reveal key={row.label} index={i} className="grid gap-4 border-t border-rule py-8 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr]">
                <h3 className="font-serif text-[18px] font-normal text-ink">{row.label}</h3>
                <div className="max-w-[600px] space-y-3 text-[15px] leading-[1.6] text-ink-80">
                  <p>{row.a}</p>
                  <p>{row.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid grid-cols-3 gap-4">
            <Media ratio="4/3" className="bg-paper-tint">
              <FillImg src="/assets/img/xthrive-group.webp" alt="Coaching at Xthrive — the women's training group" />
            </Media>
            <Media ratio="4/3" className="bg-paper-tint">
              <FillImg src="/assets/img/invisible-blr.webp" alt="InVisible, Bangalore" />
            </Media>
            <Media ratio="4/3" className="bg-paper-tint">
              <FillImg src="/assets/img/dance-collage-tile.webp" alt="Bharatanatyam and folk performances with the troupe" />
            </Media>
          </Reveal>
        </Container>

        <div className="band py-24">
          <Container>
            <Reveal className="mb-10">
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
                Books that shaped me
              </h2>
              <p className="mt-4 max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
                I love reading, and reading so much growing up shaped me as a person. The superpower
                it gave me is{" "}
                <span className="em-underline">
                  the ability to put myself in someone else&rsquo;s shoes
                </span>{" "}
                — when you read enough different points of view and thought processes, empathy stops
                being an effort.
              </p>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-3">
              {BOOKS.map((book, i) => (
                <Reveal key={book.title} index={i}>
                  <Media ratio="2/3" className="w-[120px] bg-paper-tint">
                    <FillImg src={book.src} alt={`${book.title} cover`} />
                  </Media>
                  <h3 className="mt-4 font-serif text-[18px] font-normal text-ink">{book.title}</h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.05em] text-ink-55 uppercase">{book.author}</p>
                  <p className="mt-3 max-w-[380px] text-[14px] leading-[1.55] text-ink-80">{book.take}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>

        <Container className="py-24">
          <Reveal className="mb-10 flex items-baseline justify-between gap-6">
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
              Curriculum vitae
            </h2>
            <a href={CV_HREF} download="Shamitha-Gowda-Resume.pdf" className="link shrink-0 font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
              Download PDF →
            </a>
          </Reveal>

          <CsStatRow
            stats={[
              { value: "₹4.4Cr → ₹13.6Cr", label: "Monthly digital revenue contributed to (3×)" },
              { value: "3.67M", label: "NH Care installs, from 1.64M" },
              { value: "150+", label: "User interviews, 10+ nationalities" },
              { value: "20+", label: "Funnel experiments run" },
            ]}
          />

          <div className="mt-4">
            {CV_ENTRIES.map((entry, i) => (
              <Reveal key={entry.title} index={i} className="grid gap-3 border-t border-rule py-8 first:pt-8 md:grid-cols-[180px_1fr] md:gap-8">
                <div className="font-mono text-[12px] leading-[1.4] text-ink-55">
                  {entry.dates}
                  <div className="mt-1 text-ink-35">{entry.place}</div>
                </div>
                <div>
                  <h3 className="font-serif text-[20px] leading-[1.25] font-normal text-ink">{entry.title}</h3>
                  {entry.sub && <p className="mt-1 font-mono text-[11px] text-ink-55">{entry.sub}</p>}
                  <ul className="mt-3 max-w-[640px] list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-ink-80">
                    {entry.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 grid gap-6 border-t border-rule pt-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">Product</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-80">
                Roadmap ownership · PRDs · user research · funnel optimisation · experimentation ·
                process automation · workflow systems · GTM · stakeholder management · 0→1 and
                scaling
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">Analytics &amp; build</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-80">
                Mixpanel (introduced org-wide) · GA4 · SQL · Zoho CRM · Jira · Figma · prompt
                engineering · OCR + LLM pipelines · Anthropic API · React · Supabase · Claude Design
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">Languages</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-80">English · Kannada · Hindi</p>
            </div>
          </Reveal>
        </Container>

        <div className="border-t border-rule py-20">
          <Container>
            <Reveal>
              <p className="max-w-[24ch] font-serif text-[clamp(28px,3vw,38px)] leading-[1.15] font-light text-ink">
                Hiring, or just want to argue about a roadmap?
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-ink-55 uppercase">Email</p>
                  <a href={`mailto:${EMAIL}`} className="link mt-1 block text-[15px] font-medium">
                    {EMAIL}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-ink-55 uppercase">Book a call</p>
                  <a href={CALENDLY_HREF} target="_blank" rel="noopener" className="link mt-1 block text-[15px] font-medium">
                    Calendly →
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.1em] text-ink-55 uppercase">CV</p>
                  <a href={CV_HREF} download="Shamitha-Gowda-Resume.pdf" className="link mt-1 block text-[15px] font-medium">
                    CV, PDF ↓
                  </a>
                </div>
              </div>
              <p className="mt-8 font-mono text-[12px] tracking-[0.08em] text-ink-55 uppercase">Bangalore, India</p>
            </Reveal>
          </Container>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
