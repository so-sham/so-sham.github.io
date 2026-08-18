import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Container } from "@/components/layout/container"
import { CaseStudySpine } from "@/components/case-study/case-study-spine"
import { CaseStudyFooterNav } from "@/components/case-study/case-study-footer-nav"

export function CaseStudyShell({
  hero,
  spineItems,
  footerNote,
  prev,
  next,
  children,
}: {
  hero: React.ReactNode
  spineItems: { n: string; label: string; id: string }[]
  footerNote?: string
  prev: { label: string; href: string }
  next: { label: string; href: string }
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <Container>
          {hero}
          <div className="grid gap-12 pb-24 md:grid-cols-[180px_1fr]">
            <CaseStudySpine items={spineItems} footerNote={footerNote} />
            <article>{children}</article>
          </div>
          <CaseStudyFooterNav prev={prev} next={next} />
        </Container>
      </main>
      <SiteFooter />
    </>
  )
}
