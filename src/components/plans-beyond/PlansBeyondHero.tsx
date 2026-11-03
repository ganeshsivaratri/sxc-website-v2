
import './PlansBeyondHero.css'
import heroImage from '../../assets/images/planpointing.webp'

export default function PlansBeyondHero() {
  return (
    <section className="plans-beyond-hero">
      <div className="plans-beyond-inner">

        <div className="plans-hero-main">

          {/* LEFT CONTENT */}
          <div className="plans-hero-content">
            <span className="plans-eyebrow">PLANS & BEYOND</span>

            <h1>
              Plans Are Here.
              <span>Plan It Wisely.</span>
            </h1>

            <div className="plans-heading-line" />

            <div className="plans-hero-description">
              <p>Every B.Tech student needs</p>
              <strong>4–6 PROJECTS</strong>
              <p>to build skills and a strong portfolio.</p>
            </div>

            <p className="plans-hero-subtitle">
              Choose the plan that fits you.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="plans-hero-image-area">
            <div className="plans-image-glow" />

            <img
              className="plans-hero-image"
              src={heroImage}
              alt="Student presenting the available project plans"
            />
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="plans-hero-description-bottom">
          <span className="plans-description-marker" />

          <p>
            Choose a plan that matches your goals, work on meaningful
            real-world projects, develop practical skills, and build
            a portfolio that showcases what you can do.
          </p>
        </div>

        {/* GUIDANCE */}
        <div className="plans-support">
          <div className="plans-support-content">
            <span className="plans-support-label">
              NEED GUIDANCE?
            </span>

            <h2>Not sure which plan to choose?</h2>

            <p>
              For guidance or any help in choosing, contact us.
              We're there for you.
            </p>
          </div>

          <a href="#contact" className="plans-contact-button">
            Contact Us <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}
