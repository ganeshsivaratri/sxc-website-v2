
import studentImage from '../../assets/images/sxc-student.png'
import './WhatIsSXC.css'

const benefits = [
  {
    number: '01',
    title: 'You actually finish',
    description:
      'Team + deadline + mentor. Courses can be completed alone; real builds get finished together.',
  },
  {
    number: '02',
    title: 'Proof, not just paper',
    description:
      'Live project + portfolio + certificate + your own project journey book.',
  },
  {
    number: '03',
    title: 'No laptop? Start anyway',
    description:
      'Design, testing and documentation roles from Day 1. Coding through cloud tools.',
  },
]

const projectTypes = [
  {
    icon: '⌘',
    title: 'Websites',
    description: 'Build and launch real websites.',
  },
  {
    icon: '▣',
    title: 'Mobile Apps',
    description: 'Turn ideas into working apps.',
  },
  {
    icon: '↗',
    title: 'Live Deployment',
    description: 'Deploy projects people can access.',
  },
]

function WhatIsSXC() {
  return (
    <section className="sxc-about" id="what-is-sxc">
      <div className="sxc-about__container">

        {/* Compact hero */}
        <div className="sxc-about__hero">
          <header className="sxc-about__intro">
            <span className="sxc-about__eyebrow">
              <span className="sxc-about__eyebrow-dot" />
              WHAT IS SXC?
            </span>

            <h2 className="sxc-about__headline">
              NOT A
              <br />
              <span className="sxc-about__crossed">COURSE.</span>
              <br />
              <span className="sxc-about__lime">A 45-DAY</span>
              <br />
              BUILD.
            </h2>
          </header>

          <div className="sxc-about__visual">
            <div className="sxc-about__visual-glow" />

            <img
              src={studentImage}
              alt="Student thinking about ideas while holding a laptop"
              className="sxc-about__student"
            />

            <div className="sxc-about__visual-label">
              <span>HAVE AN IDEA?</span>
              <strong>Let's build it.</strong>
            </div>
          </div>
        </div>

        <p className="sxc-about__description">
          You join a team of 5, build ONE real project with a mentor,
          deploy it live — and walk out with proof you can show anyone.
        </p>

        {/* Project types */}
        <div className="sxc-about__projects">
          <div className="sxc-about__section-heading">
            <span>WHAT WILL YOU BUILD?</span>
            <p>Ideas become real, working projects.</p>
          </div>

          <div className="sxc-about__project-grid">
            {projectTypes.map((project) => (
              <article className="sxc-about__project" key={project.title}>
                <span className="sxc-about__project-icon">
                  {project.icon}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Why SXC */}
        <div className="sxc-about__benefits">
          <h3 className="sxc-about__benefits-title">WHY SXC?</h3>

          <div className="sxc-about__benefit-list">
            {benefits.map((benefit) => (
              <article className="sxc-about__benefit" key={benefit.number}>
                <span className="sxc-about__check">✓</span>

                <div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Promise */}
        <div className="sxc-about__promise">
          <p>
            We don't promise placements.
            <br />
            <strong>
              We promise a finished project you can explain.
            </strong>
          </p>
        </div>

        {/* Buttons */}
        <div className="sxc-about__actions">
          <a
            href="#45-days"
            className="sxc-about__button sxc-about__button--primary"
          >
            See how the 45 days go <span>→</span>
          </a>

          <a
            href="#vision"
            className="sxc-about__button sxc-about__button--secondary"
          >
            Our Vision <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default WhatIsSXC
