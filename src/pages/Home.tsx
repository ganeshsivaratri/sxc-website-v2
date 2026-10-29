import { useEffect, useState } from 'react'
import heroCharacter from '../assets/my-heroimg.png'
import './Home.css'

const questions = [
  <>
    Have you used your <mark>skills</mark> to build something?
  </>,
  <>
    Have you built projects that solve <mark>real problems?</mark>
  </>,
  <>
    Can you explain your role in a <mark>real-world project?</mark>
  </>,
  <>
    Have you used your skills to build something <mark>practical?</mark>
  </>,
  <>
    Can you showcase a project in your <mark>portfolio?</mark>
  </>,
]

const questionLabels = [
  'Have you used your skills to build something?',
  'Have you built projects that solve real problems?',
  'Can you explain your role in a real-world project?',
  'Have you used your skills to build something practical?',
  'Can you showcase a project in your portfolio?',
]

function Home() {
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setQuestionIndex((current) => (current + 1) % questions.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <main className="home-page">
      <section className="home-hero" id="home" aria-labelledby="hero-title">
        <p className="home-eyebrow">
          <span className="home-eyebrow__line" aria-hidden="true" />
          YOUR IDEAS. YOUR TEAM. YOUR CREATION.
        </p>

        <h1 className="home-hero__title" id="hero-title">
          <span>BUILD</span>
          <span className="text-lime">SKILLS.</span>
          <span>BUILD</span>
          <span className="text-lime">PROJECTS.</span>
          <span>BUILD YOUR</span>
          <span className="text-lime">FUTURE.</span>
        </h1>

        <div className="home-hero__visual">
          <div className="home-speech" aria-live="polite">
            <span
              className="home-speech__text"
              key={questionIndex}
              aria-label={questionLabels[questionIndex]}
            >
              {questions[questionIndex]}
            </span>
          </div>

          <img
            className="home-hero__character"
            src={heroCharacter}
            alt="Student holding a laptop and pointing upward"
            fetchPriority="high"
          />
        </div>

        <p className="home-hero__description">
          Stop learning only from theory. Work on real projects, collaborate
          with a team, gain practical experience, and build the skills
          employers look for.
        </p>

        <ul className="home-hero__benefits">
          <li>
            <span className="home-benefit-check" aria-hidden="true">✓</span>
            <span>Work on Real Projects</span>
          </li>
          <li>
            <span className="home-benefit-check" aria-hidden="true">✓</span>
            <span>Gain Practical Experience</span>
          </li>
          <li>
            <span className="home-benefit-check" aria-hidden="true">✓</span>
            <span>Build a Portfolio That Stands Out</span>
          </li>
        </ul>

        <div className="home-hero__actions">
          <a className="home-button home-button--primary" href="#projects">
            Explore Projects <span aria-hidden="true">⟶</span>
          </a>

          <a className="home-button home-button--outline" href="#journey">
            Start Your Journey <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="home-hero__tagline">
          <span aria-hidden="true" />
          Learn by building. Grow by creating.
        </p>
      </section>
    </main>
  )
}

export default Home