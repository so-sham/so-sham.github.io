"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/layout/container"
import { Media, FillImg } from "@/components/layout/media"
import { AutoVideo } from "@/components/media/auto-video"
import { PkMarquee } from "@/components/media/pk-marquee"
import { XrFlip } from "@/components/media/xr-flip"
import { cn } from "@/lib/cn"

type Filter = "all" | "products" | "communities" | "ops"

const FILTERS: { id: Filter; label: string; count: number }[] = [
  { id: "all", label: "All", count: 10 },
  { id: "products", label: "Products", count: 4 },
  { id: "communities", label: "Communities", count: 4 },
  { id: "ops", label: "Consulting & ops", count: 2 },
]

const PREP_IMAGES = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/assets/img/prep-${n}.webp`,
  alt: `Prep AI interview simulator screenshot ${n}`,
}))
const XTHRIVE_IMAGES = Array.from({ length: 11 }, (_, i) => `/assets/img/xthrive-${i + 1}.webp`)

function ProjectBlock({
  n,
  kind,
  title,
  meta,
  children,
  media,
  link,
}: {
  n: string
  kind: string
  title: string
  meta: string
  children: React.ReactNode
  media: React.ReactNode
  link?: { label: string; href: string }
}) {
  return (
    <div className="grid gap-10 border-t border-rule py-12 first:border-t-0 first:pt-0 md:grid-cols-[0.9fr_1.1fr]">
      <Media ratio="16/10">{media}</Media>
      <div>
        <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">
          {n} · {kind}
        </p>
        <h3 className="mt-3 font-serif text-[22px] leading-[1.2] font-normal text-ink">{title}</h3>
        <p className="mt-2 font-mono text-[12px] text-ink-55">{meta}</p>
        <div className="mt-4 space-y-3 text-[15px] leading-[1.6] text-ink-80">{children}</div>
        {link && (
          <a href={link.href} target="_blank" rel="noopener" className="link mt-4 inline-block text-[14px] font-medium">
            {link.label}
          </a>
        )}
      </div>
    </div>
  )
}

function CommunityBlock({
  n,
  title,
  meta,
  img,
  alt,
  caption,
  children,
  table,
  tiles,
  link,
}: {
  n: string
  title: string
  meta: string
  img: string
  alt: string
  caption: string
  children: React.ReactNode
  table?: { label: string; body: string }[]
  tiles?: { src: string; alt: string; caption: string }[]
  link?: { label: string; href: string }
}) {
  return (
    <div className="border-t border-rule py-12 first:border-t-0 first:pt-0">
      <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">{n} · {meta}</p>
      <h3 className="mt-3 font-serif text-[22px] leading-[1.2] font-normal text-ink">{title}</h3>
      <Media ratio="16/10" className="mt-5 max-w-[600px] bg-paper-tint">
        <FillImg src={img} alt={alt} />
      </Media>
      <p className="mt-2 text-[13px] text-ink-55">{caption}</p>
      <div className="mt-4 max-w-[600px] space-y-3 text-[15px] leading-[1.6] text-ink-80">{children}</div>
      {table && (
        <div className="mt-6 max-w-[600px] divide-y divide-rule-warm border-t border-rule-warm">
          {table.map((row) => (
            <div key={row.label} className="grid grid-cols-[120px_1fr] gap-4 py-3">
              <p className="font-mono text-[11px] font-medium text-ink">{row.label}</p>
              <p className="text-[14px] leading-[1.5] text-ink-80">{row.body}</p>
            </div>
          ))}
        </div>
      )}
      {tiles && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((t) => (
            <div key={t.src}>
              <Media ratio="16/10" className="bg-paper-tint">
                <FillImg src={t.src} alt={t.alt} />
              </Media>
              <p className="mt-2 text-[12px] text-ink-55">{t.caption}</p>
            </div>
          ))}
        </div>
      )}
      {link && (
        <a href={link.href} target="_blank" rel="noopener" className="link mt-4 inline-block text-[14px] font-medium">
          {link.label}
        </a>
      )}
    </div>
  )
}

export function BuildingClient() {
  const [filter, setFilter] = useState<Filter>("all")
  const showProducts = filter === "all" || filter === "products"
  const showCommunities = filter === "all" || filter === "communities"
  const showOps = filter === "all" || filter === "ops"

  return (
    <>
      <SiteHeader />
      <main>
        <Container className="pt-[120px] pb-16">
          <Link href="/" className="link font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
            ← Home
          </Link>
          <p className="mt-6 font-mono text-[11px] font-medium tracking-[0.12em] text-ink-55 uppercase">
            Side projects
          </p>
          <h1 className="mt-4 max-w-[20ch] font-serif text-[clamp(34px,3.8vw,54px)] leading-[1.06] font-light tracking-[-0.022em] text-ink">
            Things I build and run on the <em className="em-accent">side</em>
          </h1>
          <p className="mt-5 max-w-[620px] text-[19px] leading-[1.7] text-ink-80">
            Four products built solo, four communities, one consulting engagement and the automation
            that holds the events together. Each one below says why it exists, what shipped, and
            what it taught.
          </p>
        </Container>

        <div className="sticky top-[60px] z-40 border-y border-rule bg-paper/95 backdrop-blur-sm">
          <Container className="flex flex-wrap gap-6 py-4">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "font-mono text-[11px] font-medium tracking-[0.08em] uppercase transition-colors",
                  filter === f.id ? "text-ink" : "text-ink-35"
                )}
              >
                {f.label} <span className="text-rust">{f.count}</span>
              </button>
            ))}
          </Container>
        </div>

        <Container className="py-16">
          {showProducts && (
            <section className="mb-16">
              <p className="mb-8 max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
                Built solo, end to end: discovery, UX, prompt architecture, API integration and
                deployment.
              </p>

              <ProjectBlock
                n="01"
                kind="Product"
                title="Forge — AI Workout Planner"
                meta="React · Vite · Supabase · Anthropic API · live at sosham.me/workout-planner"
                media={<AutoVideo src="/assets/video/forge-demo.mp4" poster="/assets/video/forge-demo-poster.jpg" />}
                link={{ label: "sosham.me/workout-planner ↗", href: "https://sosham.me/workout-planner/" }}
              >
                <p>
                  <strong>Why.</strong> Every training app I tried assumed I would never miss a week.
                  Miss two and the plan becomes a guilt artefact rather than a programme.
                </p>
                <p>
                  <strong>What it does.</strong> Generates progressive training programmes per user
                  and recalculates them when the week goes wrong, so the programme absorbs the missed
                  days.
                </p>
                <p>
                  <strong>What was hard.</strong> Holding state the model does not have. Structured
                  history lives in Supabase, only the deltas go into the prompt, and the returned plan
                  is validated against rules in code before it reaches the user.
                </p>
              </ProjectBlock>

              <ProjectBlock
                n="02"
                kind="Product"
                title="NourishPlan — AI Nutrition Planner"
                meta="React · Vite · Supabase · Anthropic API · live at sosham.me/meal-planner"
                media={<AutoVideo src="/assets/video/nourishplan-demo.mp4" poster="/assets/video/nourishplan-demo-poster.jpg" />}
                link={{ label: "sosham.me/meal-planner ↗", href: "https://sosham.me/meal-planner/" }}
              >
                <p>
                  <strong>Why.</strong> Every meal planner I tried assumed I would cook like an
                  American. Macros, dietary preference and regional cuisine are one problem, and most
                  tools solve only the first.
                </p>
                <p>
                  <strong>What it does.</strong> Builds meal plans that respect macro targets,
                  dietary rules and the food someone actually eats.
                </p>
                <p>
                  <strong>What I would rebuild.</strong> Generation sits on the write path, so a slow
                  model call blocks the user. It should have been queued from day one.
                </p>
              </ProjectBlock>

              <ProjectBlock
                n="03"
                kind="Product"
                title="Xthrive AI Reports"
                meta="70 paying members · Anthropic API + ReportLab · Aug 2025 — Feb 2026"
                media={<XrFlip images={XTHRIVE_IMAGES} alt="Xthrive AI report pages" />}
              >
                <p>
                  <strong>Why.</strong> Coaching part-time at the gym, I noticed members had no idea
                  whether they were improving. They had numbers from every assessment and no way to
                  read them.
                </p>
                <p>
                  <strong>What it is.</strong> An 11-page personalised PDF per member: percentile
                  scoring against the cohort, badge and tier logic, and an AI narrative that explains
                  the numbers in that member&rsquo;s context. Evals on the output, ReportLab for
                  typesetting.
                </p>
                <p>
                  <strong>What it taught.</strong> Proximity. I handed these to people in person and
                  watched them read. The percentile page was skimmed; the one-paragraph narrative was
                  the thing they photographed and sent to family.
                </p>
                <p className="text-[13px] text-ink-55">All eleven pages of one member&rsquo;s report, on a loop.</p>
              </ProjectBlock>

              <ProjectBlock
                n="04"
                kind="Product"
                title="Prep AI — PM interview simulator"
                meta="0→1 at The Product Folks · in collaboration with WorkHack · adopted across the community"
                media={<PkMarquee images={PREP_IMAGES} fast />}
              >
                <p>
                  <strong>Why.</strong> PM interview prep is advice about advice. People rehearse
                  against a friend who is kinder than any panel, or against a list of questions with
                  no feedback attached.
                </p>
                <p>
                  <strong>What shipped.</strong> An LLM-powered mock interview: prompt architecture,
                  an evaluation rubric that scores the answer against written criteria, and a feedback
                  UX that shows where the reasoning thinned out.
                </p>
                <p>
                  <strong>What was hard.</strong> The rubric. A model will happily tell everyone they
                  did well. Useful feedback needed the criteria written down first, as a product
                  decision.
                </p>
              </ProjectBlock>
            </section>
          )}

          {showCommunities && (
            <section className="mb-16">
              <p className="mb-8 max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
                Rooms built for other product people, and the operations that keep them running.
              </p>

              <CommunityBlock
                n="05"
                meta="2022 — 2025 · Asia's largest product community · under 100K → nearly 200K members"
                title="The Product Folks"
                img="/assets/img/tpf-collage-wide.webp"
                alt="The Product Folks community events"
                caption="Product (Un)Conference 2024, Bengaluru · podcast recording · the room at the close."
                table={[
                  { label: "Conference", body: "Hosted Asia's biggest product conference and ran its social launch. GTM for Insurjo brought 35K registrations and a 17% lift in attendance." },
                  { label: "Podcast", body: "Launched the product podcast — recording, video creation and the social launch." },
                  { label: "Teardowns", body: "Organised product teardowns and launches. Ally Product reached #2 on Product Hunt." },
                  { label: "Women in Product", body: "Ran events and community for the Women in Product vertical." },
                  { label: "Events", body: "Offline and online events end to end, each branded and run on social." },
                  { label: "AI Simulator", body: "The AI PM Interview Simulator, 0→1 — prompt architecture, rubric, feedback UX." },
                ]}
                tiles={[
                  { src: "/assets/img/tpf-team-backdrop.webp", alt: "TPF Unconference 2023 core team", caption: "(Un)Conference 2023 · the core team" },
                  { src: "/assets/img/tpf-podcast-cpo.webp", alt: "The CPO Podcast recording with Jio", caption: "The CPO Podcast · Jio" },
                  { src: "/assets/img/tpf-group-2023.webp", alt: "TPF Unconference 2023 full room", caption: "(Un)Conference 2023 · the full room" },
                  { src: "/assets/img/tpf-volunteers.webp", alt: "TPF volunteers after the event", caption: "Volunteers, after the event" },
                ]}
              >
                <p>
                  <strong>The role.</strong> Taking membership from under 100K to nearly 200K — not
                  just the number, but a connected community of product people.
                </p>
                <p>
                  <strong>What it taught.</strong> Distribution is a product problem. The community
                  grew when the calendar became predictable, not when the content got cleverer.
                </p>
              </CommunityBlock>

              <CommunityBlock
                n="06"
                meta="Chapter lead · Bangalore"
                title="Women in AI, Bangalore"
                img="/assets/img/wai-collage-wide.webp"
                alt="Women in AI Bangalore events"
                caption="Women in AI · in conversation, with Peak XV, Women in Product and Anthropic"
              >
                <p>
                  <strong>What it is.</strong> The local chapter of a global network. I run
                  programming and speakers, and the unglamorous half underneath — registration,
                  payments and comms, automated end to end so an event does not need three people on
                  a weekend.
                </p>
                <p>
                  <strong>Why I run it.</strong> It keeps me connected to women working in AI and to
                  the leaders in the field, and it keeps me inside the community rather than watching
                  it from outside.
                </p>
              </CommunityBlock>

              <CommunityBlock
                n="07"
                meta="Co-organiser · with Peak XV and The Product Folks"
                title="Women in Product"
                img="/assets/img/wip-collage-wide.webp"
                alt="Women in Product events"
                caption="Product Happy Hour with Mixpanel · Genesis, Bengaluru"
              >
                <p>
                  <strong>What it is.</strong> The Women in Product vertical at The Product Folks —
                  the community and the events that hold it together.
                </p>
                <p>
                  <strong>What I do.</strong> Product Happy Hour, run with Mixpanel, brought 100+
                  product people together in Bangalore across B2B, B2C, growth, fintech and platform
                  teams. Genesis ran as a series of conversations for women building in web3. The
                  Women in AI edition was organised with Peak XV, Anthropic and Basecamp.
                </p>
                <p>
                  <strong>Why I keep doing it.</strong> It keeps me connected to the women building
                  products and to the leaders in the field.
                </p>
              </CommunityBlock>

              <CommunityBlock
                n="08"
                meta="2021 — 2022 · Chief Product Operations Officer · 60-member international team"
                title="AIESEC"
                img="/assets/img/aiesec-collage-v2.webp"
                alt="AIESEC leadership"
                caption="AIESEC · leading operations across time zones"
              >
                <p>
                  <strong>The role.</strong> Persona mapping, market analysis, product strategy and
                  day-to-day operations for a physical product, across time zones, at twenty-one.
                </p>
                <p>
                  <strong>Results.</strong> 50% market share growth and 22% higher sales funnel
                  conversion, through persona mapping and international partnerships.
                </p>
                <p>
                  <strong>What it taught.</strong> Most product failures are coordination failures.
                  This is where the operations instinct came from.
                </p>
              </CommunityBlock>
            </section>
          )}

          {showOps && (
            <section>
              <p className="mb-8 max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
                Work done for other people&rsquo;s products and other people&rsquo;s events.
              </p>

              <CommunityBlock
                n="09"
                meta="Product consultant · Jun 2024 — Sept 2024"
                title="Lean On — mental health"
                img="/assets/img/leanon-hero.webp"
                alt="LeanOn peer support product"
                caption="LeanOn — anonymous peer support"
                link={{ label: "leanon.app ↗", href: "https://www.leanon.app/" }}
              >
                <p>
                  <strong>The engagement.</strong> Led 0→1 product and community growth for a
                  mental-health product: a roadmap built out of user feedback, a GTM strategy to take
                  it out, and engagement insights feeding back into both.
                </p>
                <p>
                  <strong>The product.</strong> LeanOn is peer emotional support for India: an
                  anonymous session with a trained peer listener who has lived through the same thing
                  — loneliness, burnout, anxiety, grief, a relationship or a startup coming apart —
                  with no appointment and no diagnosis, at any hour. Phone-OTP sign-up, first name
                  only, text or voice in English or Hindi, UPI wallet. Peer support, stated plainly as
                  not therapy, with crisis helplines on the page.
                </p>
                <p>
                  <strong>Why the positioning matters.</strong> A fifteen-minute session starts at
                  ₹160 against ₹1,500–4,000 for therapy in India, and the first five minutes are
                  free. Price and anonymity are the product: the constraint is a joint family, a late
                  night, and the stigma of asking.
                </p>
              </CommunityBlock>

              <CommunityBlock
                n="10"
                meta="No-code · Zapier, Mailmodo, Razorpay, Webflow"
                title="Event operations, automated"
                img="/assets/img/eventops-collage.webp"
                alt="Event operations automation"
                caption="Registration, reminders and follow-up, wired together"
              >
                <p>
                  <strong>Why.</strong> Community events fail on logistics, not content.
                  Registration, payment, reminders and follow-up were being done by hand every time,
                  by the same few people, on evenings and weekends.
                </p>
                <p>
                  <strong>What shipped.</strong> The whole chain wired together, so an event of 100 or
                  35,000 registrations costs roughly the same in human hours.
                </p>
              </CommunityBlock>
            </section>
          )}

          <div className="mt-16 border-t border-rule pt-10 text-center">
            <Link href="/#sec-contact" className="link text-[16px] font-medium">
              Something here worth a longer conversation? Get in touch.
            </Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}
