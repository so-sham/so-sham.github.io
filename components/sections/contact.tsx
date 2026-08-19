import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/reveal"
import { asset } from "@/lib/asset"

const CV_HREF = asset("/assets/Shamitha-Gowda-Resume.pdf")
const CALENDLY_HREF = "https://calendar.app.google/N412NUMFDHnZgN8fA"
const LINKEDIN_HREF = "https://www.linkedin.com/in/shamithagowda/"
const GITHUB_HREF = "https://github.com/so-sham"
const EMAIL = "shamitha2807@gmail.com"

export function Contact() {
  return (
    <Section id="sec-contact" className="pt-28 pb-[120px]" border="top">
      <Reveal>
        <Eyebrow n="09" label="Contact" className="mb-6" />
        <h2 className="max-w-[24ch] font-serif text-[clamp(30px,3.4vw,46px)] leading-[1.06] font-light tracking-[-0.02em] text-ink">
          Got a hard problem on your roadmap? I&rsquo;m your <em className="em-accent">person</em>.
        </h2>
        <p className="mt-5 max-w-[600px] text-[19px] leading-[1.7] text-ink-80">
          Health, fintech, identity — anywhere the users did not choose to be there. Send me{" "}
          <span className="em-underline">the messiest thing on your roadmap</span> and I&rsquo;ll
          tell you how I would start. I have moved countries twice to scope a product; relocating is
          not the hard part.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={`mailto:${EMAIL}`}
            className="border-b border-rule-strong text-[20px] text-ink transition-colors hover:border-rust hover:text-rust"
          >
            {EMAIL}
          </a>
          <span className="text-ink-35">·</span>
          <a href={LINKEDIN_HREF} target="_blank" rel="noopener" className="link text-[15px] font-medium">
            LinkedIn
          </a>
          <a href={GITHUB_HREF} target="_blank" rel="noopener" className="link text-[15px] font-medium">
            GitHub
          </a>
          <a href={CV_HREF} download="Shamitha-Gowda-Resume.pdf" className="link text-[15px] font-medium">
            CV, PDF ↓
          </a>
          <a href={CALENDLY_HREF} target="_blank" rel="noopener" className="link text-[15px] font-medium">
            Book a call
          </a>
          <span className="font-mono text-[12px] tracking-[0.08em] text-ink-55 uppercase">Bangalore</span>
        </div>
      </Reveal>
    </Section>
  )
}
