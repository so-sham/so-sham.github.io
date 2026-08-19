import type { Metadata } from "next"
import { CaseStudyShell } from "@/components/case-study/case-study-shell"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CsHeading, CsPara, CsFigure, CsBlockquote, CsStatRow, CsTable } from "@/components/case-study/case-study-kit"
import { Media } from "@/components/layout/media"
import { AutoVideo } from "@/components/media/auto-video"
import { cn } from "@/lib/cn"

export const metadata: Metadata = {
  title: "One Health Cayman — Shamitha Gowda",
}

const SPINE = [
  { n: "04", label: "Discovery on the ground", id: "c-setup" },
  { n: "05", label: "Four perspectives, one system", id: "c-trigger" },
  { n: "06", label: "The reframe", id: "c-reframe" },
  { n: "07", label: "From discovery to four products", id: "c-decision" },
  { n: "08", label: "It didn't stop at Cayman", id: "c-us" },
  { n: "09", label: "What it took to ship", id: "c-ship" },
  { n: "10", label: "What happened", id: "c-happened" },
  { n: "11", label: "What I'd do differently", id: "c-differently" },
]

const PORTALS = [
  {
    n: "01",
    color: "var(--accent-blue)",
    title: "Member",
    body: "Understand and use your insurance. Plan details, benefits, claims and policy activity, made legible.",
    flow: "Plan → benefits → claims → dependents → ID card",
  },
  {
    n: "02",
    color: "var(--accent-blue)",
    title: "Employer",
    body: "Manage your workforce's insurance: employees and dependents, ID cards, eligibility reports, enrollment changes.",
    flow: "Enroll → update → terminate → verify → report",
  },
  {
    n: "03",
    color: "var(--rust)",
    title: "Provider",
    body: "Deliver care and get paid. Search for members, verify coverage, submit authorisations and claims, track payment.",
    flow: "Eligibility → authorisation → claims → remittance",
  },
  {
    n: "04",
    color: "var(--accent-blue)",
    title: "Admin",
    body: "Operate the insurance system through a centralised control layer for users, documents and plan configuration.",
    flow: "Users → plans → documents → groups → permissions",
  },
]

