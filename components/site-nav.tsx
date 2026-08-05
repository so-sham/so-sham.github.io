"use client"

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Global", href: "#global" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
]

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/[0.08] bg-[oklch(0.22_0.08_300/0.75)] px-6 py-[18px] backdrop-blur-md md:px-12">
      <a
        href="#top"
        className="font-mono text-sm font-bold tracking-[0.12em] text-[oklch(0.97_0.02_300)] no-underline"
      >
        SHAM
      </a>
      <div className="flex items-center gap-4 md:gap-7">
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-mono text-xs tracking-[0.08em] text-[oklch(0.78_0.03_300)] uppercase no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/assets/Shamitha-Gowda-Resume.pdf"
          download="Shamitha-Gowda-Resume.pdf"
          className="resume-btn rounded-full bg-[oklch(0.62_0.12_264)] px-4 py-2 font-mono text-xs font-semibold tracking-[0.06em] text-[oklch(0.22_0.08_300)] no-underline"
        >
          RESUME ↓
        </a>
      </div>
    </nav>
  )
}
