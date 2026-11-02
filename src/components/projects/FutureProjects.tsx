
import './FutureProjects.css'

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
      </div>

      <div className="locked-projects-grid">
        {lockedProjects.map((code) => (
          <article className="locked-project-card" key={code}>
            <span className="locked-project-icon">⌑</span>

            <span className="locked-project-code">{code}</span>

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
