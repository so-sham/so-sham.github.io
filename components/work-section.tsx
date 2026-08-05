"use client"

import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

const BARS = [18, 30, 22, 40, 26]
const DOTS = [36, 26, 20]

export function WorkSection() {
  const [ref, revealed] = useReveal<HTMLDivElement>()

  return (
    <section
      id="work"
      className="bg-[oklch(0.19_0.07_300)] px-6 py-[140px] md:px-12"
    >
      <div>
        <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.62_0.12_264)]">
          BUILT SOLO · LIVE PRODUCTS
        </div>
        <h2
          className="mb-[18px] font-sans font-extrabold"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Forge &amp; Nourish
        </h2>
        <p className="mb-14 max-w-[640px] font-sans text-[1.05rem] leading-[1.6] text-[oklch(0.78_0.03_300)]">
          Independent AI products built end-to-end on the Anthropic API, live
          at sosham.me — same instincts I bring to product work at Narayana
          Health, applied solo from discovery to deployment.
        </p>
      </div>

      <div ref={ref} className="flex flex-wrap gap-7">
        <RevealProvider revealed={revealed}>
          <RevealItem index={0} className="flex-1 basis-[380px]">
            <div
              className="rounded-[20px] border p-9"
              style={{
                borderColor: "oklch(0.72 0.19 350 / 0.35)",
                background:
                  "linear-gradient(160deg, oklch(0.72 0.19 350 / 0.1), transparent 60%)",
              }}
            >
              <div className="mb-7 flex h-11 items-end gap-1.5">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="animate-[barPulse_1.6s_ease-in-out_infinite] w-2 rounded-[3px]"
                    style={{
                      height: `${h}px`,
                      background: "oklch(0.72 0.19 350)",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
              <div className="mb-2.5 font-mono text-xs tracking-[0.14em] text-[oklch(0.72_0.19_350)]">
                FORGE
              </div>
              <h3 className="mb-3 font-sans text-2xl font-bold">
                AI Workout Planner
              </h3>
              <p className="mb-7 font-sans leading-[1.6] text-[oklch(0.78_0.03_300)]">
                AI celebrity personal trainer. Generate, log, and PR-track
                your lifts.
              </p>
              <a
                href="https://so-sham.github.io/workout-planner/"
                target="_blank"
                rel="noreferrer"
                className="launch-btn launch-btn--pink inline-block rounded-full border px-5 py-2.5 font-mono text-[13px] no-underline"
                style={{
                  borderColor: "oklch(0.72 0.19 350)",
                  color: "oklch(0.72 0.19 350)",
                }}
              >
                Launch Forge →
              </a>
            </div>
          </RevealItem>

          <RevealItem index={1} className="flex-1 basis-[380px]">
            <div
              className="rounded-[20px] border p-9"
              style={{
                borderColor: "oklch(0.62 0.12 264 / 0.35)",
                background:
                  "linear-gradient(160deg, oklch(0.62 0.12 264 / 0.1), transparent 60%)",
              }}
            >
              <div className="mb-7 flex h-11 items-center gap-2.5">
                {DOTS.map((size, i) => (
                  <div
                    key={i}
                    className="animate-[barPulse_1.8s_ease-in-out_infinite] rounded-full"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      background: `oklch(0.62 0.12 264 / ${1 - i * 0.25})`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
              <div className="mb-2.5 font-mono text-xs tracking-[0.14em] text-[oklch(0.62_0.12_264)]">
                NOURISH
              </div>
              <h3 className="mb-3 font-sans text-2xl font-bold">
                AI Meal Planner
              </h3>
              <p className="mb-7 font-sans leading-[1.6] text-[oklch(0.78_0.03_300)]">
                Protein-first Indian &amp; international meal plans with AI
                food scanning.
              </p>
              <a
                href="https://so-sham.github.io/meal-planner/"
                target="_blank"
                rel="noreferrer"
                className="launch-btn launch-btn--blue inline-block rounded-full border px-5 py-2.5 font-mono text-[13px] no-underline"
                style={{
                  borderColor: "oklch(0.62 0.12 264)",
                  color: "oklch(0.62 0.12 264)",
                }}
              >
                Launch Nourish →
              </a>
            </div>
          </RevealItem>
        </RevealProvider>
      </div>
    </section>
  )
}
