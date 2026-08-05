"use client"

import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

const SKILLS = [
  "Roadmap Ownership", "PRDs", "User Research", "Funnel Optimization", "Experimentation",
  "Process Automation", "GTM", "Stakeholder Mgmt", "0→1 & Scaling", "Mixpanel", "GA4", "SQL",
  "Figma", "LLM / AI", "Prompt Engineering", "Claude Design", "OCR + LLM Pipelines", "React",
  "Anthropic API", "Supabase",
]

export function SkillsSection() {
  const [ref, revealed] = useReveal<HTMLDivElement>()

  return (
    <section
      id="skills"
      className="bg-[oklch(0.22_0.08_300)] px-6 py-[100px] md:px-12"
    >
      <div className="mb-8">
        <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.72_0.19_350)]">
          TOOLKIT
        </div>
        <h2
          className="font-sans font-extrabold"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
        >
          Skills &amp; tools
        </h2>
      </div>
      <div ref={ref} className="flex max-w-[900px] flex-wrap gap-2.5">
        <RevealProvider revealed={revealed}>
          {SKILLS.map((skill, idx) => (
            <RevealItem key={skill} index={Math.min(idx, 8)}>
              <span className="rounded-full border border-white/[0.14] px-[15px] py-[7px] font-mono text-xs text-[oklch(0.78_0.03_300)]">
                {skill}
              </span>
            </RevealItem>
          ))}
        </RevealProvider>
      </div>
    </section>
  )
}
