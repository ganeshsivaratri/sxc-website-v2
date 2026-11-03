import { Link } from 'react-router-dom'
import './HomeCTA.css'

export default function HomeCTA() {
  return (
    <section className="home-cta">
      <span className="home-cta__eyebrow">READY WHEN YOU ARE</span>

      <h2>
        Your first project is{' '}
        <span className="home-cta__highlight">45 days</span> away.
      </h2>

      <p>
        Join SintraX Creations, build a real project with a team and a
        mentor, and finish with a live link you can show anyone.
      </p>

      <div className="home-cta__actions">
        <Link className="home-cta__btn home-cta__btn--primary" to="/projects">
          Projects <span>→</span>
        </Link>
        <Link className="home-cta__btn home-cta__btn--ghost" to="/plans-beyond">
          See Plans & Beyond
        </Link>
      </div>
    </section>
  )
}
