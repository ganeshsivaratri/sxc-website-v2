import { useRef, useState } from 'react'
import './FakeVsReal.css'

type Point = {
  title: string
  note: string
}

type Comparison = {
  number: string
  category: string
  subtitle: string
  fake: Point[]
  real: Point[]
  fakeNote: string
  realNote: string
}

const cards: Comparison[] = [
  {
    number: '01',
    category: 'Projects',
    subtitle: 'Your project is only worth what you can explain.',
    fake: [
      { title: 'Bought ready-made', note: 'Same project in 500 resumes' },
      { title: 'Copied, no clue', note: "Can't explain one page" },
      { title: 'Demo-only build', note: 'Breaks under questions' },
      { title: 'No proof of work', note: 'No GitHub, no journey' },
    ],
    real: [
      { title: 'Built by you', note: 'Your module, your team' },
      { title: 'Frontend + backend', note: 'Explain every line' },
      { title: 'Live and deployed', note: 'A link anyone can open' },
      { title: 'Proof behind it', note: 'Commits + Journey Book' },
    ],
    fakeNote: 'Looks strong. Collapses in the interview.',
    realNote: 'Open it. Show it. Explain it.',
  },
  {
    number: '02',
    category: 'Internships',
    subtitle: 'A certificate is not the same as real experience.',
    fake: [
      { title: 'Random WhatsApp group', note: 'Added with no introduction' },
      { title: 'Free internship... but!', note: 'Fee of ₹500–₹2,000 appears' },
      { title: 'Certificate for all', note: 'No work needed to get one' },
      { title: 'No practical skills', note: 'Nothing you can demonstrate' },
    ],
    real: [
      { title: 'Clear terms upfront', note: 'Role and fees explained first' },
      { title: 'Real work experience', note: 'Tasks with a clear purpose' },
      { title: 'Mentor feedback', note: 'Your work gets reviewed' },
      { title: 'Skills for your resume', note: 'Explain it in interviews' },
    ],
    fakeNote: 'A certificate, but no skills.',
    realNote: 'Skills and confidence you can show.',
  },
  {
    number: '03',
    category: 'Online Courses',
    subtitle: 'A course should teach you something you can actually use.',
    fake: [
      { title: 'Guaranteed success', note: 'Promised with no conditions' },
      { title: 'Hidden charges', note: 'Extra payments after joining' },
      { title: 'Certificate-focused', note: 'Certificate over learning' },
      { title: 'No practical work', note: 'Nothing built, nothing practised' },
    ],
    real: [
      { title: 'Clear syllabus', note: 'Outcomes shared upfront' },
      { title: 'Transparent fees', note: 'All costs explained first' },
      { title: 'Hands-on practice', note: 'Assignments, not just videos' },
      { title: 'Usable knowledge', note: 'Apply it in real projects' },
    ],
    fakeNote: 'Completed, but nothing you can apply.',
    realNote: 'Knowledge you can use in projects.',
  },
  {
    number: '04',
    category: 'Job Placements',
    subtitle: 'A job promise is not the same as a genuine job.',
    fake: [
      { title: 'Guaranteed job claims', note: 'Promised with no selection' },
      { title: 'Pay to get hired', note: 'Money asked to secure offer' },
      { title: 'No real interview', note: 'Offer without any test' },
      { title: 'Urgent decisions', note: 'Pressured to pay immediately' },
    ],
    real: [
      { title: 'Verified employer', note: 'Check the company yourself' },
      { title: 'Clear hiring process', note: 'Stages explained upfront' },
      { title: 'Written offer', note: 'Terms documented in writing' },
      { title: 'Skills-based selection', note: 'Abilities assessed fairly' },
    ],
    fakeNote: 'A promise is not a genuine job.',
    realNote: 'A real process that values skills.',
  },
  {
    number: '05',
    category: 'Freelancing',
    subtitle: 'Real clients value clear terms and work that delivers results.',
    fake: [
      { title: 'Pay to unlock work', note: 'Charged just to get work' },
      { title: 'Unclear requirements', note: 'Deliverables never explained' },
      { title: 'Unrealistic earnings', note: 'Huge pay for minimal effort' },
      { title: 'Payment terms change', note: 'Payment delayed, terms shift' },
    ],
    real: [
      { title: 'Verified client', note: 'Confirm who you work for' },
      { title: 'Clear project scope', note: 'Deadlines and revisions agreed' },
      { title: 'Written payment terms', note: 'Rates and dates documented' },
      { title: 'Real portfolio work', note: 'Projects that prove ability' },
    ],
    fakeNote: 'Work done, payment unsure.',
    realNote: 'Experience, portfolio, confidence.',
  },
]

