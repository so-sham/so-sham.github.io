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
        NH Care is the consumer app for a large hospital network, with more than two million
        downloads by then and a strong transactional layer already built around appointments. What
        the behavioural data — churn in particular — kept suggesting was that transactions alone
        were not producing a patient experience anybody would come back for.
      </CsPara>
      <CsPara>
        From a product view an appointment looks simple: book, attend, done. The visit does not. A
        patient may have to complete a payment, upload health records, finish a pre-assessment, find
        the hospital, check in, wait without knowing their queue position, attend the consultation,
        pay for investigations, complete the prescribed tests, track the reports, order medicines and
        book a follow-up. The original journey mapped those states explicitly, including separate
        paths for payment-pending and payment-completed appointments.
      </CsPara>
      <CsPara>
        So the product question was never how to improve appointment booking. It was how to help a
        patient understand and navigate everything that happens after booking. That question became
        Journeys, a product layer mapping the physical hospital experience into a digital one, and
        the OPD Journey was its first MVP.
      </CsPara>

      <div className="my-8 max-w-[565px] border border-rule-warm bg-paper-tint p-5">
        <p className="font-mono text-[10px] tracking-[0.08em] text-ink-55 uppercase">LinkedIn · original post</p>
        <p className="mt-2 font-serif text-[15px] font-normal text-ink">Shamitha Gowda</p>
        <p className="mt-3 font-serif text-[17px] leading-[1.4] font-light text-ink italic">
          &ldquo;What&rsquo;s the biggest challenge for a patient visiting a hospital?&rdquo;
        </p>
        <p className="mt-3 text-[14px] leading-[1.5] text-ink-55">
          Where I first wrote the Journeys idea up publicly: the activity card on the app homepage,
          geo check-in, live queue position, and the visit followed through tests, reports and
          follow-up.
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

      <CsPara>
        Healthcare makes this worse than it sounds, because the person using the product is usually
        already dealing with uncertainty or anxiety. They should not have to hold in their head what
        they finished, what is still open, where a test was prescribed, whether a report is ready, or
        what happens after the consultation. Patients do not need another dashboard. They need the
        product to keep that context for them.
      </CsPara>

      <CsFigure caption="The activity card on the NH Care homepage: one visit, one next action.">
        <Media ratio="3/4" className="mx-auto max-w-[320px] bg-paper-tint">
          <FillImg src="/assets/img/opd-1732519222130.webp" alt="NH Care homepage activity card" fit="contain" />
        </Media>
      </CsFigure>
      <CsFigure caption="The OPD journey in use, from activity card into the journey page. Screen recording at 1.75×.">
        <Media ratio="4/3" className="bg-paper-tint">
          <AutoVideo
            src="/assets/video/guided-journey-demo.mp4"
            poster="/assets/video/guided-journey-demo-poster.webp"
            rate={1.75}
            fit="contain"
          />
        </Media>
      </CsFigure>

      <CsHeading n="05" id="g-trigger">
        The opportunity was in the gaps between systems.
      </CsHeading>
      <CsPara>
        The discovery came from mapping the offline journey alongside the digital one. The hospital
        already had a system for every individual step. What it did not have was one continuous
        experience.
      </CsPara>
      <CsPara>
        A doctor starts a consultation, the queue system changes, the patient waits, the doctor sees
        them. The hospital knows that sequence precisely. The patient is sitting in a corridor
        wondering how much longer. A doctor prescribes a test, the test is paid for, the test is
        done, a report is generated — each of those exists somewhere in the estate, and the patient
        experiences all of it as one question: what do I do next.
      </CsPara>
      <CsPara>
        That was the product opportunity, and it was not a new feature. It was connecting states that
        already existed. If the backend knows something changed, the patient&rsquo;s journey should
        change with it.
      </CsPara>
      <CsPara>
        We defined the OPD Journey across the whole visit: appointment booked, health-record upload,
        pre-assessment, directions, check-in, waiting and queue, consultation, visit summary, then
        tests, medicines or follow-up, then journey end. The important decision was that this could
        not be a rigid linear flow. A consultation can end with nothing further, or a prescription and
        medicines, or an investigation leading to payment, testing and a report, or a follow-up to
        re-book. The journey had to behave like a state machine, not a checklist.
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
        The first instinct was to keep patients updated with push notifications. Payment pending.
        Test prescribed. Report ready. Visit summary available. Each notification answers exactly one
        question and carries none of the context around it, so a visit becomes a dozen unrelated
        errands arriving out of order.
      </CsPara>
      <CsPara>
        So we changed what notifications were for. They became entry points, not the experience. When
        an appointment was booked, an activity card appeared on the NH Care homepage; tapping it
        opened the journey page with the patient&rsquo;s current state and the actions available from
        it.
      </CsPara>
      <CsPara>
        That gave us a simple architecture to build against — hospital event, journey state changes,
        relevant action, notification, back into the journey — and it meant we were building one
        underlying journey with many entry points instead of a dozen disconnected features.
      </CsPara>

      <CsHeading n="07" id="g-reframe">
        The reframe.
      </CsHeading>
      <CsBlockquote>
        An appointment is not a transaction with a confirmation screen. It is a journey with states,
        and the app should be the thing that knows where the patient is in it.
      </CsBlockquote>
      <CsPara>
        The mental model we borrowed was ride-hailing: a physical journey represented digitally,
        where you can see where you are, what is happening now and what comes next. That was the
        framing behind Journeys from the start.
      </CsPara>
      <CsPara>
        Once the unit of the product became the visit rather than the booking, several things stopped
        being features to promote. Payment was no longer something to push; it was a state the app
        already knew about, surfaced where the patient already was.
      </CsPara>

      <CsHeading n="08" id="g-decision">
        The MVP, and the next best action.
      </CsHeading>
      <CsPara>
        We deliberately scoped the first version to the highest-friction moments of an OPD visit.
      </CsPara>
      <CsOrderedList
        items={[
          <>
            <strong>Geo check-in.</strong> Arrival marked through a geo-fence around the hospital
            instead of queueing at a counter to say you had arrived.
          </>,
          <>
            <strong>Live queue tracking.</strong> Queue number and estimated waiting time, making the
            most opaque part of the visit predictable.
          </>,
          <>
            <strong>Test management.</strong> When a doctor prescribed investigations, the patient
            could see and act on them inside the journey.
          </>,
          <>
            <strong>Report tracking.</strong> The journey continued past the consultation, so a
            patient knew when reports became available.
          </>,
          <>
            <strong>Follow-up booking.</strong> The visit could continue into the next one instead of
            ending at the consultation.
          </>,
        ]}
      />
      <CsPara>
        The PRD extended the same model into prescriptions, medicines, investigations, reports and
        follow-up flows.
      </CsPara>
      <CsPara>
        The decision I would defend hardest was refusing to show every possible action at once. The
        journey answers one question — given what is happening to you right now, here is what to do
        next — which is a very different product from asking a patient what they would like to do.
      </CsPara>
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
        For the journey to work, the digital experience had to reflect real-world hospital events.
        That meant integrating with appointment systems, payments, health records, geolocation, the
        queue management system, test orders, reports, visit summaries and follow-up appointments —
        with dedicated work across journey APIs, health-record APIs, payment interfaces, QMS
        integration, Firebase real-time updates and activity cards. The notification layer had to
        understand each state in turn: payment pending, pre-check-in, queue updates, tests
        prescribed, test tracking, reports ready, visit summary.
      </CsPara>
      <CsPara>
        The hardest part was not designing the journey. It was making the digital state trustworthy.
        If the hospital says the patient is still waiting, the app cannot say they are in
        consultation. If a report is not ready, the journey cannot claim it is. The product sits on
        top of several operational systems and translates their states into something a patient can
        act on — and it is only worth anything if the translation is right every time.
      </CsPara>
      <CsPara>
        The organisational cost sat in the same place. Every step in the journey has an owner in the
        physical hospital — front desk, billing, diagnostics, clinicians — and a screen that changes
        the sequence changes their day.
      </CsPara>
      <div className="my-8 max-w-[565px] border-l-2 border-rust bg-paper-tint p-5">
        <p className="font-mono text-[10px] tracking-[0.08em] text-rust uppercase">Edge case</p>
        <p className="mt-2 text-[15px] leading-[1.55] text-ink-80">
          The edge case everyone skips: the patient who arrives without having used the app,
          mid-visit. If the digital flow assumes it owns the journey, the walk-in becomes a broken
          record and the front desk stops trusting the system. We built for the walk-in joining late,
          so both entries into the visit are first-class.
        </p>
      </div>

      <CsHeading n="10" id="g-happened">
        What happened.
      </CsHeading>
      <CsPara>
        The OPD Journey went live in October 2024, with post-launch work running into November.
        Service-bill payments through NH Care rose steadily once OPD bookings were live.
      </CsPara>
      <CsStatRow
        stats={[
          { value: "₹40L → ₹13.3Cr", label: "Pay Online revenue per month" },
          { value: "32% → 53%", label: "Appointments booked digitally" },
          { value: "8.3% → 10%", label: "DAU/MAU, 215K → 280K+ MAU" },
        ]}
      />
      <CsPara>
        More broadly, Journeys became part of NH Care&rsquo;s move from a transactional product to a
        self-service platform. The direction expanded from &ldquo;book appointment&rdquo; to patient
        registration, booking, health checkups, pending payments and advance deposits, with the
        platform reporting ₹29 Cr a month, and app appointment adoption reaching 42% in the
        FY25–26 period.
      </CsPara>
      <CsPara>
        I would not attribute those broader business results to Journeys alone — the redesign carried
        several initiatives at once, and installs went from 1.64M to 3.67M across the same period.
        What Journeys established was a product direction: the app should not just facilitate a
        hospital transaction, it should help a patient navigate the care experience.
      </CsPara>
      <CsPara>
        In hindsight the most valuable output was not the journey UI. It was the underlying model —
        event, state, patient context, next best action, notification or activity card, action
        completed, new state — which is extensible to health checkups, diagnostics, follow-ups,
        medication journeys, procedures and chronic care. That is the shift from building features to
        building a journey platform.
      </CsPara>

      <CsHeading n="11" id="g-differently">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        I would make the journey state model a first-class product and engineering artifact from day
        one. Too much of the complexity arrived as discovery during implementation: payment completed
        versus pending, cancellations, arrival from different channels, multiple investigations,
        delayed reports, follow-up requirements, notification states, and backend-versus-UI state
        mismatches. The PRD eventually carried a long tail of dependent stories across those
        scenarios, and most of them were foreseeable on a whiteboard.
      </CsPara>
      <CsPara>
        I would also measure the product around journey completion rather than feature adoption:
        appointments with an activated journey, journeys reaching check-in, patients using digital
        check-in, patients viewing queue status, prescribed tests completed digitally, reports
        accessed digitally, eligible patients booking follow-ups — plus the experience side, which is
        reduction in counter interactions, reduction in &ldquo;where do I go?&rdquo; queries, time
        between states and drop-off by stage. Adoption tells you the feature was opened. Only
        completion tells you the visit got easier.
      </CsPara>
      <CsPara>
        The lesson I kept: in a complex domain, good product design is not always about simplifying
        the underlying system. Often it is about taking a complicated system and exposing only the
        next useful step.
      </CsPara>
    </CaseStudyShell>
  )
}
