
import './StudentJourneySection3.css'

import phase8Image from '../../assets/images/phase-8-project-review.png'
import phase9Image from '../../assets/images/phase-9-project-deployment.png'
import phase10Image from '../../assets/images/phase-10-students-gains.png'
import phase11Image from '../../assets/images/phase-11-project-journey-archive.png'
import phase12Image from '../../assets/images/phase-12-rejoin-program.png'
import phase13Image from '../../assets/images/phase-13-internship-career.png'

const phases = [
  {
    number: '08',
    title: 'Project Review',
    subtitle: 'Review, Improve & Explain',
    image: phase8Image,
    imageAlt: 'Students reviewing a software project',
    imagePosition: 'left',
    description:
      'Before moving forward, every project goes through a detailed review by the project team leader and an SXC member.',
    points: [
      'Project review by the team leader.',
      'Project review by an SXC member.',
      'Identify errors, bugs, and features that need improvement or updating.',
      'Explain each team member’s role and contribution to the project.',
      'Team members must explain their code and implementation.',
    ],
  },
  {
    number: '09',
    title: 'Project Deployment',
    subtitle: 'Verify Before Going Live',
    image: phase9Image,
    imageAlt: 'Development team preparing a project for deployment',
    imagePosition: 'right',
    description:
      'After the project is completed, the SXC team verifies it. Once verification is complete, the project can be deployed.',
    points: [
      'The SXC team verifies the project before deployment.',
      'The project is deployed after successful verification.',
      'The SXC team reserves the right to host or unhost a project when necessary.',
    ],
    noteTitle: 'Important Note',
    note:
      'SXC may unhost a project if serious errors occur during deployment or in other necessary circumstances.',
  },
  {
    number: '10',
    title: 'Students Gains',
    subtitle: 'Experience That Goes Beyond Learning',
    image: phase10Image,
    imageAlt: 'Students celebrating their project achievements',
    imagePosition: 'left',
    description:
      'Every project gives students an opportunity to gain practical experience, develop professional skills, and understand how real project teams work.',
    points: [
      'Team Experience – Learn to collaborate and communicate with a development team.',
      'Project Building – Experience building a project from an idea to deployment.',
      'Role Experience – Understand responsibilities and gain practical experience in an assigned role.',
      'Technical Skills – Practise programming languages, frameworks, and development tools.',
      'Problem-Solving – Learn to identify errors, debug issues, and implement solutions.',
      'Code Understanding – Improve the ability to read, explain, and maintain code.',
      'Project Portfolio – Add project contributions to your portfolio.',
      'Professional Confidence – Improve communication, teamwork, and presentation skills.',
    ],
  },
  {
    number: '11',
    title: 'Project Journey Archive',
    subtitle: 'Every Project Has a Story',
    image: phase11Image,
    imageAlt: 'Project archive and timeline dashboard',
    imagePosition: 'right',
    description:
      'Every project will have a dedicated project link where its complete journey, progress, meetings, and memories can be saved and revisited.',
    points: [
      'Original project idea and theme.',
      'Complete project details and documentation.',
      'Project members and their assigned roles.',
      'Project link and Git repository.',
      'Zoom meeting recordings.',
      'Project updates and progress timeline.',
      'Project images and team memories.',
    ],
    example:
      'The SXCOD1 project link will contain its project details, team information, development records, and memories in one place.',
  },
  {
    number: '12',
    title: 'Rejoin Program',
    subtitle: 'Your Journey Can Continue',
    image: phase12Image,
    imageAlt: 'Students collaborating again as a project team',
    imagePosition: 'left',
    description:
      'Students who have already participated in SXC can rejoin another project through our Existing Student Rejoin Program.',
    points: [
      'Opportunity to join another project.',
      'Continue learning and contributing.',
      'Work with new teams and explore different roles.',
      'Gain additional project experience through a dedicated Rejoin Plan.',
    ],
    showPlansButton: true,
  },
  {
    number: '13',
    title: 'Internship & Career Opportunities',
    subtitle: 'Take Your Experience Further',
    image: phase13Image,
    imageAlt: 'Young developers celebrating career opportunities',
    imagePosition: 'right',
    description:
      'We aim to provide internship opportunities with Sithend for students who are interested in contributing and working with us.',
    points: [
      'Internship opportunities with Sithend.',
      'Stipend based on the assigned role and responsibilities.',
      'Opportunities are shared through the SXC community.',
      'Interested students can contact us to express their interest.',
    ],
    stipend: '₹4,000 – ₹15,000',
    closing:
      'We would be glad to welcome people who want to contribute, collaborate, and support our journey. If you are interested in working with us, feel free to contact the SXC team.',
  },
]

