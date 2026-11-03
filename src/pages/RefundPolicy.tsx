import './RefundPolicy.css'

function RefundPolicy() {
  return (
    <main className="refund-page">
      <div className="refund-page__inner">
        <span className="refund-page__eyebrow">LEGAL</span>

        <h1>Refund Policy</h1>

        <p className="refund-page__updated">Last updated: 3 November 2026</p>

        <p className="refund-page__intro">
          Please read this policy carefully before paying for an SXC
          project-building program. By making a payment, you accept this policy.
        </p>

        <section>
          <h2><span>1.</span> Fees and booking</h2>
          <p>
            SXC program fees depend on the plan you choose: Individual Plan 1 —
            ₹2,199, Individual Plan 2 — ₹2,999, Team Plan A — ₹1,999 per head,
            Team Plan B — ₹2,599 per head, and Rejoin — ₹1,299 for existing
            members. A seat is confirmed only when the ₹500 booking amount is
            received. The remaining balance is payable before Day 1 of the
            program. Payments are made through UPI.
          </p>
        </section>

        <section>
          <h2><span>2.</span> Payments are non-refundable</h2>
          <p>
            Once a payment has been completed — booking amount or full fee —
            it is not refundable, and participants are not eligible to request
            or receive a refund. This is because project planning, team
            formation, mentor allocation and resource preparation begin as soon
            as a seat is booked.
          </p>
        </section>

        <section>
          <h2><span>3.</span> Withdrawal</h2>
          <p>
            Participants cannot withdraw from the program after project work
            has commenced. Leaving the program at any stage does not create
            eligibility for a refund. Participants are expected to remain
            committed to their project and team responsibilities for the full
            program duration.
          </p>
        </section>

        <section>
          <h2><span>4.</span> Changes by SXC</h2>
          <p>
            If SXC must change a batch start date, project assignment or
            program schedule, your payment remains fully valid for the revised
            schedule. A schedule change does not create eligibility for a
            refund.
          </p>
        </section>

        <section>
          <h2><span>5.</span> Timeline extension</h2>
          <p>
            The standard program duration is 45 days. If a project needs more
            time, SXC may extend the timeline at no additional charge. An
            extension does not create eligibility for a refund.
          </p>
        </section>

        <section>
          <h2><span>6.</span> No guaranteed outcomes</h2>
          <p>
            Payment does not guarantee employment, internships, revenue,
            startup formation, commercial success or placement opportunities.
            SXC provides a practical project-building experience; outcomes
            depend on team participation, individual contribution and project
            requirements.
          </p>
        </section>

        <section>
          <h2><span>7.</span> Before you pay</h2>
          <p>Please review these before making any payment:</p>
          <ul>
            <li>Program structure and 45-day duration</li>
            <li>Participation expectations and team responsibilities</li>
            <li>The plan and fee you are paying for</li>
            <li>This Refund Policy and the Terms &amp; Conditions</li>
          </ul>
          <p>
            If anything is unclear, contact SXC before paying — we would rather
            answer a question first than have a misunderstanding later.
          </p>
        </section>

        <div className="refund-page__contact">
          <h3>Questions about payments?</h3>
          <p>
            Email: <a href="mailto:sintraxcreations@gmail.com">sintraxcreations@gmail.com</a>
            <br />
            WhatsApp: <a href="https://wa.me/919490354451" target="_blank" rel="noreferrer">+91 94903 54451</a>
          </p>
        </div>

        <p className="refund-page__accept">
          By proceeding with payment, you acknowledge that you have read and
          understood this Refund Policy.
        </p>
      </div>
    </main>
  )
}

export default RefundPolicy
