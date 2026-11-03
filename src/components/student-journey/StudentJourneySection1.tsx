
import './StudentJourneySection1.css'

import joinSXCImage from '../../assets/images/join-sxc.webp'
import projectAllocationImage from '../../assets/images/phase-2-project-allocation.webp'
import learnStackImage from '../../assets/images/phase-3-learn-the-stack.webp'

const journeyPhases = [
  {
    number: '01',
    title: 'Join SXC',
    subtitle: 'Become a Part of the Community',
    image: joinSXCImage,
    imageContain: true,
    imageAlt: 'Student joining the SXC community',
    imagePosition: 'right',
    points: [
      'Visit the SXC website and fill out the joining form.',
      'Give your commitment to the selected project.',
      'Choose the type of project you want to work on.',
      'Join the SXC community group.',
    ],
  },
  {
    number: '02',
    title: 'Project Allocation',
    subtitle: 'Find Your Project and Team',
    image: projectAllocationImage,
    imageContain: false,
    imageAlt: 'SXC members collaborating during project allocation',
    imagePosition: 'left',
    points: [
      'Projects are allocated based on the details provided in the form.',
      'Members are grouped according to their selected roles.',
      'SXC members review and select members for each team.',
      'Every member gets an assigned project and role.',
    ],
  },
  {
    number: '03',
    title: 'Learn the Stack',
    subtitle: 'Prepare Yourself Before Building',
    image: learnStackImage,
    imageContain: false,
    imageAlt: 'Full-stack development technologies',
    imagePosition: 'right',
    points: [
      'Learn the basic technologies required for your project.',
      'Understand the programming languages and frameworks.',
      'Get familiar with development tools and environments.',
      'Understand the project structure and workflow.',
      'Practise the essential concepts for your assigned role.',
    ],
    duration: '3–5 Days',
  },
]

function StudentJourneySection1() {
  return (
    <section className="journey-section" id="student-journey">

      {/* SECTION HEADING */}

      <div className="journey-section__heading">
        <span className="journey-section__eyebrow">
          STUDENT JOURNEY
        </span>

        <h2>
          Our Structured Journey Path
          <span>Every SXC Student Follows.</span>
        </h2>

        <p>
          Every student follows a structured path designed to
          prepare them for teamwork, learning and real project
          development.
        </p>
      </div>

      {/* PHASE CARDS */}

      <div className="journey-section__phases">

        {journeyPhases.map((phase) => (
          <article
            className={`journey-phase journey-phase--${phase.imagePosition}`}
            key={phase.number}
          >

            {/* PHASE CONTENT */}

            <div className="journey-phase__content">

              <span className="journey-phase__number">
                PHASE {phase.number}
              </span>

              <h3>{phase.title}</h3>

              <h4>{phase.subtitle}</h4>

              <ul>
                {phase.points.map((point, index) => (
                  <li key={index}>
                    <span className="journey-phase__check">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {phase.duration && (
                <div className="journey-phase__duration">
                  <span>Allocated Learning Period</span>
                  <strong>{phase.duration}</strong>
                </div>
              )}

            </div>

            {/* PHASE IMAGE */}

            <div className={phase.imageContain ? 'journey-phase__image journey-phase__image--contain' : 'journey-phase__image'}>
              <img
                src={phase.image}
                alt={phase.imageAlt}
                loading="lazy"
              />

              <span className="journey-phase__image-label">
                {phase.title}
              </span>
            </div>

          </article>
        ))}

      </div>

    </section>
  )
}

export default StudentJourneySection1
