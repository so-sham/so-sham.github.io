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
        HCCI Connect ran on mobile-number or email OTP, and patient records were fetched against that
        identifier. In the Cayman Islands a mobile number can be recycled in roughly ninety days,
        which makes the model dangerous rather than merely inconvenient: the new owner of a recycled
        number could authenticate against records belonging to the previous owner.
      </CsPara>
      <CsPara>
        The legacy chain read mobile number → patient → health records. But a number can be recycled,
        change ownership, be shared inside a family, be used from a new device or from a different
        country. In healthcare, the wrong person reaching a patient&rsquo;s records is not a login
        failure. It is a privacy failure.
      </CsPara>
      <CsPara>
        At the same time authentication had become a recurring source of friction: every login meant
        a phone number or email, a wait for an OTP, and a code. Two problems to solve at once — make
        login almost invisible for the patient, and make patient identity stronger than a phone
        number.
      </CsPara>
      <CsPara>
        So the PRD opened with an architectural change rather than a screen. <code>patient_id</code>{" "}
        becomes the identity. Mobile and email become contact methods. The passkey proves ownership
        of the patient identity, not of the phone number.
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
        The obvious security answer is another verification step every time, which makes the product
        progressively harder to use. The obvious UX answer is to keep people signed in indefinitely,
        which is dangerous for a healthcare application. Neither is a product decision; they are
        opposite ends of one.
      </CsPara>
      <CsPara>
        So the real question became: how do we make authentication invisible when everything is
        normal, and deliberately visible when something changes? That is risk-adaptive
        authentication, and it only works if you accept that the two surfaces are not the same
        product.
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
      <CsPara>
        A phone is personal, so a device-bound passkey can carry a real relationship between the
        patient and their device. The portal may be a hospital kiosk or a shared machine, where
        saving a browser or an IP as trusted means the next person inherits that trust. So the portal
        never saves device trust, and every session begins with a fresh risk evaluation. Do not apply
        the same authentication model to different contexts.
      </CsPara>
      <CsPara>
        The other half of the insight is that authentication does not have to be equally visible at
        every stage. A patient who has verified their identity, registered the device, created a
        passkey and logged in successfully gains nothing from proving themselves again while nothing
        has changed. The normal experience is open app, dashboard: no OTP, no PIN, no biometric
        prompt on launch — the same persistent-login model people already know from WhatsApp. The
        passkey surfaces at three moments only: first registration, long inactivity, and after a
        successful Layer 2 check on a new device.
      </CsPara>

      <CsHeading n="06" id="pk-rejected">
        Why OTP alone wasn&rsquo;t enough.
      </CsHeading>
      <CsPara>
        OTP is convenient next to passwords, but it answers exactly one question: does this person
        control this phone number or inbox right now. It does not answer the question that matters —
        is this the patient whose health records we are about to show. Recycled numbers live
        precisely in that gap.
      </CsPara>
      <CsPara>
        So we did not remove OTP. We changed its job, and separated three mechanisms that had been
        collapsed into one.
      </CsPara>
      <CsOrderedList
        items={[
          <>
            <strong>OTP</strong> proves control of a contact method. Baseline authentication, kept
            permanently, with no deprecation date attached.
          </>,
          <>
            <strong>Layer 2</strong> proves patient identity, using patient information such as date
            of birth and name against the record.
          </>,
          <>
            <strong>The passkey</strong> establishes trusted device access, bound to{" "}
            <code>patient_id</code> rather than to a number or an address.
          </>,
          <>
            <strong>The risk engine</strong> decides when more proof is needed: new device, new
            browser, new IP, country change, long inactivity, suspicious behaviour, a previous failed
            verification.
          </>,
        ]}
      />
      <CsPara>
        Because the passkey binds to <code>patient_id</code>, the contact method can change without
        changing the identity. A patient can log in by mobile today and by email later and remain the
        same person to the system, which is what makes the model survive the realities of healthcare
        identity.
      </CsPara>

      <CsHeading n="07" id="pk-reframe">
        The reframe.
      </CsHeading>
      <CsBlockquote>
        We weren&rsquo;t designing a better login screen. We were designing an identity system.
      </CsBlockquote>
      <CsPara>
        The model reads: patient, then a permanent <code>patient_id</code>, then contact methods,
        then authentication by OTP or passkey, then risk evaluation, then Layer 2 identity
        verification when it is required. Everything below the identity is replaceable. Nothing below
        it is allowed to become the identity again.
      </CsPara>
      <ProductMapTabs artifactHref="https://claude.ai/public/artifacts/c3ae8e76-4577-b27a-cdb818e19153" />
      <p className="text-[13px] leading-[1.4] text-ink-55">Fig. 3 — Identity, authentication and risk, pulled apart.</p>

      <CsHeading n="08" id="pk-decision">
        The hard cases are where the model is decided.
      </CsHeading>
      <CsPara>
        <strong>A new phone.</strong> The most interesting flow in the project, because
        OTP-then-access would recreate the original problem exactly. A new device runs OTP, then
        Layer 2, then passkey setup, and only then becomes active — and the old device&rsquo;s
        passkey is invalidated server-side. One active passkey at a time. The exception we allowed:
        passkeys that sync inside one ecosystem, iPhone to iPhone through iCloud, are recognised
        without forcing the full new-device flow.
      </CsPara>
      <CsPara>
        <strong>A family sharing one number.</strong> One phone number is not one patient. Every
        family member keeps their own <code>patient_id</code>, and where several profiles exist the
        app shows a profile selector — dad&rsquo;s records or the child&rsquo;s — without the
        identity model having to guess. Another reason the number could not stay as the primary
        identity: the number is shared, the identities are not.
      </CsPara>
      <CsPara>
        <span className="em-underline">The case everyone skips</span>:{" "}
        <strong>verification that fails.</strong> Healthcare authentication cannot behave like a bank
        account, where repeated failures escalate into aggressive lockouts — a real patient simply
        mistypes a date of birth. So the product deliberately does not lock accounts. If Layer 2
        fails, the user does not reach the existing health records; they can proceed with a blank
        account while the previous records stay protected and detached. When identity is uncertain,
        protect the data, not by punishing the user but by withholding access.
      </CsPara>

      <CsHeading n="09" id="pk-ship">
        What it took to ship.
      </CsHeading>
      <CsPara>The passkey was one part of the implementation. The work ran across four layers.</CsPara>
      <CsPara>
        <strong>Backend foundation.</strong> <code>patient_id</code> as primary identity, passkey
        registration and verification, IP geolocation, email OTP parity.
      </CsPara>
      <CsPara>
        <strong>App.</strong> Passkey setup, persistent sessions, Layer 2, masked patient data,
        profile selector, passkey nudges.
      </CsPara>
      <CsPara>
        <strong>Portal.</strong> Risk-signal engine, Layer 2, email OTP, new-device detection, and no
        persistent device trust.
      </CsPara>
      <CsPara>
        The Cayman rollout was planned across six weeks, then shadow mode, QA, and a staged release
        from 10% to 50% to 100% over seven days.
      </CsPara>
      <CsPara>
        Migration mattered more than the build. We could not expect millions of existing
        authentication relationships to change overnight, so migration was lazy. An existing patient
        opening the updated app saw one line — upgrade your login, open the app instantly without
        codes. Accept it and they did OTP one last time, then Layer 2, then a passkey, and future
        logins became seamless. Skip it and OTP continued to work indefinitely, with the prompt
        returning every third login. Security could improve progressively without a disruptive hard
        gate.
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
        The success criteria were written around security and experience together, because
        &ldquo;how many passkeys were created&rdquo; is not an answer. Authentication experience:
        passkey adoption, OTP fallback rate, login success, login drop-off, time to access. Security:
        Layer 2 trigger rate, successful verification rate, new-device verification, recycled-number
        protection, old-device revocation. Operational health: support requests, failed passkey
        recovery, false-positive risk triggers.
      </CsPara>
      <CsPara>
        The OTP baseline above is the context those will be read against. The PRD carries no
        post-launch passkey impact figures, so I am not presenting adoption or conversion
        improvements as achieved results without production data behind them.
      </CsPara>
      <CsPara>
        What the architecture did deliver is separation: identity answers who this patient is,
        authentication answers whether they can prove access, and risk answers whether we should ask
        for more proof right now. Those three had previously been one field.
      </CsPara>

      <CsHeading n="11" id="pk-differently">
        What I&rsquo;d do differently.
      </CsHeading>
      <CsPara>
        I would establish the identity model before designing the authentication experience. The
        temptation in an authentication project is to start with OTP versus password versus
        biometric versus passkey, but that is the second question. The first is what exactly we are
        authenticating the user to. Once the answer became <code>patient_id</code>, the rest of the
        architecture fell out of it.
      </CsPara>
      <CsPara>
        I would also write the risk taxonomy and the state machine down earlier. Known device with
        recent activity in the same country is low risk. New device, new country and long inactivity
        go to Layer 2. Failed verification means no record access. A verified new device creates a
        passkey and revokes the old one. Four lines, defined upfront, that make both the engineering
        and the UX arguments considerably shorter.
      </CsPara>
      <CsPara>
        The takeaway I kept: the best authentication experience is not the one with the fewest
        security checks. It is the one that knows when the user actually needs to see them.
      </CsPara>
    </CaseStudyShell>
  )
}
