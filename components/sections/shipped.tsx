import Link from "next/link"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Media, FillImg } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"
import { StatTile } from "@/components/layout/stat-tile"

const BETA_UPDATED = "Aug 2026"

export function Shipped() {
  return (
    <Section id="sec-shipped" band>
      <Reveal className="mb-14">
        <Eyebrow n="04" label="Also shipped" className="mb-6" />
        <p className="max-w-[580px] text-[17px] leading-[1.62] text-ink-80">
          Live work on the same product surface.
        </p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal index={0} className="flex flex-col border border-rule-warm bg-surface p-7">
          <p className="font-mono text-[11px] tracking-[0.08em] text-rust uppercase">
            Live · rolling out Aug 2026
          </p>
          <h3 className="mt-3 font-serif text-[20px] leading-[1.25] font-normal text-ink">
            A subscription plan, and the mandate that makes it renew
          </h3>
          <Media ratio="1549/1000" className="mt-4 bg-paper-tint">
            <FillImg
              src="/assets/img/banashankari-collage.webp"
              alt="One Health plan sheet, booking summary and applied membership benefit"
            />
          </Media>
          <p className="mt-4 text-[15px] leading-[1.55] text-ink-80">
            The Banashankari consumer plan, launched at one hospital first, with UPI and card
            AutoPay on Juspay HyperPG underneath it. The decision that mattered was combining
            payment and mandate into one transaction — sequential loses people at the second step,
            because a mandate is a stranger asking for standing permission. Easy Add Plan put the
            purchase inside a visit; Onboarding 2.0 reached 91% completion. Flow and architecture
            designed in a month.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-rule-warm pt-5">
            <StatTile value="₹31.8L → ₹3.75Cr" label="Subscription revenue, FY24-25" />
            <StatTile value="51%" label="Renewals now digital" />
          </div>
        </Reveal>

        <Reveal index={1} className="flex flex-col border border-rule-warm bg-surface p-7">
          <p className="font-mono text-[11px] tracking-[0.08em] text-rust uppercase">
            In controlled rollout
          </p>
          <h3 className="mt-3 font-serif text-[20px] leading-[1.25] font-normal text-ink">
            Arya — buying health cover without a salesperson
          </h3>
          <Media ratio="16/10" className="mt-4 bg-[#F7F7F8]">
            <FillImg
              src="/assets/img/arya-landing.webp"
              alt="Arya Health Insurance landing page"
              position="top center"
            />
          </Media>
          <p className="mt-4 text-[15px] leading-[1.55] text-ink-80">
            A 0→1 purchase workflow for the Arya vertical: checkup scheduling, automated pricing,
            decisioning, plan creation, renewals, and the activation UX after the money clears.
            Cover is normally sold by a person who answers objections in real time. Doing it in a
            product means the pricing and decisioning have to be legible enough that nobody needs
            that conversation. Mixpanel instrumented at every step before launch, not after.
          </p>
          <div className="mt-5 border-t border-rule-warm pt-5">
            <StatTile value="<1,000" label="Policies sold online, pilot" />
          </div>
        </Reveal>

        <Reveal index={2} className="flex flex-col border border-rule-warm bg-surface p-7">
          <p className="font-mono text-[11px] tracking-[0.08em] text-rust uppercase">
            In beta · updated {BETA_UPDATED}
          </p>
          <h3 className="mt-3 font-serif text-[20px] leading-[1.25] font-normal text-ink">
            Pulse AI — an app that navigates the hospital for you
          </h3>
          <Media ratio="1549/1000" className="mt-4 bg-paper-tint">
            <FillImg
              src="/assets/img/pulse-collage-wide.webp"
              alt="Pulse AI — summary, findings and organ view"
            />
          </Media>
          <p className="mt-4 text-[15px] leading-[1.55] text-ink-80">
            An agentic care-navigation layer over NH Care: read the intent, fetch the patient&rsquo;s
            context, complete the action. Deterministic rules establish truth, the model only
            summarises. I shipped the product surface — where the summary appears, what it is
            allowed to say, what it must not — on top of a pipeline that was not mine alone. No
            results yet, so the honest version is the reasoning.
          </p>
          <Link
            href="/work/pulse-ai"
            className="link mt-5 border-t border-rule-warm pt-5 text-[15px] font-medium"
          >
            The bet, and what would prove it wrong →
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}
