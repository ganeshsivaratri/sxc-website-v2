
/* =========================================================
   PROJECT CARD COMPONENT
   Displays an individual project preview card
   ========================================================= */

import './ProjectCard.css'


/* =========================================================
   PROJECT CARD PROPS
   Defines the data and callback required by this component
   ========================================================= */

interface ProjectCardProps {
  name: string
  code: string
  category: string
  team: string
  number: string
  description: string
  targetUsers: string
  highlights: string[]
  image: string
  onClick: () => void
}


/* =========================================================
   PROJECT CARD FUNCTION
   Receives project information through props
   ========================================================= */

function ProjectCard({
  name,
  code,
  category,
  team,
  number,
  description,
  targetUsers,
  highlights,
  image,
  onClick,
}: ProjectCardProps) {

  return (
    /* -----------------------------------------------------
       MAIN CARD BUTTON
       Makes the complete card clickable and accessible
       ----------------------------------------------------- */

    <button
      type="button"
      className="project-card"
      onClick={onClick}
      aria-label={`View ${name} project details`}
    >

      {/* =================================================
          PROJECT IMAGE SECTION
          Displays the project preview image and badges
          ================================================= */}

      <div className="project-card__image-wrap">

        {/* Project preview image */}
        <img
          src={image}
          alt={`${name} project preview`}
          loading="lazy"
        />

        {/* Project sequence number */}
        <span className="project-card__number">
          {number}
        </span>

        {/* Project identification code */}
        <span className="project-card__code">
          {code}
        </span>

      </div>


      {/* =================================================
          PROJECT INFORMATION SECTION
          Displays category, title, and description
          ================================================= */}

      <div className="project-card__main">

        {/* Project category */}
        <span className="project-card__category">
          {category}
        </span>

        {/* Project name */}
        <h3>{name}</h3>

        {/* Short project description */}
        <p className="project-card__description">
          {description}
        </p>


        {/* =================================================
            TEAM INFORMATION
            Displays the number or size of the project team
            ================================================= */}

        <p className="project-card__team">
          <span>TEAM</span>
          {team}
        </p>


        {/* =================================================
            TARGET USERS
            Displays the intended audience for the project
            ================================================= */}

        <p className="project-card__users">
          <span>FOR</span>
          {targetUsers}
        </p>


        {/* =================================================
            PROJECT HIGHLIGHTS
            Dynamically renders project feature tags
            ================================================= */}

        <div className="project-card__highlights">

          {highlights.map((item) => (
            <span key={item}>
              {item}
            </span>
          ))}

        </div>


        {/* =================================================
            CARD FOOTER
            Displays the project details navigation indicator
            ================================================= */}

        <div className="project-card__footer">

          <span>
            VIEW PROJECT DETAILS
          </span>

          <span className="project-card__arrow">
            ↗
          </span>

        </div>

      </div>

    </button>
  )
}


/* =========================================================
   EXPORT
   Makes ProjectCard available to other components
   ========================================================= */

export default ProjectCard
