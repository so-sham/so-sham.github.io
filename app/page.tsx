import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { MarqueeDivider } from "@/components/marquee-divider"
import { ImpactSection } from "@/components/impact-section"
import { GlobalSection } from "@/components/global-section"
import { AiSection } from "@/components/ai-section"
import { TimelineSection } from "@/components/timeline-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-[oklch(0.22_0.08_300)] font-sans text-[oklch(0.97_0.02_300)]">
      <SiteNav />
      <HeroSection />
      <WorkSection />
      <MarqueeDivider
        text="PRODUCT MANAGEMENT ◆ AI ENGINEERING ◆ GROWTH ◆ 0→1 ◆ ANALYTICS ◆"
        color="oklch(0.72 0.19 350)"
        speed="fast"
        tilt="0deg"
      />
      <ImpactSection />
      <GlobalSection />
      <MarqueeDivider
        text="INDIA ◆ CAYMAN ISLANDS ◆ SINGAPORE ◆ UNITED STATES ◆ GREECE ◆"
        color="oklch(0.62 0.12 264)"
        speed="reverse"
        tilt="0deg"
      />
      <AiSection />
      <TimelineSection />
      <MarqueeDivider
        text="SHIP ◆ MEASURE ◆ ITERATE ◆ REPEAT ◆"
        color="oklch(0.72 0.19 350)"
        speed="slow"
        tilt="-1deg"
      />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
