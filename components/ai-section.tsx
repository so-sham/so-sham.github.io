"use client"

import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

const AI_CARDS = [
  {
    title: "Pulse AI",
    desc: "Report intelligence: OCR ingestion of uploaded documents plus LLM analysis producing plain-language summaries, with CTAs.",
    tags: ["OCR", "LLM", "Production"],
  },
  {
    title: "AI Nutrition & Workout Planners",
    desc: "LLM-powered personalized meal plans and progressive training programs. Owned discovery, UX, prompt engineering, deployment.",
    tags: ["Anthropic API", "React", "Supabase"],
  },
  {
    title: "AI Fitness Reports",
    desc: "Personalized 11-page PDF reports for 70 paying members — percentile scoring, badge/tier logic, AI narrative summaries.",
    tags: ["Claude API", "ReportLab"],
  },
]

export function AiSection() {
  const [ref, revealed] = useReveal<HTMLDivElement>()

  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-[oklch(0.22_0.08_300)] px-6 py-[140px] md:px-12"
    >
      <div
        className="animate-orb-float-reverse pointer-events-none absolute h-[420px] w-[420px]"
        style={{ bottom: "-140px", right: "-100px" }}
      >
        <div
          className="h-full w-full rounded-full blur-[50px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.19 350 / 0.22), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.72_0.19_350)]">
          SHIPS WITH AI
        </div>
        <h2
          className="mb-[18px] font-sans font-extrabold"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          AI products, built end to end
        </h2>
        <p className="mb-14 max-w-[640px] font-sans text-[1.05rem] leading-[1.6] text-[oklch(0.78_0.03_300)]">
          OCR + LLM report analysis in beta. AI summaries in production.
          Independent AI products built solo on the Anthropic API.
        </p>
      </div>

      <div
        ref={ref}
        className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <RevealProvider revealed={revealed}>
          {AI_CARDS.map((card, idx) => (
            <RevealItem key={card.title} index={idx}>
              <div
                className="relative overflow-hidden rounded-[18px] border p-7"
                style={{
                  borderColor: "oklch(1 0 0 / 0.1)",
                  background: "oklch(0.26 0.07 300)",
                }}
              >
                <div
                  className="animate-spin-slow absolute h-8 w-8 rounded-full border-2 border-dashed"
                  style={{
                    top: "18px",
                    right: "18px",
                    borderColor: "oklch(0.72 0.19 350 / 0.5)",
                  }}
                />
                <h3 className="mb-3 pr-10 font-sans text-[1.2rem] font-bold">
                  {card.title}
                </h3>
                <p className="mb-5 font-sans text-[0.92rem] leading-[1.6] text-[oklch(0.73_0.03_300)]">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-1 font-mono text-[11px]"
                      style={{
                        borderColor: "oklch(0.72 0.19 350 / 0.4)",
                        color: "oklch(0.72 0.19 350)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealProvider>
      </div>
    </section>
  )
}
