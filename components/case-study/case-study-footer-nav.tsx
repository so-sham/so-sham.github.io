import Link from "next/link"

export function CaseStudyFooterNav({
  prev,
  next,
}: {
  prev: { label: string; href: string }
  next: { label: string; href: string }
}) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-rule pt-8">
      <Link href={prev.href} className="link font-mono text-[12px] font-medium tracking-[0.05em] uppercase">
        {prev.label}
      </Link>
      <Link href={next.href} className="link font-mono text-[12px] font-medium tracking-[0.05em] uppercase">
        {next.label}
      </Link>
    </div>
  )
}
