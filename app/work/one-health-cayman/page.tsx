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
      footerNote="Artifacts on this page are redacted."
      prev={{ label: "← Passkey identity", href: "/work/passkey-identity" }}
      next={{ label: "Next: Pulse AI →", href: "/work/pulse-ai" }}
    >
      <CsHeading n="04" id="c-setup">
        The discovery started on the ground.
      </CsHeading>
      <CsPara>
        The brief was not to digitise claims or build an insurance portal. It was to build an
        insurance platform across four user groups — members, employers, providers and administrators
        — in a market I needed to understand from the ground up. And eventually it would have to work
        across both Cayman and the US, including integrations with VBA Insurance and athenahealth.
      </CsPara>
      <CsPara>
        So before designing anything I spent two months on the ground in the Cayman Islands,
        understanding how healthcare and insurance actually work there. I did not want to design an
        insurance product from a PRD; I wanted to understand the system behind the PRD.
      </CsPara>
      <CsPara>
        During the deployment I ran 50+ interviews across patients, healthcare providers, hospitals
        and clinics, employers, insurance stakeholders and administrators, covering American,
        Caymanian and European demographics — three groups whose expectations of healthcare,
        insurance and digital products are not the same. It was not usability testing. I was not
        showing people a design and asking whether they liked it. I was asking how healthcare
        actually happens here.
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
      <CsPara>
        I mapped the ecosystem from every side, and the questions people actually ask are narrower
        than any feature list.
      </CsPara>
      <CsTable
        caption="Perspective → what they are trying to find out"
        columns={["Perspective", "What they are trying to find out"]}
        rows={[
          [
            "Patient",
            "Who pays for my healthcare? What is covered? Is my insurance active? Where is my member card? What happens when I receive care?",
          ],
          [
            "Provider",
            "How do I verify eligibility? Do I need authorisation? How do I submit a claim? Was it processed? When do I get paid?",
          ],
          [
            "Employer",
            "How do I add an employee? Add a dependent? Terminate coverage? Confirm someone is eligible?",
          ],
          [
            "Insurer",
            "How do we configure plans, control access, manage documents, and keep these workflows consistent?",
          ],
        ]}
      />

      <CsHeading n="06" id="c-reframe">
        The reframe.
      </CsHeading>
      <CsBlockquote>One insurance ecosystem. Four purpose-built experiences.</CsBlockquote>
      <CsPara>
        Working in a market I had just learned made this discipline necessary rather than admirable.
        It would have been easy to take an existing insurance portal pattern and adapt it. Instead I
        treated Cayman as a new product environment and had to learn how providers verify coverage,
        how employers manage insurance, how members understand their plans, how authorisation works,
        how claims move, where manual processes still sat, and which information users treated as
        critical.
      </CsPara>
      <CsPara>
        That changed the scoping question. Not what features an insurance portal should have, but
        what job each participant in the ecosystem is trying to complete.
      </CsPara>

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
        The platform was never ultimately constrained to one market. It had to support the US
        healthcare ecosystem too, which has its own infrastructure, workflows and standards. One of
        the major integrations was athenahealth, alongside the VBA insurance backend, designed to
        automate eligibility, claims and policy operations across the platform.
      </CsPara>
      <CsPara>
        So the product evolved from build an insurance portal for Cayman into build an insurance
        platform that can operate across different healthcare ecosystems.
      </CsPara>
      <CsPara>
        The underlying insurance concepts stay constant — member, plan, eligibility, authorisation,
        claim, payment — but the way those concepts meet providers differs sharply between markets.
        Rather than hard-coding the Cayman workflow into every experience, we had to keep asking which
        logic is core insurance and which is market-specific operations: member → plan → eligibility
        → claim on one side; provider workflow, healthcare-system integration, data exchange and
        operational process on the other. That distinction is what made the platform extensible.
      </CsPara>
      <CsPara>
        Working with VBA and athenahealth also changed how I think about integrations. An integration
        is not an engineering task that happens after the UX is designed; it affects the product. For
        every major workflow we had to answer where the information originates, which system owns it,
        when it changes, what happens if two systems disagree, and what the user sees when it is not
        available. A provider should not have to interpret backend insurance data — the product
        should translate it into a decision: eligible, authorisation required, claim pending, claim
        processed, payment available. The platform became an abstraction layer between complex
        backend systems and the people using them.
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
        Four interconnected portals, multiple user roles, and integrations with external systems.
        Across the platform we had to account for role-based access, authentication, MFA and session
        management, member eligibility, plan configuration, enrollment, authorisation, claims,
        remittances, documents, approvals, search and filtering, exports, empty and error states, and
        the backend integrations behind all of it.
      </CsPara>
      <CsPara>
        <span className="em-underline">The complexity was never the screen count</span>. It was the
        number of states and handoffs between systems and users. The provider portal alone had to
        stay legible across claims that were pending, pended, in error, processed, denied and
        partially denied. The employer portal needed approval states for every change to member
        information.
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
      <CsPara>
        By the time we were thinking about the platform more broadly, CIHL and One Health Cayman
        were supporting 10,000+ insured members, 100+ employer companies, 5,000+ users, 75 facilities
        in Cayman and 50+ providers in the US. That scale is what made the initial discovery worth
        two months: the product was not being designed for one persona, it was being designed for an
        ecosystem that would keep growing.
      </CsPara>
      <CsPara>
        The platform became connected digital infrastructure for the insurance lifecycle. The
        provider portal handles eligibility verification, authorisation requests, claims and payment
        tracking. The member portal gives members their plans, benefits and claims. The employer
        portal moved enrollment operations into self-service. The admin portal created a centralised
        control layer for users, documents and plan configuration. And through athenahealth, the
        platform reached past Cayman into the US.
      </CsPara>
      <CsPara>
        What began as a market-specific insurance digitisation project became a broader product
        question: how do you build a common insurance platform while respecting the differences
        between healthcare ecosystems?
      </CsPara>

      <CsHeading n="11" id="c-differently">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        I would make market abstraction a formal part of the architecture from day one, separating
        the core domain — member, plan, eligibility, authorisation, claim, payment — from the market
        layer of provider workflows, healthcare integrations, data standards, operational rules and
        regulatory requirements. That alone would make entering the next market much faster.
      </CsPara>
      <CsPara>
        I would also formalise the discovery into a reusable market-entry framework: two weeks of
        ecosystem mapping, then stakeholder interviews, workflow shadowing, system mapping,
        pain-point prioritisation, a split between market-specific and reusable capability, then the
        MVP. A team could then enter a new healthcare market without assuming the existing workflow
        applies.
      </CsPara>
      <CsPara>
        The two months on the ground were not a detour from product development. They were the
        product development. When you are building 0→1 in a domain you do not know, the sequence is
        context, then problem, then system, then solution — and your first job is not to build, it is
        to understand the system you are entering.
      </CsPara>
    </CaseStudyShell>
  )
}
