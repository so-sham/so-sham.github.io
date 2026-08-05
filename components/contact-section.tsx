"use client"

import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

export function ContactSection() {
  const [ref, revealed] = useReveal<HTMLDivElement>()

  return (
    <section
      id="contact"
      className="bg-[oklch(0.19_0.07_300)] px-6 pb-16 pt-[140px] md:px-12"
    >
      <div ref={ref}>
        <RevealProvider revealed={revealed}>
          <RevealItem index={0}>
            <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.62_0.12_264)]">
              LET&apos;S TALK
            </div>
            <h2
              className="mb-10 max-w-[700px] font-sans font-extrabold"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Building things, one ship at a time.
            </h2>
            <div className="mb-[72px] flex flex-wrap gap-3.5">
              <a
                href="mailto:shamitha2807@gmail.com"
                className="contact-btn contact-btn--pink rounded-full border px-[22px] py-3 font-mono text-[13px] text-[oklch(0.97_0.02_300)] no-underline"
                style={{ borderColor: "oklch(0.72 0.19 350)" }}
              >
                Email
              </a>
              <a
                href="tel:+918792889808"
                className="contact-btn contact-btn--pink rounded-full border px-[22px] py-3 font-mono text-[13px] text-[oklch(0.97_0.02_300)] no-underline"
                style={{ borderColor: "oklch(0.72 0.19 350)" }}
              >
                +91 87928 89808
              </a>
              <a
                href="https://www.linkedin.com/in/shamithagowda/"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn--blue rounded-full border px-[22px] py-3 font-mono text-[13px] text-[oklch(0.97_0.02_300)] no-underline"
                style={{ borderColor: "oklch(0.62 0.12 264)" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/so-sham"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn--ghost rounded-full border px-[22px] py-3 font-mono text-[13px] text-[oklch(0.97_0.02_300)] no-underline"
                style={{ borderColor: "oklch(1 0 0 / 0.3)" }}
              >
                GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1_GlKkA0y40Uh7mD7SMZ92rjjpmweOYcU/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="contact-btn contact-btn--ghost rounded-full border px-[22px] py-3 font-mono text-[13px] text-[oklch(0.97_0.02_300)] no-underline"
                style={{ borderColor: "oklch(1 0 0 / 0.3)" }}
              >
                View CV
              </a>
              <a
                href="/assets/Shamitha-Gowda-Resume.pdf"
                download="Shamitha-Gowda-Resume.pdf"
                className="contact-btn contact-btn--resume rounded-full px-[22px] py-3 font-mono text-[13px] font-semibold no-underline"
                style={{
                  background: "oklch(0.97 0.02 300)",
                  color: "oklch(0.22 0.08 300)",
                }}
              >
                Resume ↓
              </a>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-7 font-mono text-xs text-[oklch(0.55_0.03_300)]">
              <span>© 2026 Shamitha Gowda</span>
              <span>sosham.me</span>
            </div>
          </RevealItem>
        </RevealProvider>
      </div>
    </section>
  )
}
