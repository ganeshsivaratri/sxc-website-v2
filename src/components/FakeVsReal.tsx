
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
    category: 'Internships',
    subtitle: 'A certificate is not the same as real experience.',
    fake: [
      { title: 'Random WhatsApp group', note: 'Students are added without a proper introduction.' },
      { title: 'Join the Zoom call', note: 'Repeated joining requests, but little clarity about the work.' },
      { title: 'Free internship… but!', note: 'A registration fee suddenly appears.' },
      { title: 'Pay ₹500–₹2,000', note: 'You are asked to pay to participate or receive a certificate.' },
      { title: 'Certificate for everyone', note: 'You may get one without attending or doing the work.' },
      { title: 'No practical skills', note: 'You finish with a certificate, but little you can demonstrate.' },
    ],
    real: [
      { title: 'Clear terms upfront', note: 'The organisation explains the role and any fees before you join.' },
      { title: 'Real work experience', note: 'You work on tasks with a clear purpose.' },
      { title: 'Learn by doing', note: 'You practise skills through assignments and projects.' },
      { title: 'Mentor feedback', note: 'Someone reviews your work and helps you improve.' },
      { title: 'Earn your certificate', note: 'Recognition follows the agreed completion requirements.' },
      { title: 'Skills for your résumé', note: 'You can explain your projects and experience in interviews.' },
    ],
    fakeNote: 'You may get a certificate, but you may not gain the skills.',
    realNote: 'You gain practical skills, project experience and confidence.',
  },
  {
    number: '02',
    category: 'Job Placements',
    subtitle: 'A job promise is not the same as a genuine job.',
    fake: [
      { title: 'Guaranteed job claims', note: 'A job is promised without a proper selection process.' },
      { title: 'Pay to get hired', note: 'You are asked to pay money to secure an offer.' },
      { title: 'Unknown recruiters', note: 'The company or recruiter cannot be verified.' },
      { title: 'Huge salary promises', note: 'Unrealistic packages are advertised without proof.' },
      { title: 'No real interview', note: 'An offer arrives without checking your abilities.' },
      { title: 'Urgent decisions', note: 'You are pressured to accept or pay immediately.' },
    ],
    real: [
      { title: 'Verified employer', note: 'You can independently check the company and recruiter.' },
      { title: 'Clear hiring process', note: 'Interview stages and selection criteria are explained.' },
      { title: 'Defined job role', note: 'Your responsibilities are clear before joining.' },
      { title: 'Written offer', note: 'Salary, location and employment terms are documented.' },
      { title: 'Skills-based selection', note: 'Your abilities are assessed fairly.' },
      { title: 'Time to decide', note: 'You can review the offer and ask questions.' },
    ],
    fakeNote: 'A promised job does not mean a genuine job opportunity.',
    realNote: 'A genuine employer values your skills and follows a clear process.',
  },
  {
    number: '03',
    category: 'Online Courses',
    subtitle: 'A course should teach you something you can actually use.',
    fake: [
      { title: 'Guaranteed success', note: 'Career growth is promised without realistic conditions.' },
      { title: 'Hidden charges', note: 'Extra payments appear after enrolment.' },
      { title: 'Outdated lessons', note: 'Content offers little useful or current knowledge.' },
      { title: 'Certificate-focused', note: 'The certificate matters more than what you learn.' },
      { title: 'No support', note: 'Questions and doubts are left unanswered.' },
      { title: 'No practical work', note: 'You finish without building or practising anything.' },
    ],
    real: [
      { title: 'Clear syllabus', note: 'Topics and learning outcomes are shared upfront.' },
      { title: 'Transparent fees', note: 'Pricing and additional costs are explained.' },
      { title: 'Structured lessons', note: 'You learn step by step, from basics onwards.' },
      { title: 'Hands-on practice', note: 'You apply lessons through real assignments.' },
      { title: 'Guidance and support', note: 'You can ask questions and receive feedback.' },
      { title: 'Usable knowledge', note: 'You can apply what you learn in real projects.' },
    ],
    fakeNote: 'You may complete the course without being able to apply the knowledge.',
    realNote: 'You leave with knowledge and practical work you can demonstrate.',
  },
  {
    number: '04',
    category: 'Freelancing',
    subtitle: 'Real clients value clear terms and work that delivers results.',
    fake: [
      { title: 'Pay to unlock work', note: 'You are charged just to receive a project.' },
      { title: 'Unclear requirements', note: 'Nobody explains exactly what needs to be delivered.' },
      { title: 'Unrealistic earnings', note: 'Huge payments are promised for minimal effort.' },
      { title: 'Endless extra work', note: 'More tasks are added without agreement.' },
      { title: 'Unknown client', note: 'The client or business identity is unclear.' },
      { title: 'Changing payment terms', note: 'Payment is delayed or the agreement keeps changing.' },
    ],
    real: [
      { title: 'Verified client', note: 'You take steps to confirm who you are working with.' },
      { title: 'Clear project scope', note: 'Deliverables, deadlines and revisions are agreed.' },
      { title: 'Written payment terms', note: 'Rates and payment dates are documented.' },
      { title: 'Professional communication', note: 'Expectations and changes are discussed clearly.' },
      { title: 'Fair workload', note: 'Extra work is discussed before you accept it.' },
      { title: 'Real portfolio work', note: 'Completed projects demonstrate your abilities.' },
    ],
    fakeNote: 'You spend time working, but may never receive fair payment or credit.',
    realNote: 'You build client experience, a portfolio and professional confidence.',
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

        <p className="fvr-bottom-note">
          <strong>Remember:</strong> Verify the opportunity, understand the
          terms, and focus on the skills you gain.
        </p>
      </div>
    </section>
  )
}

export default FakeVsReal