function StudentJourneySection3() {
  return (
    <section
      className="student-journey-section3"
      id="student-journey-section3"
    >
      <div className="sj3-container">

        {/* Section Heading */}
        <div className="sj3-heading">
          <span className="sj3-eyebrow">STUDENT JOURNEY</span>

          <h2>
            From Project Review to{' '}
            <span>New Opportunities</span>
          </h2>

          <p>
            The final stages of the SXC journey — review your work,
            deploy your project, build experience, and explore what comes next.
          </p>
        </div>

        {/* Phases 8–13 */}
        <div className="sj3-phases">
          {phases.map((phase) => (
            <article
              className={`sj3-phase sj3-image-${phase.imagePosition}`}
              key={phase.number}
            >
              <div className="sj3-image-wrapper">
                <img
                  src={phase.image}
                  alt={phase.imageAlt}
                  className="sj3-phase-image"
                  loading="lazy"
                />

                <span className="sj3-image-number">
                  PHASE {phase.number}
                </span>
              </div>

              <div className="sj3-content">
                <span className="sj3-phase-label">
                  PHASE {phase.number}
                </span>

                <h3>{phase.title}</h3>
                <h4>{phase.subtitle}</h4>

                <p className="sj3-description">
                  {phase.description}
                </p>

                <ul className="sj3-points">
                  {phase.points.map((point, index) => (
                    <li key={index}>
                      <span className="sj3-check">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {phase.note && (
                  <div className="sj3-note">
                    <strong>{phase.noteTitle}</strong>
                    <p>{phase.note}</p>
                  </div>
                )}

                {phase.example && (
                  <div className="sj3-example">
                    <strong>Example: SXCOD1 Project</strong>
                    <p>{phase.example}</p>
                  </div>
                )}

                {phase.stipend && (
                  <div className="sj3-stipend">
                    <span>Internship Stipend</span>
                    <strong>{phase.stipend}</strong>
                    <small>Based on the assigned role</small>
                  </div>
                )}

                {phase.showPlansButton && (
                  <a
                    href="#"
                    className="sj3-plans-button"
                    onClick={(event) => event.preventDefault()}
                    aria-label="Check the Rejoin Plans"
                  >
                    Check Plans
                    <span aria-hidden="true">→</span>
                  </a>
                )}

                {phase.closing && (
                  <div className="sj3-closing">
                    {phase.closing}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Final Closing CTA */}
      <div className="sj3-final-section">
        <div className="sj3-final-content">
          <span className="sj3-final-eyebrow">
            THE JOURNEY CONTINUES
          </span>

          <h2>
            Your Journey{' '}
            <span>Doesn't End Here.</span>
          </h2>

          <p>
            From joining SXC to building real projects, working with a team,
            and gaining practical experience — every step is part of your
            growth.
          </p>

          <p className="sj3-final-message">
            Your next opportunity starts with what you build today.
            Keep learning, keep building, and keep growing with SXC.
          </p>

          <div className="sj3-final-highlights">
            <div className="sj3-highlight">
              <span className="sj3-highlight-icon">01</span>
              <strong>Build More</strong>
              <p>Turn your ideas into projects.</p>
            </div>

            <div className="sj3-highlight">
              <span className="sj3-highlight-icon">02</span>
              <strong>Grow More</strong>
              <p>Improve your skills and experience.</p>
            </div>

            <div className="sj3-highlight">
              <span className="sj3-highlight-icon">03</span>
              <strong>Stay Connected</strong>
              <p>Continue your journey with the SXC community.</p>
            </div>
          </div>

          <div className="sj3-final-actions">
            <a href="/#join" className="sj3-join-button">
              Join SXC
              <span aria-hidden="true">→</span>
            </a>

            <a href="/projects" className="sj3-projects-button">
              Explore Our Projects
            </a>
          </div>
        </div>

        <div className="sj3-final-decoration" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default StudentJourneySection3
