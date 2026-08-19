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
        NH Care had already become a meaningful digital layer: appointments, health records,
        payments, health checkups, all in one place. But healthcare is intent-driven. Nobody wakes up
        thinking they need to navigate the appointment module. They think: I need to see a doctor.
        What does this report mean. My doctor told me to come back, how do I book that. Is this
        result normal. Where is my report.
      </CsPara>
      <CsPara>
        The product had the information required to answer most of that. What it did not have was a
        layer that could understand the intent, connect it with the patient&rsquo;s context, and turn
        it into an action.
      </CsPara>
      <CsPara>
        Health Records was the clearest case. It was not a document repository so much as a retention
        layer: around 90K monthly unique viewers, and roughly half returning the same day in the
        product analysis. Patients could open a report, see the numbers, see their consultation
        history, see their appointments — and the product did not understand how any of those pieces
        connected. Someone could be holding a new report, an older report, a doctor&rsquo;s
        recommendation, a pending investigation and a follow-up requirement, and still have to work
        out what all of it meant on their own.
      </CsPara>

      <CsHeading n="02" id="p-worth">
        The product question.
      </CsHeading>
      <CsPara>
        Could NH Care move from being a healthcare application to being an intelligent healthcare
        companion? Not another chatbot, not a generic assistant, but a layer sitting across the
        existing ecosystem that knows who the patient is, what they are asking, what is in their
        records, what is happening in their care journey and what actions are available — and turns
        that into understand, recommend, act.
      </CsPara>
      <CsPara>
        The PRD defines Pulse as an agentic AI care-navigation assistant inside NH Care, built to
        help patients discover, understand and take the right healthcare action through conversation.
      </CsPara>

      <CsHeading n="03" id="p-hardest">
        The reframe.
      </CsHeading>
      <CsBlockquote>
        AI shouldn&rsquo;t create another workflow. It should remove the need to navigate workflows.
      </CsBlockquote>
      <CsPara>
        The obvious approach was to build an AI chatbot, which would have created another destination
        in the app and another thing to learn: when am I supposed to use Pulse? Instead it had to
        understand the context of journeys that already existed.
      </CsPara>
      <CsPara>
        Ask what your latest Vitamin D result is, and the answer should come from your record rather
        than from general knowledge. Say your doctor told you to come back, and the system should
        recognise a follow-up and move towards booking rather than explaining how booking works.
        Upload a medical report and you should get more than &ldquo;document uploaded
        successfully&rdquo; — the document should be understood and the relevant next action
        surfaced.
      </CsPara>
      <CsPara>
        So Pulse was designed around intent rather than features. The appointment system already
        supported symptom, speciality, doctor and location discovery, booking, cancellation,
        rescheduling, follow-up and cross-consultation; the model&rsquo;s job was to work out what the
        patient was trying to accomplish and route them into the right one. &ldquo;I need to see a
        cardiologist near me&rdquo; becomes speciality plus location, a relevant shortlist, a booking.
        &ldquo;I need the same doctor I saw last time&rdquo; becomes retrieve the consultation,
        identify the doctor, start a contextual booking. The product was not answering questions. It
        was turning natural language into product actions.
      </CsPara>

      <CsHeading n="04" id="p-records">
        Health Records became an intelligence layer inside Pulse.
      </CsHeading>
      <CsPara>
        The AI report summaries, document intelligence and health-record insights were never separate
        products. They became capabilities inside Pulse, defined as a Health Records Intelligence
        layer using EMR data plus conversational context to generate personalised insights and
        actionables. That let Pulse reason at four depths.
      </CsPara>
      <CsTable
        caption="Level → what Pulse can do with it"
        columns={["Level", "Capability"]}
        rows={[
          [
            "One report",
            "Extract structured information, identify abnormal values, explain them in patient-friendly language, recommend a next step",
          ],
          [
            "Several reports",
            "Consolidate reports from the same speciality into a summary and recommend the specialist consultation",
          ],
          [
            "Cross-speciality",
            "Prioritise the most relevant health concern and recommend the appropriate specialist",
          ],
          ["Longitudinal", "Surface a worsening trend across time and recommend follow-up"],
        ]}
      />
      <CsPara>
        The first implementation focused on structured reports. A patient taps summarize with AI, and
        instead of being handed raw laboratory values — Vitamin B12 at 12 against a normal range of
        20 to 40 — gets an explanation: your B12 is below the normal range, and low B12 is commonly
        associated with fatigue and weakness. Where results were out of range, the experience
        surfaced a relevant doctor with a book-now CTA. Report, understand, decide, act — rather than
        report, read, leave.
      </CsPara>
      <CsPara>
        Half of it does not wait to be asked. Static intelligence comes directly from EMR events: a
        pending follow-up offers the booking, a pending referral offers the cross-consultation, a
        pending investigation offers the diagnostic test, a pending medication offers the details, a
        new abnormal report offers the summary. Dynamic intelligence combines that EMR context with
        what the patient is asking right now, so the same report can lead to different useful
        actions. That is where Pulse stops being a chatbot and becomes care navigation.
      </CsPara>
      <CsFigure caption="Plain-language summary, the findings it was drawn from, and the organ view, each ending in a next action.">
        <Media ratio="1234/1000" className="bg-paper-tint">
          <FillImg src="/assets/img/pulse-collage.webp" alt="Pulse AI report summary and organ view" />
        </Media>
      </CsFigure>

      <CsHeading n="05" id="p-system">
        Don&rsquo;t let the AI become the doctor.
      </CsHeading>
      <CsPara>
        This was the most important constraint in the project. The product can interpret and
        explain. It cannot diagnose. Every summary carries the framing — AI-generated, general
        information, not medical advice — the architecture deliberately avoids urgency language, and
        it routes people toward clinicians rather than presenting output as a diagnosis. Clinical
        guardrails were designed into the architecture, not added as a disclaimer at the end. The AI
        can interpret information; the product stays responsible for the action.
      </CsPara>
      <CsPara>
        Which ruled out the easy implementation. We do not send raw healthcare data to an LLM and
        trust the answer. For structured lab reports it runs in four steps.
      </CsPara>
      <CsOrderedList
        items={[
          <>
            <strong>Deterministic rules establish ground truth.</strong> Is the value in range, which
            parameters are abnormal, what the normal ranges are, which clinical associations are
            permitted.
          </>,
          <>
            <strong>The LLM generates from structured input.</strong> Azure OpenAI, GPT-4.1-nano for
            the MVP, because this is structured summarisation and not open-ended medical reasoning.
          </>,
          <>
            <strong>Validation against the ground truth.</strong> Flag agreement, all_normal
            consistency, banned phrases, summary length, curated clinical associations. Only a
            validated response is returned.
          </>,
          <>
            <strong>Cache.</strong> Once validated, the summary is held in Redis for thirty days
            rather than regenerated.
          </>,
        ]}
      />
      <CsPara>
        <span className="em-underline">Use AI for synthesis. Use deterministic systems for truth.</span>{" "}
        And design the failure states explicitly, because healthcare AI cannot behave like a novelty
        feature where a wrong answer is merely inconvenient.
      </CsPara>
      <CsTable
        caption="If this happens → the patient gets"
        columns={["If this happens", "The patient gets"]}
        rows={[
          ["AI service unavailable", "Reports keep working exactly as before"],
          ["Validation fails", <span key="vf" className="text-rust">No summary is shown at all</span>],
          ["Not enough structure in the report", "The AI trigger is never exposed"],
          ["API times out", "A graceful retry state"],
        ]}
      />

      <CsHeading n="06" id="p-wrong">
        What&rsquo;s in the MVP.
      </CsHeading>
      <CsPara>Four intelligence areas behind one conversational surface.</CsPara>
      <CsOrderedList
        items={[
          <>
            <strong>Intelligent appointment management.</strong> Discover and book doctors by
            symptom, speciality, doctor preference or location.
          </>,
          <>
            <strong>Medical document intelligence.</strong> Upload, OCR, classify, detect
            abnormalities, summarise, recommend the next action.
          </>,
          <>
            <strong>Health records intelligence.</strong> EMR data and conversational context turned
            into personalised insight and actions.
          </>,
          <>
            <strong>Conversational FAQ assistant.</strong> Appointments, health records, checkups,
            tests, vaccines, payments, refunds, memberships and app guidance, with contextual action
            nudges.
          </>,
        ]}
      />
      <CsPara>
        On top of those, a planned voice layer in English, Hindi and Kannada. One mental model: a
        single conversational interface across many healthcare capabilities.
      </CsPara>
      <CsPara>
        The difficult part was never calling an LLM. It was the infrastructure around it — intent
        classification, healthcare context, EMR access, structured report extraction, OCR, prompts,
        clinical boundaries, validation, recommendation logic, booking APIs, latency, caching,
        analytics, error handling, privacy and governance. For the AI Summary MVP alone the planned
        work covered the backend API, rules, prompt and cache, the Azure integration, frontend
        states, QA and prompt testing, clinical review and Mixpanel instrumentation: roughly two
        sprints.
      </CsPara>

      <CsHeading n="07" id="p-now">
        Targets, not results.
      </CsHeading>
      <CsPara>
        The commercial logic was straightforward. Health Records was already a strong engagement
        layer — roughly 40% of app visits and about 90K monthly users in the FY25–26 reporting — and
        the opportunity was to connect that engagement to care actions. The AI summary creates a new
        micro-funnel: summary tapped, summary viewed, CTA tapped, booking completed, with each event
        defined so it can be compared against the existing baseline.
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
        The 24% is the only real number in that table: roughly one in four patients who tap book
        doctor today complete a booking. Everything else is a target from the PRD, and I am not
        going to present targets as outcomes.
      </CsPara>
      <CsPara>
        The roadmap after the MVP goes deeper rather than wider. V1.1 adds the previous report for
        trend context — your Vitamin D improved from 28 to 45 since your last test. V2 detects
        patterns across several reports and connects medications with results — your Vitamin D has
        been below range in three of your last four tests. V3 is longitudinal health context,
        personalised insight and intelligent specialist routing. Answer questions, understand
        context, anticipate needs.
      </CsPara>

      <CsHeading n="08" id="p-watching">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        I would start with the action layer before the conversational one. The temptation with AI
        products is to ask what the model can answer; the better first question is what the patient
        can actually do after receiving the answer. For every intent I would map intent, context,
        answer, action, outcome — my doctor asked me to come back becomes retrieve the consultation,
        identify the follow-up recommendation, explain it, book it, confirm. What does my latest
        report mean becomes retrieve the report, identify abnormal values, explain within clinical
        boundaries, recommend the next action, book a clinician if it is relevant. That keeps Pulse
        grounded in care completion rather than conversational engagement for its own sake.
      </CsPara>
      <CsPara>
        The lesson underneath all of it is not about LLMs. AI is not valuable because it can generate
        a summary. A summary is valuable when it changes what the patient does next. A report
        becomes a doctor. A pending investigation becomes a booked diagnostic. A follow-up
        recommendation becomes an appointment. A question becomes context, an answer, and an action.
      </CsPara>
      <CsPara>
        Which is the real promise of agentic AI in healthcare: not replacing the doctor and not
        replacing the healthcare system, but reducing the cognitive work required for a patient to
        move through it.
      </CsPara>
    </CaseStudyShell>
  )
}
