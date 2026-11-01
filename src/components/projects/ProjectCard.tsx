import './ProjectCard.css'

interface ProjectCardProps {
  name: string
  code: string
  category: string
  team: string
  technologies: string[]
  number: string
  description: string
  targetUsers: string
  highlights: string[]
  onClick: () => void
}

function ProjectCard({
  name,
  code,
  category,
  team,
  technologies,
  number,
  description,
  targetUsers,
  highlights,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={onClick}
    >
      <div className="project-card__top">
        <span className="project-card__number">{number}</span>
        <span className="project-card__code">{code}</span>
      </div>

      <div className="project-card__main">
        <span className="project-card__category">{category}</span>

        <h3>{name}</h3>

        <p className="project-card__description">
          {description}
        </p>

        <p className="project-card__team">
          <span>TEAM</span> {team}
        </p>

        <p className="project-card__users">
          <span>FOR</span> {targetUsers}
        </p>
      </div>

      <div className="project-card__highlights">
        {highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-card__technologies">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-card__footer">
        <span>VIEW PROJECT DETAILS</span>
        <span className="project-card__arrow">↗</span>
      </div>
    </button>
  )
}

export default ProjectCard
