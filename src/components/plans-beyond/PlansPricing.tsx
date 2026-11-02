
import './PlansPricing.css'

type Plan = {
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

const individualPlans: Plan[] = [
  {
    name: 'SPARK',
    price: '2,199',
    description:
      'Start your journey with one real-world project. Build it, deploy it live, and create your own professional online presence.',
    features: [
      'One real-world B.Tech project',
      'Project development guidance',
      'Live project deployment',
      'Personal portfolio website',
      'Your own portfolio domain',
      'One year of website hosting',
      'Project completion certificate',
    ],
  },
  {
    name: 'APEX',
    price: '2,999',
    featured: true,
    description:
      'Build your portfolio, continue your project journey and unlock opportunities to grow within SXC.',
    features: [
      'One real-world B.Tech project',
      'Project development guidance',
      'Live project deployment',
      'Personal portfolio website',
      'Your own portfolio domain',
      'One year of website hosting',
      'Project completion certificate',
      'Special rejoin offer on future projects',
      'Priority consideration for future paid Lead Intern roles',
    ],
  },
]

const teamPlans: Plan[] = [
  {
    name: 'CREW',
    price: '1,999',
    description:
      'For friends who want to grow together. Collaborate on one real-world project and build something meaningful as a team.',
    features: [
      'Team of 4–6 students',
      'One shared real-world B.Tech project',
      'Collaborative project development',
      'Project domain for the team',
      'Project completion certificate for every member',
    ],
  },
  {
    name: 'CREW PLUS',
    price: '2,599',
    featured: true,
    description:
      'A complete project and portfolio experience for your team, with additional opportunities to grow within SXC.',
    features: [
      'Team of 4–6 students',
      'One shared real-world B.Tech project',
      'Collaborative project development',
      'Live project deployment',
      'Personal portfolio website for every member',
      'Portfolio domain for every member',
      'One year of website hosting',
      'Project completion certificate for every member',
      'Special rejoin offer on future projects',
      'Priority consideration for future paid Lead Intern roles',
    ],
  },
]

function PricingCard({
  plan,
  category,
}: {
  plan: Plan
  category: 'INDIVIDUAL' | 'TEAM'
}) {
  return (
    <article
      className={`pricing-card ${
        plan.featured ? 'pricing-card-featured' : ''
      }`}
    >
      {plan.featured && (
        <div className="pricing-featured-label">
          <span>★</span> MORE OPPORTUNITIES
        </div>
      )}

      <div className="pricing-card-top">
        <span className="pricing-plan-type">
          {category === 'TEAM' ? 'TEAM PLAN' : 'INDIVIDUAL PLAN'}
        </span>

        <h4>{plan.name}</h4>

        <p className="pricing-description">{plan.description}</p>
      </div>

      <div className="pricing-price-area">
        <div className="pricing-price">
          <span className="pricing-currency">₹</span>
          {plan.price}
        </div>

        {category === 'TEAM' && (
          <span className="pricing-per-person">PER PERSON</span>
        )}
      </div>

      <div className="pricing-includes">
        <h5>WHAT'S INCLUDED</h5>

        <ul className="pricing-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <span className="pricing-check">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#contact" className="pricing-button">
        <span>Choose {plan.name}</span>
        <span className="pricing-button-arrow">↗</span>
      </a>
    </article>
  )
}

export default function PlansPricing() {
  return (
    <section className="plans-pricing" id="pricing">
      <div className="pricing-container">

        {/* MAIN HEADING */}

        <header className="pricing-heading">
          <span className="pricing-heading-accent">
            YOUR FUTURE STARTS HERE
          </span>

          <h2>
            FIND YOUR <span>PATH.</span>
          </h2>

          <p>
            Real-world projects. Practical experience. Professional
            portfolios. Choose the plan that takes you one step
            closer to your goals.
          </p>
        </header>

        {/* INDIVIDUAL PLANS */}

        <section className="pricing-group">
          <div className="pricing-group-heading">
            <div>
              <h3>
                BUILD <span>YOURSELF.</span>
              </h3>
              <p>
                Start individually. Build your skills. Create your future.
              </p>
            </div>
          </div>

          <div className="pricing-grid">
            {individualPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                category="INDIVIDUAL"
              />
            ))}
          </div>
        </section>

        {/* TEAM PLANS */}

        <section className="pricing-group">
          <div className="pricing-group-heading">
            <div>
              <h3>
                GROW <span>TOGETHER.</span>
              </h3>
              <p>
                Bring your friends. Share ideas. Build something real.
              </p>
            </div>
          </div>

          <div className="pricing-team-note">
            <div className="pricing-team-icon">✳</div>
            <div>
              <strong>Better together. Stronger together.</strong>
              <p>
                Join with a team of 4–6 students.
                All team prices are per person.
              </p>
            </div>
          </div>

          <div className="pricing-grid">
            {teamPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                category="TEAM"
              />
            ))}
          </div>
        </section>

        {/* REJOIN PLAN */}

        <section className="pricing-group pricing-rejoin-group">
          <div className="pricing-group-heading">
            <div>
              <h3>
                YOUR NEXT <span>CHAPTER.</span>
              </h3>
              <p>
                Already started with SXC? Keep moving forward.
              </p>
            </div>
          </div>

          <article className="rejoin-card">
            <div className="rejoin-card-content">
              <span className="rejoin-label">
                FOR EXISTING SXC STUDENTS
              </span>

              <h4>RISE AGAIN<span>.</span></h4>

              <p>
                Already completed a project with us? Don't stop here.
                Join another project at a special rejoin price and
                continue building your experience.
              </p>

              <div className="rejoin-benefits">
                <div>
                  <span>✓</span>
                  A new project experience
                </div>
                <div>
                  <span>✓</span>
                  A new project certificate
                </div>
                <div>
                  <span>✓</span>
                  Continue growing with SXC
                </div>
              </div>
            </div>

            <div className="rejoin-price-card">
              <span className="rejoin-price-label">
                SPECIAL REJOIN PRICE
              </span>

              <div className="rejoin-price">
                <span>₹</span>1,299
              </div>

              <span className="rejoin-price-caption">
                PER PROJECT
              </span>

              <a href="#contact" className="rejoin-button">
                <span>Rejoin SXC</span>
                <span>↗</span>
              </a>
            </div>
          </article>
        </section>

        {/* REFUND NOTICE */}

        <section className="refund-notice">
          <div className="refund-notice-heading">
            <span>PAYMENT INFORMATION</span>
            <h3>Refund & Upgrade Policy</h3>
          </div>

          <div className="refund-notice-content">
            <div className="refund-main-rule">
              <div className="refund-rule-icon">!</div>
              <div>
                <h4>ALL PLAN PURCHASES ARE NON-REFUNDABLE.</h4>
                <p>
                  Once your payment is confirmed, refund requests due to
                  a change of mind, cancellation or a decision not to
                  continue are not accepted, subject to applicable law.
                </p>
              </div>
            </div>

            <div className="refund-upgrade-rule">
              <div className="refund-rule-icon">↗</div>
              <div>
                <h4>Want to upgrade your plan?</h4>
                <p>
                  You may request an upgrade to a higher plan by paying
                  the applicable price difference, subject to SXC approval.
                  Upgrading does not entitle you to a refund of your
                  original payment.
                </p>
              </div>
            </div>

            <p className="refund-legal-note">
              Refunds, where required by applicable consumer protection
              laws or other legal obligations, will be handled in
              accordance with those requirements.
            </p>

            <a href="/refund-policy" className="refund-policy-link">
              Read Full Refund Policy <span>↗</span>
            </a>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="pricing-cta">
          <span className="pricing-cta-eyebrow">
            YOUR NEXT MOVE STARTS HERE
          </span>

          <h3>
            Ready to Build
            <span>Something Real?</span>
          </h3>

          <p>
            Choose your path, work on real projects and create
            something you can proudly showcase.
          </p>

          <a href="#contact" className="pricing-cta-button">
            JOIN SXC CREATIONS <span>↗</span>
          </a>

          <p className="pricing-cta-small">
            Have questions? We're here to guide you.
          </p>
        </section>

        {/* FOOTER LINKS */}

        <footer className="pricing-footer">
          <p>BEFORE YOU JOIN, KNOW WHAT YOU GET.</p>

          <nav
            className="pricing-footer-links"
            aria-label="Important information"
          >
            <a href="/benefits">Our Benefits <span>↗</span></a>
            <a href="/refund-policy">Refund Policy <span>↗</span></a>
            <a href="/terms">Terms & Conditions <span>↗</span></a>
          </nav>

          <p className="pricing-footer-disclaimer">
            Please review the applicable benefits and policies before
            completing your registration and payment.
          </p>
        </footer>

      </div>
    </section>
  )
}
