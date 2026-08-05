export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, oklch(0.28 0.09 300 / 0.6), transparent 60%)",
        }}
      />
      <div
        className="animate-twinkle absolute h-[2px] w-[2px] bg-transparent"
        style={{
          top: "15%",
          left: "20%",
          boxShadow:
            "40px 60px 0 0 oklch(0.92 0.02 300 / 0.6), 180px 20px 0 0 oklch(0.92 0.02 300 / 0.4), 320px 140px 0 0 oklch(0.92 0.02 300 / 0.7), 460px 40px 0 0 oklch(0.92 0.02 300 / 0.3), 600px 180px 0 0 oklch(0.92 0.02 300 / 0.5), 720px 90px 0 0 oklch(0.92 0.02 300 / 0.6), 850px 30px 0 0 oklch(0.92 0.02 300 / 0.4), 60px 220px 0 0 oklch(0.92 0.02 300 / 0.5), 250px 260px 0 0 oklch(0.92 0.02 300 / 0.3), 400px 300px 0 0 oklch(0.92 0.02 300 / 0.6), 550px 250px 0 0 oklch(0.92 0.02 300 / 0.4), 700px 320px 0 0 oklch(0.92 0.02 300 / 0.7), 900px 200px 0 0 oklch(0.92 0.02 300 / 0.3), 1000px 100px 0 0 oklch(0.92 0.02 300 / 0.5), 1100px 260px 0 0 oklch(0.92 0.02 300 / 0.6)",
        }}
      />
      <div className="relative max-w-[900px]">
        <div className="mb-7 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.62_0.12_264)]">
          SHAMITHA GOWDA · PRODUCT MANAGER
        </div>
        <div className="flex flex-col gap-4">
          <span className="hero-highlight" style={{ ["--highlight-delay" as string]: "0.1s" }}>
            <span
              className="font-sans font-bold text-[oklch(0.97_0.02_300)]"
              style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.7rem)" }}
            >
              Good products solve problems.
            </span>
          </span>
          <span className="hero-highlight" style={{ ["--highlight-delay" as string]: "0.55s" }}>
            <span
              className="font-sans font-extrabold text-[oklch(0.97_0.02_300)]"
              style={{ fontSize: "clamp(1.7rem, 3.9vw, 2.9rem)" }}
            >
              Great products change behaviour.
            </span>
          </span>
          <span
            className="hero-highlight hero-highlight--punch mt-1"
            style={{ ["--highlight-delay" as string]: "1s" }}
          >
            <span
              className="font-sans font-black tracking-[-0.01em] text-[oklch(0.97_0.02_300)]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              I build both.
            </span>
            <span className="hero-dot" aria-hidden />
          </span>
        </div>
      </div>
      <a
        href="#work"
        className="absolute bottom-10 left-6 flex flex-col items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] text-[oklch(0.66_0.03_300)] no-underline md:left-12"
      >
        SCROLL
        <span className="animate-scroll-arrow">↓</span>
      </a>
    </section>
  )
}