function FakeVsReal() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)

  const scrollToCard = (index: number) => {
    const track = scrollRef.current
    if (!track) return

    const nextIndex = Math.max(0, Math.min(index, cards.length - 1))
    const target = track.children[nextIndex] as HTMLElement | undefined

    if (target) {
      track.scrollTo({
        left: target.offsetLeft - track.offsetLeft,
        behavior: 'smooth',
      })
    }

    setActiveCard(nextIndex)
  }

  const handleScroll = () => {
    const track = scrollRef.current
    if (!track) return

    const trackLeft = track.getBoundingClientRect().left
    let closestIndex = 0
    let closestDistance = Infinity

    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs(
        (child as HTMLElement).getBoundingClientRect().left - trackLeft,
      )

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveCard(closestIndex)
  }

  return (
    <section className="fvr-section" id="fake-vs-real">
      <div className="fvr-container">
        <header className="fvr-heading">
          <span className="fvr-eyebrow">MAKE INFORMED DECISIONS</span>
          <h2>
            Fake <span>Vs</span> Real
          </h2>
          <p>Spot the difference. Make better choices.</p>
          <div className="fvr-heading-line" />
        </header>

        <div className="fvr-carousel">
          <div
            className="fvr-track"
            ref={scrollRef}
            onScroll={handleScroll}
            aria-label="Swipe through Fake versus Real comparisons"
          >
            {cards.map((card) => (
              <article className="fvr-card" key={card.number}>
                <div className="fvr-card-heading">
                  <span className="fvr-card-number">{card.number}</span>
                  <div className="fvr-card-title">
                    <h3>{card.category}</h3>
                    <p>{card.subtitle}</p>
                  </div>
                </div>

                <div className="fvr-comparison">
                  <section className="fvr-panel fvr-panel--fake">
                    <div className="fvr-panel-heading">
                      <span className="fvr-status-icon" aria-hidden="true">×</span>
                      <div>
                        <span className="fvr-panel-label">WATCH OUT</span>
                        <h4>Fake</h4>
                      </div>
                    </div>

                    <ol className="fvr-points">
                      {card.fake.map((point, index) => (
                        <li key={point.title}>
                          <span className="fvr-point-number">{index + 1}</span>
                          <div className="fvr-point-copy">
                            <h5>{point.title}</h5>
                            <p>{point.note}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="fvr-panel-note fvr-panel-note--fake">
                      <strong>!</strong>
                      <p>{card.fakeNote}</p>
                    </div>
                  </section>

                  <span className="fvr-vs-badge" aria-hidden="true">VS</span>

                  <section className="fvr-panel fvr-panel--real">
                    <div className="fvr-panel-heading">
                      <span className="fvr-status-icon" aria-hidden="true">✓</span>
                      <div>
                        <span className="fvr-panel-label">LOOK FOR THIS</span>
                        <h4>Real</h4>
                      </div>
                    </div>

                    <ol className="fvr-points">
                      {card.real.map((point, index) => (
                        <li key={point.title}>
                          <span className="fvr-point-number">{index + 1}</span>
                          <div className="fvr-point-copy">
                            <h5>{point.title}</h5>
                            <p>{point.note}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="fvr-panel-note fvr-panel-note--real">
                      <strong>✓</strong>
                      <p>{card.realNote}</p>
                    </div>
                  </section>
                </div>

                <p className="fvr-card-footer">
                  <span>THE REAL DIFFERENCE</span>
                  Focus on what you learn and what you can actually do.
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="fvr-swipe-hint">
          <span>←</span> SWIPE TO EXPLORE <span>→</span>
        </div>

        <nav className="fvr-pagination" aria-label="Choose comparison">
          {cards.map((card, index) => (
            <button
              key={card.number}
              type="button"
              className={`fvr-dot${activeCard === index ? ' is-active' : ''}`}
              aria-label={`Show ${card.category}`}
              aria-current={activeCard === index ? 'true' : undefined}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </nav>

        <div className="fvr-punch">
          <p>
            Interviewers don&apos;t ask for your file.
            They ask you to <span>explain it.</span>
          </p>
          <a className="fvr-journey-link" href="/student-journey">
            See how a real journey looks →
          </a>
        </div>

        <p className="fvr-bottom-note">
          <strong>Remember:</strong> Verify the opportunity, understand the
          terms, and focus on the skills you gain.
        </p>
      </div>
    </section>
  )
}

export default FakeVsReal
