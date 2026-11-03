import { Link } from 'react-router-dom'
import './Benefits.css'
import benefitsGuide from '../assets/images/benefits-scroll-guide.png'
import certificateSample from '../assets/images/sxc-certificate-sample.png'
import portfolioSample from '../assets/images/sxc-portfolio-sample.png'

function Benefits() {
  return (
    <main className="benefits-page">
      <div className="benefits-page__inner">
        <span className="benefits-page__eyebrow">STUDENT BENEFITS</span>

        <h1>
          Everything you <span>walk away</span> with.
        </h1>

        <p className="benefits-page__sub">
          SXC is not a course. In 45 days you build a real project with a team —
          and you leave with proof you can show anyone.
        </p>

        <img
          className="benefits-guide"
          src={benefitsGuide}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="benefits-main">
        <h2 className="benefits-heading">
          Major Benefits Students Get <span>From SXC</span>
        </h2>

        <section className="benefit-block benefit-block--blue">
          <span className="benefit-block__num">1</span>
          <div>
            <h3>A project that adds weight to your resume</h3>
            <ul className="benefit-points">
              <li>Built by your team — tested — then <strong>live for real customers</strong></li>
              <li>Real people use what you built</li>
              <li>If it earns, <strong>your team shares the profit</strong></li>
            </ul>
            <div className="benefit-stats">
              <div className="benefit-stat">
                <strong>20%</strong>
                <span>of profit — Year 1</span>
              </div>
              <div className="benefit-stat">
                <strong>10%</strong>
                <span>of profit — every year after</span>
              </div>
            </div>
          </div>
        </section>

        <section className="benefit-block benefit-block--lime">
          <span className="benefit-block__num">2</span>
          <div>
            <h3>Project: Live Link</h3>
            <ul className="benefit-points">
              <li>A <strong>live link</strong> for your resume, LinkedIn &amp; portfolio</li>
              <li>Hosted on the <strong>project&apos;s own name</strong> — not a demo link</li>
              <li><strong>Your name &amp; role credited</strong> on the project site itself</li>
              <li>In interviews: open it live, explain a <strong>real product</strong></li>
            </ul>
            <p className="benefit-block__label">Goes offline only if:</p>
            <div className="benefit-minis">
              <span>Hosting / domain not renewed</span>
              <span>Provider maintenance</span>
              <span>Product retired by SXC</span>
              <span>Policy violation</span>
            </div>
          </div>
        </section>

        <section className="benefit-block benefit-block--blue">
          <span className="benefit-block__num">3</span>
          <div>
            <h3>A portfolio website, customised for you</h3>
            <ul className="benefit-points">
              <li><strong>Not a template</strong> — designed as you like: your colours, your style</li>
              <li>On your own name — <strong>yourname.codpox.com</strong></li>
              <li>One link with your <strong>project + certificate + skills</strong></li>
              <li>Recruiters find you before they call you</li>
            </ul>
            <div className="benefit-stats">
              <div className="benefit-stat">
                <strong>FREE</strong>
                <span>full first year</span>
              </div>
              <div className="benefit-stat">
                <strong>₹30/mo</strong>
                <span>after Year 1</span>
              </div>
            </div>

            <figure className="pf-figure">
              <img
                src={portfolioSample}
                alt="Sample customised portfolio website built by SXC"
              />
              <figcaption>Sample — your name, your photo, your project.</figcaption>
            </figure>
            <p className="benefit-tagline">
              You can also <strong>request a fully custom design</strong> from us.
            </p>
          </div>
        </section>

        <section className="benefit-block benefit-block--lime">
          <span className="benefit-block__num">4</span>
          <div>
            <h3>Certificate of Completion</h3>
            <figure className="cert-figure">
              <img
                src={certificateSample}
                alt="Sample SXC Certificate of Project Completion"
              />
              <figcaption>
                Sample — your name, project &amp; role go on yours.
              </figcaption>
            </figure>
            <div className="benefit-minis benefit-minis--rules">
              <span>75% attendance</span>
              <span>7 of 10 meetings</span>
              <span>Real involvement</span>
            </div>
            <p className="benefit-tagline">
              Cannot be bought. <strong>Only earned.</strong>
            </p>
          </div>
        </section>

        <section className="benefit-block benefit-block--blue">
          <span className="benefit-block__num">5</span>
          <div>
            <h3>Everything is captured</h3>
            <ul className="benefit-points">
              <li><strong>Zoom discussions</strong> — recorded</li>
              <li>Decisions &amp; demos — stored in your <strong>Journey Book</strong></li>
              <li>Your work is on record — <strong>your effort is visible to everyone</strong></li>
            </ul>
          </div>
        </section>

        <div className="benefit-grid">
          <article className="benefit-card benefit-card--blue">
            <h3>Team Experience</h3>
            <p>A real team of 4–6. Standups, deadlines, weekly demos.</p>
          </article>

          <article className="benefit-card benefit-card--lime">
            <h3>Role Experience</h3>
            <p>Captain, Builder, Designer, Tester or Presenter — a real role, real responsibility.</p>
          </article>

          <article className="benefit-card benefit-card--blue">
            <h3>Multiple Roles</h3>
            <p>Roles rotate mid-program — one project, many roles.</p>
          </article>

          <article className="benefit-card benefit-card--lime">
            <h3>Network &amp; Connections</h3>
            <p>Build with students from other colleges &amp; states.</p>
          </article>
        </div>

        <section className="stipend-strip">
          <h3>Internships &amp; Stipend — our students first</h3>
          <p>
            Top performers become SXC Lead Interns — paid roles managing new
            teams, <strong>₹4,000–₹15,000/month</strong>. Our students are
            considered first.
          </p>
        </section>

        <section className="benefits-honest">
          <h3>What SXC does not give you</h3>
          <p>
            No job guarantee. No purchased internship letter. No marks — only
            proof you earned.
          </p>
        </section>

        <section className="benefits-cta">
          <h2>
            Your first project is <span>45 days</span> away.
          </h2>
          <div className="benefits-cta__actions">
            <Link className="benefits-btn benefits-btn--primary" to="/join-now">
              Join a Project
            </Link>
            <Link className="benefits-btn benefits-btn--ghost" to="/plans-beyond">
              See Plans &amp; Beyond
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Benefits
