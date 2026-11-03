
import './StudentJourneySection2.css'

import groupDiscussionImage from '../../assets/images/phase-4-group-discussion.webp'
import projectBeginsImage from '../../assets/images/phase-5-project-begins.webp'
import aiUsageImage from '../../assets/images/phase-6-ai-usage.webp'
import projectUpdationImage from '../../assets/images/phase-7-project-updation.webp'

const journeyPhases = [
  {
    number: '04',
    title: 'Group Discussion',
    subtitle: 'Discuss, Understand & Plan Together',
    image: groupDiscussionImage,
    imageAlt: 'Students discussing their project during an online team meeting',
    imagePosition: 'left',
    points: [
      'Meet your assigned project team members.',
      'Discuss the project idea, objectives and requirements.',
      'Understand each team member’s responsibilities and roles.',
      'Plan the project through collaborative group discussions.',
      'Online meetings will be conducted through Google Meet or Zoom.',
    ],
  },
  {
    number: '05',
    title: 'Project Begins',
    subtitle: 'Turn Your Ideas into Real Projects',
    image: projectBeginsImage,
    imageAlt: 'Students collaborating on software project development',
    imagePosition: 'right',
    points: [
      'The 45-day project development program begins.',
      'Team members start working on their assigned responsibilities.',
      'Development progresses according to the project plan.',
      'Teams collaborate to build their actual project.',
      'If any allocation changes are required, the SXC team will handle them.',
    ],
    highlight: {
      label: 'PROJECT DEVELOPMENT PROGRAM',
      value: '45 Days',
    },
  },
  {
    number: '06',
    title: 'AI Usage',
    subtitle: 'Use AI Smartly. Understand Everything You Build.',
    image: aiUsageImage,
    imageAlt: 'Student using an AI coding assistant while programming',
    imagePosition: 'left',
    points: [
      'Students can use AI tools for code generation.',
      'AI can be used for limited design assistance.',
      'Students must independently understand the code they use.',
      'During project reviews, SXC may ask students to explain their code in a meeting.',
      'SXC may also ask students to make changes to the code live.',
    ],
    note: 'AI can assist your development, but you must understand every part of the code you submit.',
  },
  {
    number: '07',
    title: 'Project Updation',
    subtitle: 'Stay Connected. Keep Improving.',
    image: projectUpdationImage,
    imageAlt: 'Project team discussing progress with an SXC member',
    imagePosition: 'right',
    points: [
      'Every five days, the project team meets with an SXC member.',
      'Discuss the current progress of the project.',
      'Share completed work and pending tasks.',
      'Discuss challenges and development blockers.',
      'Receive feedback and update the project accordingly.',
    ],
    highlight: {
      label: 'PROJECT REVIEW CYCLE',
      value: 'Every 5 Days',
    },
  },
]

function StudentJourneySection2() {
  return (
    <section className="journey-section-two" id="project-execution">

      {/* SECTION HEADING */}

      <div className="journey-section-two__heading">

        <span className="journey-section-two__eyebrow">
          THE PROJECT EXECUTION
        </span>

        <h2>
          From Planning to
          <span> Project Progress.</span>
        </h2>

        <p>
          Once the learning phase is complete, students collaborate
          with their teams, start building real projects and
          regularly review their progress with SXC.
        </p>

        <div className="journey-section-two__progress">
          <span>PHASE 04</span>
          <div className="journey-section-two__progress-line" />
          <span>PHASE 07</span>
        </div>

      </div>

      {/* PHASE CARDS */}

      <div className="journey-section-two__phases">

        {journeyPhases.map((phase) => (
          <article
            className={`journey-two-card journey-two-card--${phase.imagePosition}`}
            key={phase.number}
          >

            {/* IMAGE */}

            <div className="journey-two-card__image">
              <img
                src={phase.image}
                alt={phase.imageAlt}
                loading="lazy"
              />

              <span className="journey-two-card__image-label">
                SXC JOURNEY · {phase.number}
              </span>
            </div>

            {/* CONTENT */}

            <div className="journey-two-card__content">

              <span className="journey-two-card__number">
                PHASE {phase.number}
              </span>

              <h3>{phase.title}</h3>

              <h4>{phase.subtitle}</h4>

              <ul>
                {phase.points.map((point, index) => (
                  <li key={index}>
                    <span className="journey-two-card__check">
                      ✓
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* DURATION OR REVIEW CYCLE */}

              {phase.highlight && (
                <div className="journey-two-card__highlight">
                  <div>
                    <span>{phase.highlight.label}</span>
                    <strong>{phase.highlight.value}</strong>
                  </div>

                  <span className="journey-two-card__highlight-icon">
                    ↗
                  </span>
                </div>
              )}

              {/* AI RESPONSIBILITY NOTE */}

              {phase.note && (
                <div className="journey-two-card__note">
                  <strong>IMPORTANT – SXC PRINCIPLE</strong>
                  <p>{phase.note}</p>
                </div>
              )}

            </div>

          </article>
        ))}

      </div>

    </section>
  )
}

export default StudentJourneySection2
