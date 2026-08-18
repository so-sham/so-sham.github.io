import type { Metadata } from "next"
import { CaseStudyShell } from "@/components/case-study/case-study-shell"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CsHeading, CsPara, CsFigure, CsBlockquote, CsTable, CsOrderedList } from "@/components/case-study/case-study-kit"
import { Media, FillImg } from "@/components/layout/media"

export const metadata: Metadata = {
  title: "Pulse AI — Shamitha Gowda",
}

const BETA_UPDATED = "Aug 2026"

const SPINE = [
  { n: "01", label: "The problem", id: "p-bet" },
  { n: "02", label: "The product question", id: "p-worth" },
  { n: "03", label: "The reframe", id: "p-hardest" },
  { n: "04", label: "Records as intelligence", id: "p-records" },
  { n: "05", label: "Where AI stops", id: "p-system" },
  { n: "06", label: "What's in the MVP", id: "p-wrong" },
  { n: "07", label: "Targets, not results", id: "p-now" },
  { n: "08", label: "What I'd do differently", id: "p-watching" },
]

export default function PulseAiPage() {
  return (
    <CaseStudyShell
      hero={
        <CaseStudyHero
          backHref="/#sec-work"
          backLabel="← Work"
          title={
            <>
              An app that navigates the hospital <em className="em-accent">for you</em>
            </>
          }
          dek="An agentic care-navigation layer inside NH Care: understand what the patient is asking, retrieve their context, and turn it into an action. In beta, with targets and no results yet."
          status={`In beta · updated ${BETA_UPDATED}`}
          metadata={[
            { label: "Product", value: "NH Care · Pulse AI" },
            { label: "Market", value: "India" },
            { label: "Stack", value: "Rules → Azure OpenAI → validation → Redis" },
            { label: "Scope", value: "MVP · 4 intelligence areas" },
            { label: "Read", value: "5 min" },
          ]}
        />
      }
      spineItems={SPINE}
      footerNote="Live status. If this flag is stale, tell me."
      prev={{ label: "← One Health Cayman", href: "/work/one-health-cayman" }}
      next={{ label: "All work →", href: "/#sec-work" }}
    >
      <CsHeading n="01" id="p-bet">
        Healthcare apps store information. Patients need help making sense of it.
      </CsHeading>
      <CsPara>
        Health Records draws roughly 90K monthly unique viewers, about half returning the same day —
        people re-reading a report they didn&rsquo;t understand the first time.
      </CsPara>

      <CsHeading n="02" id="p-worth">
        The product question.
      </CsHeading>
      <CsPara>
        From the PRD: &ldquo;Pulse [is] an agentic AI care-navigation assistant inside NH Care, built
        to help patients discover, understand and take the right healthcare action through
        conversation.&rdquo;
      </CsPara>

      <CsHeading n="03" id="p-hardest">
        The reframe.
      </CsHeading>
      <CsBlockquote>
        AI shouldn&rsquo;t create another workflow. It should remove the need to navigate workflows.
      </CsBlockquote>
      <CsPara>
        Intent-routing in practice: &ldquo;cardiologist near me&rdquo; resolves to speciality +
        location; &ldquo;same doctor as last time&rdquo; resolves to contextual booking.
      </CsPara>

      <CsHeading n="04" id="p-records">
        Health Records became an intelligence layer inside Pulse.
      </CsHeading>
      <CsTable
        caption="Level → what Pulse can do with it"
        columns={["Level", "Capability"]}
        rows={[
          ["One report", "Plain-language explanation of a single result and what it means."],
          ["Several reports", "Trends across visits for the same test."],
          ["Cross-speciality", "Connections between findings across different departments."],
          ["Longitudinal", "The full history read as one continuous picture, not separate visits."],
        ]}
      />
      <CsPara>
        Example: Vitamin B12 at 12 (range 20–40) becomes a plain-language explanation plus a
        book-now CTA. Static intelligence comes from EMR events; dynamic intelligence adds a live
        query on top.
      </CsPara>
      <CsFigure caption="Plain-language summary, the findings it was drawn from, and the organ view, each ending in a next action.">
        <Media ratio="1234/1000" className="bg-paper-tint">
          <FillImg src="/assets/img/pulse-collage.webp" alt="Pulse AI report summary and organ view" />
        </Media>
      </CsFigure>

      <CsHeading n="05" id="p-system">
        Don&rsquo;t let the AI become the doctor.
      </CsHeading>
      <CsPara>The core constraint: interpret and explain, never diagnose.</CsPara>
      <CsOrderedList
        items={[
          "Deterministic rules establish ground truth.",
          <>
            The LLM generates from structured input — <strong>Azure OpenAI, GPT-4.1-nano</strong> for
            the MVP.
          </>,
          "Validation against ground truth (flag agreement, all_normal consistency, banned phrases, length, curated associations).",
          <>
            Cache — the validated summary is held in <strong>Redis for 30 days</strong>.
          </>,
        ]}
      />
      <CsTable
        caption="If this happens → the patient gets"
        columns={["If this happens", "The patient gets"]}
        rows={[
          ["AI service unavailable", "Reports work as before"],
          ["Validation fails", "No summary shown"],
          ["Not enough structure", "AI trigger never exposed"],
          ["API times out", "Graceful retry state"],
        ]}
      />

      <CsHeading n="06" id="p-wrong">
        What&rsquo;s in the MVP.
      </CsHeading>
      <CsOrderedList
        items={[
          "Intelligent appointment management",
          "Medical document intelligence",
          "Health records intelligence",
          "Conversational FAQ assistant",
        ]}
      />
      <CsPara>A voice layer in English, Hindi and Kannada is planned.</CsPara>

      <CsHeading n="07" id="p-now">
        Targets, not results.
      </CsHeading>
      <CsPara>
        Health Records draws ~40% of app visits, ~90K MAU. The only real (non-target) number below is
        the 24% baseline book-doctor completion rate — everything else is a target with no data yet.
      </CsPara>
      <CsTable
        caption="What we are measuring / target / status"
        columns={["What we are measuring", "Target", "Status"]}
        rows={[
          ["CTA-to-booking conversion", "Beat 24% baseline", <span key="s1" className="text-rust">No data yet</span>],
          ["Incremental doctor consultation bookings", "2–3K / month", <span key="s2" className="text-rust">No data yet</span>],
          ["Bookings-to-MAU ratio after full rollout", "22% → 25%", <span key="s3" className="text-rust">No data yet</span>],
        ]}
      />
      <CsPara>
        Roadmap: V1.1 adds trend context; V2 adds pattern detection across reports and medication
        correlation; V3 adds longitudinal context and intelligent specialist routing.
      </CsPara>

      <CsHeading n="08" id="p-watching">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        Map intent → context → answer → action → outcome for each feature, before building the
        conversational layer.
      </CsPara>
    </CaseStudyShell>
  )
}