export default function OneHealthCaymanPage() {
  return (
    <CaseStudyShell
      hero={
        <CaseStudyHero
          backHref="/#sec-work"
          backLabel="← Work"
          title={
            <>
              Building an insurance ecosystem across Cayman and the <em className="em-accent">US</em>
            </>
          }
          dek="Owning a four-portal operations platform for One Health Cayman: member, employer, provider and admin, across two health systems that agree on almost nothing."
          metadata={[
            { label: "Product", value: "One Health Cayman · 4 portals" },
            { label: "Market", value: "Cayman Islands & US" },
            { label: "Role", value: "Product Owner — strategy, workflows, execution" },
            { label: "Scoping", value: "2 months on the ground · 50+ interviews" },
            { label: "Read", value: "8 min" },
          ]}
        />
      }
      spineItems={SPINE}
      prev={{ label: "← Passkey identity", href: "/work/passkey-identity" }}
      next={{ label: "Next: Pulse AI →", href: "/work/pulse-ai" }}
    >
      <CsHeading n="04" id="c-setup">
        The discovery started on the ground.
      </CsHeading>
      <CsPara>
        The brief: build a four-user-group insurance platform — members, employers, providers,
        admins — across Cayman and the US, integrating VBA Insurance and athenahealth. Two months on
        the ground, 50+ interviews across American, Caymanian and European demographics.
      </CsPara>
      <CsStatRow
        stats={[
          { value: "2 months", label: "On the ground" },
          { value: "50+", label: "Interviews" },
          { value: "4", label: "User groups" },
          { value: "2", label: "Healthcare markets" },
        ]}
      />

      <CsHeading n="05" id="c-trigger">
        Four perspectives on the same insurance system.
      </CsHeading>
      <CsTable
        caption="Perspective → what they are trying to find out"
        columns={["Perspective", "Questions"]}
        rows={[
          ["Patient", "What's covered? What do I owe? Where is my claim?"],
          ["Provider", "Is this patient eligible? Will this be authorised? When do I get paid?"],
          ["Employer", "Who's enrolled? What changed this month? What am I paying for?"],
          ["Insurer", "Where is risk concentrated? What's the claims trend? What needs review?"],
        ]}
      />

      <CsHeading n="06" id="c-reframe">
        The reframe.
      </CsHeading>
      <CsBlockquote>One insurance ecosystem. Four purpose-built experiences.</CsBlockquote>

      <CsHeading n="07" id="c-decision">
        From discovery to four products.
      </CsHeading>
      <div className="my-8 max-w-[600px] border border-rule-warm">
        <div className="grid sm:grid-cols-2">
          {PORTALS.map((p, i) => (
            <div
              key={p.n}
              className={cn(
                "p-5",
                i < 2 && "border-b border-rule-warm",
                i % 2 === 0 && "sm:border-r sm:border-rule-warm"
              )}
            >
              <p className="font-mono text-[13px] font-medium" style={{ color: p.color }}>
                {p.n}
              </p>
              <h4 className="mt-1 font-serif text-[18px] font-normal text-ink">{p.title}</h4>
              <p className="mt-2 text-[14px] leading-[1.5] text-ink-80">{p.body}</p>
              <p className="mt-3 font-mono text-[11px] text-ink-55">{p.flow}</p>
            </div>
          ))}
        </div>
        <p className={cn("border-t border-rule-warm bg-paper-tint p-4 text-[13px] leading-[1.5] text-ink-55")}>
          Underneath all four: VBA Insurance and athenahealth — automating eligibility, claims and
          policy operations across the platform.
        </p>
      </div>

      <CsHeading n="08" id="c-us">
        The interesting part: it didn&rsquo;t stop at Cayman.
      </CsHeading>
      <CsPara>
        The platform extended into the US healthcare ecosystem via athenahealth and VBA, drawing a
        line between &ldquo;core insurance&rdquo; (member, plan, eligibility, authorisation, claim,
        payment) and market-specific operations.
      </CsPara>
      <CsFigure caption="Platform walkthrough. Screen recording, redacted.">
        <Media ratio="816/352" className="bg-[#0B0B0B]">
          <AutoVideo src="/assets/video/cayman-2.mp4" poster="/assets/video/cayman-2-poster.webp" />
        </Media>
      </CsFigure>

      <CsHeading n="09" id="c-ship">
        What it took to ship.
      </CsHeading>
      <CsPara>
        Role-based access, auth/MFA/session management, eligibility, plan configuration, enrollment,
        authorisation, claims, remittances, documents, approvals, search/filter, exports, empty and
        error states.
      </CsPara>
      <CsFigure caption="Portal workflows in use. Screen recording, redacted.">
        <Media ratio="832/368" className="bg-[#0B0B0B]">
          <AutoVideo src="/assets/video/cayman-3.mp4" poster="/assets/video/cayman-3-poster.webp" />
        </Media>
      </CsFigure>

      <CsHeading n="10" id="c-happened">
        What happened.
      </CsHeading>
      <CsStatRow
        stats={[
          { value: "10,000+", label: "Insured members" },
          { value: "100+", label: "Employer companies" },
          { value: "75", label: "Cayman facilities" },
          { value: "50+", label: "US providers" },
        ]}
      />
      <CsPara>The platform serves 5,000+ users across all four portals.</CsPara>

      <CsHeading n="11" id="c-differently">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        Treat market abstraction as formal architecture from day one, with a reusable market-entry
        framework: two weeks of ecosystem mapping, interviews, workflow shadowing, system mapping,
        prioritisation, then an MVP split.
      </CsPara>
    </CaseStudyShell>
  )
}
