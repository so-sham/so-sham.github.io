import Link from "next/link"
import { Container } from "@/components/layout/container"

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-8">
      <Container className="flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] tracking-[0.05em] text-ink-55 uppercase">
        <p>Shamitha Gowda · Bangalore &amp; George Town</p>
        <nav className="flex gap-6">
          <Link href="/#sec-work" className="link">
            Work
          </Link>
          <Link href="/building" className="link">
            Building
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
        </nav>
      </Container>
    </footer>
  )
}
