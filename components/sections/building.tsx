import Link from "next/link"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Media, FillImg } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"
import { AutoVideo } from "@/components/media/auto-video"
import { PkMarquee } from "@/components/media/pk-marquee"
import { XrFlip } from "@/components/media/xr-flip"

const PREP_IMAGES = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/assets/img/prep-${n}.webp`,
  alt: `Prep AI interview simulator screenshot ${n}`,
}))

const XTHRIVE_IMAGES = Array.from({ length: 11 }, (_, i) => `/assets/img/xthrive-${i + 1}.webp`)

const CONSULTING_CARDS = [
  {
    img: "/assets/img/leanon-hero.webp",
    alt: "LeanOn peer support product",
    kicker: "Product consultant · Jun — Sept 2024",
    title: "Lean On — mental health",
    body: "Led 0→1 product and community growth: a roadmap built out of user feedback, a GTM strategy, and engagement insights feeding both.",
  },
  {
    img: "/assets/img/tpf-collage-wide.webp",
    alt: "The Product Folks community events",
    kicker: "Product & growth · 3 years",
    title: "The Product Folks",
    body: (
      <>
        Doubled the community. GTM for <strong>Insurjo, their landmark event</strong> — 35K
        registrations and a 17% lift in attendance — and Ally Product to #2 on Product Hunt.
      </>
    ),
  },
  {
    img: "/assets/img/wai-collage-wide.webp",
    alt: "Women in AI Bangalore chapter events",
    kicker: "Chapter lead · Bangalore",
    title: "Women in AI",
    body: "Programming and partnerships for the local chapter of a global network, and co-organiser of InVisible Women in AI with Peak XV.",
  },
  {
    img: "/assets/img/wip-collage-wide.webp",
    alt: "Women in Product events",
    kicker: "Co-organiser",
    title: "Women in Product",
    body: "The Women in Product vertical at The Product Folks — sessions, happy hours and the Genesis series, run with Peak XV.",
  },
  {
    img: "/assets/img/eventops-collage.webp",
    alt: "Event operations automation",
    kicker: "No-code operations",
    title: "Event operations, automated",
    body: "Registration, reminders and post-event follow-up wired together so the events run without anyone watching a spreadsheet.",
  },
]

export function Building() {
  return (
    <Section id="sec-building" border="top">
      <Reveal className="mb-14 flex items-baseline justify-between gap-6">
        <div>
          <Eyebrow n="05" label="Side projects" className="mb-6" />
          <h2 className="max-w-[26ch] font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
            Things I build and run on the <em className="em-accent">side</em>
          </h2>
          <p className="mt-4 max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
            Products, consulting and communities I have{" "}
            <span className="em-underline">run alongside the day job</span>.
          </p>
        </div>
        <Link href="/building" className="link shrink-0 font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
          Longer write-ups →
        </Link>
      </Reveal>

      <h3 className="mb-6 font-serif text-[20px] font-normal text-ink">Products I built solo</h3>
      <div className="mb-16 grid gap-8 sm:grid-cols-2">
        <Reveal as={Link} href="/building" index={0} className="group block">
          <Media ratio="16/10" className="bg-black">
            <AutoVideo src="/assets/video/forge-demo.mp4" poster="/assets/video/forge-demo-poster.webp" />
          </Media>
          <h4 className="mt-4 font-serif text-[18px] font-normal text-ink">Forge — AI Workout Planner</h4>
          <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">
            Progressive training programmes generated per user. React, Vite, Supabase, Anthropic
            API. <span className="text-ink-55">sosham.me/workout-planner</span>
          </p>
        </Reveal>

        <Reveal as={Link} href="/building" index={1} className="group block">
          <Media ratio="16/10" className="bg-white">
            <AutoVideo src="/assets/video/nourishplan-demo.mp4" poster="/assets/video/nourishplan-demo-poster.webp" />
          </Media>
          <h4 className="mt-4 font-serif text-[18px] font-normal text-ink">NourishPlan — AI Nutrition Planner</h4>
          <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">
            Meal plans that respect macros, dietary rules and regional cuisines.{" "}
            <span className="text-ink-55">sosham.me/meal-planner</span>
          </p>
        </Reveal>

        <Reveal as={Link} href="/building" index={2} className="group block">
          <Media ratio="16/10">
            <XrFlip images={XTHRIVE_IMAGES} alt="Xthrive AI report pages" />
          </Media>
          <h4 className="mt-4 font-serif text-[18px] font-normal text-ink">Xthrive AI Reports</h4>
          <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">
            11-page personalised reports for 70 paying gym members. Percentiles, tiers, AI
            narrative.
          </p>
        </Reveal>

        <Reveal as={Link} href="/building" index={3} className="group block">
          <Media ratio="16/10">
            <PkMarquee images={PREP_IMAGES} fast />
          </Media>
          <h4 className="mt-4 font-serif text-[18px] font-normal text-ink">Prep AI — PM interview simulator</h4>
          <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">
            0→1 at The Product Folks, in collaboration with WorkHack. Prompt architecture,
            evaluation rubric, feedback UX.
          </p>
        </Reveal>
      </div>

      <h3 className="mb-6 font-serif text-[20px] font-normal text-ink">
        Consulting, communities and operations
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CONSULTING_CARDS.map((card, i) => (
          <Reveal as={Link} href="/building" key={card.title} index={i} className="group block">
            <Media ratio="4/3" className="bg-paper-tint">
              <FillImg src={card.img} alt={card.alt} />
            </Media>
            <p className="mt-4 font-mono text-[10px] tracking-[0.1em] text-ink-55 uppercase">{card.kicker}</p>
            <h4 className="mt-2 font-serif text-[18px] font-normal text-ink">{card.title}</h4>
            <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
