import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Media, FillImg } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"

export function Me() {
  return (
    <Section id="sec-me">
      <div className="grid items-start gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-18">
        <Reveal>
          <Eyebrow n="07" label="Me" className="mb-6" />
          <div className="max-w-[600px] space-y-[1.35em] text-[17px] leading-[1.62] text-ink-80">
            <p>
              I am a product manager, four years in, working on consumer healthcare at Narayana
              Health — a consumer app with 3.67M installs in India, and two platforms in the Cayman
              Islands that I flew out to scope from scratch.
            </p>
            <p>
              My route in was operations — a year running a 60-person international team at AIESEC
              before I ever wrote a spec. That order still shows in how I work:{" "}
              <span className="em-underline">
                I reach for instrumentation and workflows before I reach for features
              </span>
              , and the work I am proudest of is usually the part nobody sees in a demo.
            </p>
            <p>
              Outside the job I coach part-time at a gym, build AI products on the Anthropic API in
              the evenings, and run the Women in AI chapter in Bangalore. 150+ user interviews
              across 10+ nationalities so far, and{" "}
              <span className="em-underline">
                the two months I spent sitting beside a front desk in Cayman
              </span>{" "}
              taught me more than any of them.
            </p>
          </div>
        </Reveal>
        <Reveal index={1}>
          <Media ratio="1/1" className="bg-paper-tint">
            <FillImg
              src="/assets/img/me-speaking-square.webp"
              alt="Hosting and speaking at product and AI community events"
            />
          </Media>
        </Reveal>
      </div>
    </Section>
  )
}
