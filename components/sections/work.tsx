import Link from "next/link"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Media } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"
import { AutoVideo } from "@/components/media/auto-video"
import { PkMarquee } from "@/components/media/pk-marquee"
import { cn } from "@/lib/cn"

const PK_IMAGES = [1, 2, 3, 4].map((n) => ({
  src: `/assets/img/pk-${n}.webp`,
  alt: `Passkey identity screenshot ${n}`,
}))

export function Work() {
  return (
    <Section id="sec-work">
      <Reveal className="mb-14">
        <Eyebrow n="03" label="Selected work" className="mb-6" />
        <h2 className="max-w-[26ch] font-serif text-[clamp(28px,3vw,40px)] leading-[1.12] font-light tracking-[-0.02em] text-ink">
          Problems, written to be <em className="em-accent">read</em>
        </h2>
        <p className="mt-4 max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
          Each one names <span className="em-underline">the option that was rejected and the thing that broke</span>.
        </p>
      </Reveal>

      <div>
        {/* Row 1 — Guided Journey */}
        <Reveal
          as={Link}
          href="/work/guided-journey"
          index={0}
          className="group grid items-center gap-10 border-t border-rule-warm-2 py-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
        >
          <Media ratio="4/3" className="bg-paper-tint transition-[border-color] duration-250 group-hover:border-ink-35">
            <AutoVideo
              src="/assets/video/guided-journey-demo.mp4"
              poster="/assets/video/guided-journey-demo-poster.jpg"
              rate={1.75}
              fit="contain"
            />
          </Media>
          <div>
            <p className="font-mono text-[12px] tracking-[0.08em] text-ink-55 uppercase">
              Guided service journey · NH Care, India · 0→1
            </p>
            <h3 className="mt-3 font-serif text-[clamp(24px,2.6vw,32px)] leading-[1.15] font-light text-ink transition-transform duration-250 group-hover:translate-x-1">
              Turning six disconnected steps into one hospital <em className="em-accent">visit</em>
            </h3>
            <p className="mt-4 max-w-[565px] text-[16px] leading-[1.6] text-ink-80">
              Booking, check-in, consultation, investigations, payments and follow-up all worked,
              and none of them knew about each other. Rebuilt as one workflow: online payments went
              from ₹40L to ₹13.3Cr a month, digital bookings 32% → 53%.
            </p>
          </div>
        </Reveal>

        {/* Row 2 — Passkey identity */}
        <Reveal
          as={Link}
          href="/work/passkey-identity"
          index={1}
          className="group grid items-center gap-10 border-t border-rule-warm-2 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16"
        >
          <div className="order-2 md:order-1">
            <p className="font-mono text-[12px] tracking-[0.08em] text-ink-55 uppercase">
              Passkey authentication · HCCI, Cayman Islands
            </p>
            <h3 className="mt-3 font-serif text-[clamp(24px,2.6vw,32px)] leading-[1.15] font-light text-ink transition-transform duration-250 group-hover:translate-x-1">
              Fixing login in a market where phone numbers <em className="em-accent">change hands</em>
            </h3>
            <p className="mt-4 max-w-[565px] text-[16px] leading-[1.6] text-ink-80">
              In Cayman a mobile number can be recycled in ninety days, so a new owner could
              authenticate against the previous owner&rsquo;s records. Passkeys, multi-device
              support and a rebuilt OTP: 60% → 93–95% login success.
            </p>
          </div>
          <Media ratio="4/3" className="order-1 transition-[border-color] duration-250 group-hover:border-ink-35 md:order-2">
            <PkMarquee images={PK_IMAGES} />
          </Media>
        </Reveal>

        {/* Row 3 — One Health Cayman */}
        <Reveal
          as={Link}
          href="/work/one-health-cayman"
          index={2}
          className={cn(
            "group grid items-center gap-10 border-t border-rule py-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16",
            "border-b border-rule-warm-2"
          )}
        >
          <Media ratio="16/9" className="bg-[#0B0B0B] transition-[border-color] duration-250 group-hover:border-ink-35">
            <AutoVideo
              src="/assets/video/cayman-1.mp4"
              poster="/assets/video/cayman-1-poster.jpg"
              rate={1.75}
              playlist={["/assets/video/cayman-1.mp4", "/assets/video/cayman-2.mp4", "/assets/video/cayman-3.mp4"]}
            />
          </Media>
          <div>
            <p className="font-mono text-[12px] tracking-[0.08em] text-ink-55 uppercase">
              One Health Cayman · 4-portal platform · US &amp; Cayman
            </p>
            <h3 className="mt-3 font-serif text-[clamp(24px,2.6vw,32px)] leading-[1.15] font-light text-ink transition-transform duration-250 group-hover:translate-x-1">
              Building an insurance ecosystem across Cayman and the <em className="em-accent">US</em>
            </h3>
            <p className="mt-4 max-w-[565px] text-[16px] leading-[1.6] text-ink-80">
              Members, employers, providers and admins, 10,000+ people whose care crosses two
              countries, and no shared source of truth. Two months on the ground, 50+ interviews,
              VBA and athenahealth underneath.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
