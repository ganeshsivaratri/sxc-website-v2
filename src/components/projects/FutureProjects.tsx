import './FutureProjects.css'

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

const lockedProjects = [
  'SXCOD6',
  'SXCOD7',
  'SXCOD8',
]

function FutureProjects() {
  return (
    <section className="locked-projects-section">
      <div className="locked-projects-heading">
        <span>MORE IDEAS ARE ON THE WAY</span>

        <h2>
          Future Projects<span>.</span>
        </h2>

        <p>
          These project spaces will be revealed when their concepts are ready.
        </p>

        <p className="locked-projects-note">
          When the 5 projects above are filled, we unlock the remaining projects.
        </p>
      </div>

      <div className="locked-projects-grid">
        {lockedProjects.map((code) => (
          <article className="locked-project-card" key={code}>
            <span className="locked-project-code">{code}</span>

            <span className="locked-project-icon">
              <LockIcon />
            </span>

            <h3>Coming Soon</h3>

            <p>Project details will be announced later.</p>

            <span className="locked-project-label">COMING SOON</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FutureProjects
