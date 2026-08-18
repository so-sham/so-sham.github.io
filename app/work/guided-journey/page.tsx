import type { Metadata } from "next"
import { CaseStudyShell } from "@/components/case-study/case-study-shell"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CsHeading, CsPara, CsFigure, CsBlockquote, CsStatRow, CsTable, CsOrderedList } from "@/components/case-study/case-study-kit"
import { Media, FillImg } from "@/components/layout/media"
import { AutoVideo } from "@/components/media/auto-video"

export const metadata: Metadata = {
  title: "Guided Service Journey — Shamitha Gowda",
}

const SPINE = [
  { n: "04", label: "An appointment is not one event", id: "g-setup" },
  { n: "05", label: "Where the opportunity was", id: "g-trigger" },
  { n: "06", label: "Why notifications weren't enough", id: "g-rejected" },
  { n: "07", label: "The reframe", id: "g-reframe" },
  { n: "08", label: "The MVP", id: "g-decision" },
  { n: "09", label: "What it took to ship", id: "g-ship" },
  { n: "10", label: "What happened", id: "g-happened" },
  { n: "11", label: "What I'd do differently", id: "g-differently" },
]

export default function GuidedJourneyPage() {
  return (
    <CaseStudyShell
      hero={
        <CaseStudyHero
          backHref="/#sec-work"
          backLabel="← Work"
          title={
            <>
              Turning six disconnected steps into one hospital <em className="em-accent">visit</em>
            </>
          }
          dek="Journeys started as a question: could NH Care help a patient navigate an entire hospital visit, not just book it? The OPD Journey was the first MVP."
          metadata={[
            { label: "Product", value: "NH Care — 3.67M installs" },
            { label: "Market", value: "India" },
            { label: "Role", value: "PM, 4 verticals" },
            { label: "Team", value: "50+ cross-functional · 25+ eng · 10 design" },
            { label: "Read", value: "8 min" },
          ]}
        />
      }
      spineItems={SPINE}
      footerNote="Artifacts on this page are redacted."
      prev={{ label: "← All work", href: "/#sec-work" }}
      next={{ label: "Next: Passkey identity →", href: "/work/passkey-identity" }}
    >
      <CsHeading n="04" id="g-setup">
        An appointment is not a single event.
      </CsHeading>
      <CsPara>
        NH Care&rsquo;s transactional layer handled booking, but a hospital visit is payment, records
        upload, pre-assessment, check-in, queue, consultation, investigations, medicines and
        follow-up — none of which knew about each other.
      </CsPara>

      <div className="my-8 max-w-[565px] border border-rule-warm bg-paper-tint p-5">
        <p className="font-mono text-[10px] tracking-[0.08em] text-ink-55 uppercase">LinkedIn · original post</p>
        <p className="mt-2 font-serif text-[15px] font-normal text-ink">Shamitha Gowda</p>
        <p className="mt-3 font-serif text-[17px] leading-[1.4] font-light text-ink italic">
          &ldquo;What&rsquo;s the biggest challenge for a patient visiting a hospital?&rdquo;
        </p>
        <p className="mt-3 text-[14px] leading-[1.5] text-ink-55">
          Where the Journeys idea first got written up, before it became a spec.
        </p>
        <a
          href="https://www.linkedin.com/posts/shamithagowda_whats-the-biggest-challenge-for-a-patient-activity-7266718518966968321-cApc"
          target="_blank"
          rel="noopener"
          className="link mt-3 inline-block text-[13px] font-medium"
        >
          Read the post ↗
        </a>
      </div>

      <CsFigure caption="The activity card on the NH Care homepage: one visit, one next action.">
        <Media ratio="3/4" className="mx-auto max-w-[320px] bg-paper-tint">
          <FillImg src="/assets/img/opd-1732519222130.webp" alt="NH Care homepage activity card" fit="contain" />
        </Media>
      </CsFigure>
      <CsFigure caption="The OPD journey in use, from activity card into the journey page. Screen recording at 1.75×.">
        <Media ratio="4/3" className="bg-paper-tint">
          <AutoVideo
            src="/assets/video/guided-journey-demo.mp4"
            poster="/assets/video/guided-journey-demo-poster.jpg"
            rate={1.75}
            fit="contain"
          />
        </Media>
      </CsFigure>

      <CsHeading n="05" id="g-trigger">
        The opportunity was in the gaps between systems.
      </CsHeading>
      <CsPara>
        Discovery meant mapping the offline journey against the digital one. The OPD Journey became
        a state machine, not a checklist: booked → upload → pre-assessment → directions → check-in →
        queue → consultation → summary → tests/meds/follow-up → end.
      </CsPara>
      <CsFigure caption="The same visit in three states: the journey overview through follow-up, the queue with a live token, and tests in progress.">
        <Media ratio="1345/1000" className="bg-paper-tint">
          <FillImg src="/assets/img/opd-journey-collage.webp" alt="OPD journey states collage" />
        </Media>
      </CsFigure>

      <CsHeading n="06" id="g-rejected">
        Why notifications weren&rsquo;t enough.
      </CsHeading>
      <CsPara>
        Notifications became entry points, not the experience. The architecture: a hospital event
        changes the journey state, which decides the action, which triggers a notification, which
        brings the patient back into the journey.
      </CsPara>

      <CsHeading n="07" id="g-reframe">
        The reframe.
      </CsHeading>
      <CsBlockquote>
        An appointment is not a transaction with a confirmation screen. It is a journey with states,
        and the app should be the thing that knows where the patient is in it.
      </CsBlockquote>
      <CsPara>
        The mental model that unlocked it was closer to ride-hailing than booking software — a single
        state the patient (and the app) can always ask about.
      </CsPara>

      <CsHeading n="08" id="g-decision">
        The MVP, and the next best action.
      </CsHeading>
      <CsOrderedList
        items={[
          "Geo check-in",
          "Live queue tracking",
          "Test management",
          "Report tracking",
          "Follow-up booking",
        ]}
      />
      <CsTable
        caption="Current state → next action"
        columns={["Current state", "Next action"]}
        rows={[
          ["Payment pending", "Complete payment"],
          ["Appointment tomorrow", "Pre-assessment · directions"],
          ["Arrived at hospital", "Check in"],
          ["Waiting", "View queue"],
          ["Tests prescribed", "Book and pay for tests"],
          ["Reports ready", "View reports"],
          ["Visit summary available", "View summary · continue care"],
        ]}
      />

      <CsHeading n="09" id="g-ship">
        The UI was the visible part; the state was the hard part.
      </CsHeading>
      <CsPara>
        The integration surface: appointment systems, payments, health records, geolocation, QMS,
        test orders, reports, follow-up.
      </CsPara>
      <div className="my-8 max-w-[565px] border-l-2 border-rust bg-paper-tint p-5">
        <p className="font-mono text-[10px] tracking-[0.08em] text-rust uppercase">Edge case</p>
        <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">
          The patient who arrives without having used the app, mid-visit — walk-in handling was
          built as a first-class path, not an afterthought.
        </p>
      </div>

      <CsHeading n="10" id="g-happened">
        What happened.
      </CsHeading>
      <CsPara>Launched October 2024, with post-launch work continuing into November.</CsPara>
      <CsStatRow
        stats={[
          { value: "₹40L → ₹13.3Cr", label: "Pay Online revenue per month" },
          { value: "32% → 53%", label: "Appointments booked digitally" },
          { value: "8.3% → 10%", label: "DAU/MAU, 215K → 280K+ MAU" },
        ]}
      />
      <CsPara>
        Broader context: the platform does ₹29Cr/month, app appointment adoption reached 42% in
        FY25-26, and installs grew 1.64M → 3.67M (not attributed solely to Journeys).
      </CsPara>

      <CsHeading n="11" id="g-differently">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        Treat the journey state model as a first-class artifact from day one, and measure by journey
        completion, not feature adoption.
      </CsPara>
    </CaseStudyShell>
  )
}
