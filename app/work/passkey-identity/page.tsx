import type { Metadata } from "next"
import { CaseStudyShell } from "@/components/case-study/case-study-shell"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CsHeading, CsPara, CsFigure, CsBlockquote, CsStatRow, CsTable, CsOrderedList } from "@/components/case-study/case-study-kit"
import { Media, FillImg } from "@/components/layout/media"
import { ProductMapTabs } from "@/components/case-study/product-map-tabs"

export const metadata: Metadata = {
  title: "Passkey Identity — Shamitha Gowda",
}

const SPINE = [
  { n: "04", label: "A number is not an identity", id: "pk-setup" },
  { n: "05", label: "Two objectives in conflict", id: "pk-trigger" },
  { n: "06", label: "Why OTP wasn't enough", id: "pk-rejected" },
  { n: "07", label: "The reframe", id: "pk-reframe" },
  { n: "08", label: "The hard cases", id: "pk-decision" },
  { n: "09", label: "What it took to ship", id: "pk-ship" },
  { n: "10", label: "Measuring it", id: "pk-happened" },
  { n: "11", label: "What I'd do differently", id: "pk-differently" },
]

export default function PasskeyIdentityPage() {
  return (
    <CaseStudyShell
      hero={
        <CaseStudyHero
          backHref="/#sec-work"
          backLabel="← Work"
          title={
            <>
              Fixing login in a market where phone numbers <em className="em-accent">change hands</em>
            </>
          }
          dek="Originating passkey authentication for a Cayman health platform, in a market where recycled SIMs meant a phone number could belong to two people in a year."
          metadata={[
            { label: "Product", value: "HCCI app & portal" },
            { label: "Market", value: "Cayman Islands" },
            { label: "Role", value: "PM · authentication strategy & architecture" },
            { label: "On the ground", value: "2 months" },
            { label: "Read", value: "7 min" },
          ]}
        />
      }
      spineItems={SPINE}
      footerNote="Artifacts on this page are redacted."
      prev={{ label: "← All work", href: "/#sec-work" }}
      next={{ label: "Next: One Health Cayman →", href: "/work/one-health-cayman" }}
    >
      <CsHeading n="04" id="pk-setup">
        A phone number is a contact method. It should not be an identity.
      </CsHeading>
      <CsPara>
        Legacy auth fetched records directly against mobile/email OTP. In Cayman a number can be
        recycled within 90 days, so a new owner could authenticate against the previous owner&rsquo;s
        records. The reframe: <code>patient_id</code> becomes the identity; mobile and email become
        contact methods.
      </CsPara>
      <CsFigure caption="The upgrade prompt: faster access, stronger security, less to remember — then Add Passkey or skip.">
        <Media ratio="9/16" className="mx-auto max-w-[220px] border border-rule-warm bg-white">
          <FillImg src="/assets/img/pk-1.webp" alt="Passkey upgrade prompt screenshot" fit="contain" />
        </Media>
      </CsFigure>
      <CsFigure caption="Passkey management: up to five devices per account, each one revocable.">
        <Media ratio="9/16" className="mx-auto max-w-[220px] border border-rule-warm bg-white">
          <FillImg src="/assets/img/pk-2.webp" alt="Passkey device management screenshot" fit="contain" />
        </Media>
      </CsFigure>

      <CsHeading n="05" id="pk-trigger">
        Security wanted more verification. Patients wanted less.
      </CsHeading>
      <CsPara>
        Risk-adaptive authentication, split across two surfaces. Passkey only surfaces at three
        moments: first registration, long inactivity, and a successful Layer 2 on a new device.
      </CsPara>
      <CsTable
        caption="Two surfaces"
        columns={["", "Connect app", "Connect portal"]}
        rows={[
          ["Primary auth", "Passkey", "OTP"],
          ["Daily experience", "Invisible", "OTP every session"],
          ["Risk checks", "When passkey can't establish trust", "Every session"],
          ["Layer 2", "When required", "When risk detected"],
          ["Device trust", "Bound to passkey", "Never saved"],
        ]}
      />

      <CsHeading n="06" id="pk-rejected">
        Why OTP alone wasn&rsquo;t enough.
      </CsHeading>
      <CsOrderedList
        items={[
          <>
            <strong>OTP</strong> — proves contact-method control, permanent.
          </>,
          <>
            <strong>Layer 2</strong> — proves patient identity via DOB/name.
          </>,
          <>
            <strong>The passkey</strong> — trusted device, bound to <code>patient_id</code>.
          </>,
          <>
            <strong>The risk engine</strong> — decides when more proof is needed: new device/browser/
            IP, country change, inactivity, suspicious behaviour, prior failed verification.
          </>,
        ]}
      />

      <CsHeading n="07" id="pk-reframe">
        The reframe.
      </CsHeading>
      <CsBlockquote>
        We weren&rsquo;t designing a better login screen. We were designing an identity system.
      </CsBlockquote>
      <ProductMapTabs artifactHref="https://claude.ai/public/artifacts/c3ae8e76-4577-b27a-cdb818e19153" />
      <p className="text-[13px] leading-[1.4] text-ink-55">Fig. 3 — Identity, authentication and risk, pulled apart.</p>

      <CsHeading n="08" id="pk-decision">
        The hard cases are where the model is decided.
      </CsHeading>
      <CsPara>
        <strong>A new phone</strong> — OTP → Layer 2 → passkey setup; the old device&rsquo;s passkey is
        invalidated, with an exception recognising an iCloud passkey sync without a full re-flow.
      </CsPara>
      <CsPara>
        <strong>A family sharing one number</strong> — each person keeps their own{" "}
        <code>patient_id</code>, with a profile selector.
      </CsPara>
      <CsPara>
        <strong>Verification that fails</strong> — no lockouts; healthcare is not banking. A failed
        Layer 2 leads to a blank account, not an access-denied lockout.
      </CsPara>

      <CsHeading n="09" id="pk-ship">
        What it took to ship.
      </CsHeading>
      <CsPara>
        <strong>Backend</strong> — <code>patient_id</code> as primary identity, passkey registration/
        verification, IP geolocation, email OTP parity.
      </CsPara>
      <CsPara>
        <strong>App</strong> — passkey setup, persistent sessions, Layer 2, masked patient data,
        profile selector, nudges.
      </CsPara>
      <CsPara>
        <strong>Portal</strong> — risk-signal engine, Layer 2, email OTP, new-device detection, no
        persistent device trust.
      </CsPara>
      <CsPara>
        Cayman rollout: 6 weeks build → shadow mode → QA → staged 10% → 50% → 100% over 7 days.
        Migration was lazy: a one-line upgrade prompt, OTP-forever fallback, with the prompt
        returning every 3rd login if skipped.
      </CsPara>

      <CsHeading n="10" id="pk-happened">
        Measuring it, and what I will not claim.
      </CsHeading>
      <CsStatRow
        stats={[
          { value: "92.75%", label: "Web phone-login success, baseline" },
          { value: "94.82%", label: "Mobile-app login success, baseline" },
          { value: "~90 days", label: "Cayman number recycling window" },
          { value: "1", label: "Active passkey per patient, by design" },
        ]}
      />
      <CsPara>
        These are baselines, not results — no post-launch passkey impact figures exist yet.
      </CsPara>

      <CsHeading n="11" id="pk-differently">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        Establish the identity model before the auth experience, and write the risk taxonomy and
        state machine earlier.
      </CsPara>
    </CaseStudyShell>
  )
}
