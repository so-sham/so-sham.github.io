import { Eyebrow } from "@/components/layout/eyebrow"
import { Media, FillImg } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"
import { Container } from "@/components/layout/container"

export function Statement() {
  return (
    <section id="sec-statement" className="pt-[132px] pb-26">
      {/* The hero portrait is the LCP element; `priority` on FillImg makes it
          eager (no fetchpriority — see FillImg's comment for why), which is
          also what makes React hoist a preload link for it into <head>. */}
      <Container>
        <div className="grid items-end gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-18">
          <Reveal className="order-2 md:order-1">
            <Eyebrow n="01" label="Statement" className="mb-6" />
            <h1 className="mb-6 max-w-[16ch] font-serif text-[clamp(40px,4.6vw,68px)] leading-[1.04] font-light tracking-[-0.022em] text-ink">
              I build for people who did not <em className="em-accent">choose</em> to be users.
            </h1>
            <p className="max-w-[600px] text-[19px] leading-[1.7] text-ink-80">
              Product manager, four years, working 0→1 and at scale across India, the Cayman
              Islands and the US — most of it in{" "}
              <span className="em-underline">
                consumer healthcare, where nobody arrives by choice
              </span>
              . I ship independently too: AI products built solo on the Anthropic API, discovery
              through deployment.
            </p>
          </Reveal>
          <Reveal index={1} className="order-1 md:order-2">
            <Media ratio="4/5" className="bg-paper-tint">
              <FillImg src="/assets/img/hero-portrait.webp" alt="Shamitha Gowda" priority />
            </Media>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
