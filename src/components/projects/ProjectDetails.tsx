import type { Project } from './CurrentProjects'
import './ProjectDetails.css'

type ProjectGalleryProps = {
  images: Project['images']
  onSelectImage: (index: number) => void
}

function ProjectGallery({
  images,
  onSelectImage,
}: ProjectGalleryProps) {
  return (
    <section className="project-detail-section">
      <span className="project-detail-eyebrow">
        02 / PROJECT GALLERY
      </span>

      <h2>Explore the Project</h2>

      <p className="project-gallery-intro">
        Six visual snapshots of the project concept, experience and system.
      </p>

      <div className="project-gallery">
        {images.map((item, index) => (
          <button
            className="project-gallery-card"
            key={item.src}
            onClick={() => onSelectImage(index)}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
            />

            <span className="project-gallery-caption">
              <b>
                {String(index + 1).padStart(2, '0')}
                {' / '}
                {item.title}
              </b>

              <small>{item.caption}</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

type ProjectLightboxProps = {
  images: Project['images']
  activeImage: number
  onClose: () => void
  onChange: (index: number) => void
}

export function ProjectLightbox({
  images,
  activeImage,
  onClose,
  onChange,
}: ProjectLightboxProps) {
  const previousImage = () => {
    onChange((activeImage + images.length - 1) % images.length)
  }

  const nextImage = () => {
    onChange((activeImage + 1) % images.length)
  }

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Project image preview"
      onClick={onClose}
    >
      <button
        className="project-lightbox-close"
        onClick={onClose}
        aria-label="Close image preview"
      >
        ×
      </button>

      <button
        className="project-lightbox-nav project-lightbox-prev"
        onClick={(event) => {
          event.stopPropagation()
          previousImage()
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <img
        src={images[activeImage].src}
        alt={images[activeImage].title}
        onClick={(event) => event.stopPropagation()}
      />

      <button
        className="project-lightbox-nav project-lightbox-next"
        onClick={(event) => {
          event.stopPropagation()
          nextImage()
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <p>{images[activeImage].title}</p>
    </div>
  )
}

type ProjectDetailsProps = {
  project: Project
  onBack: () => void
  onSelectImage: (index: number) => void
}

function ProjectDetails({
  project,
  onBack,
  onSelectImage,
}: ProjectDetailsProps) {
  return (
    <section className="project-detail-page">
      <div className="project-detail-container">
        <button
          className="project-detail-back"
          onClick={onBack}
        >
          ← Back to Projects
        </button>

        <header className="project-detail-hero">
          <div className="project-detail-hero-top">
            <span>
              PROJECT {project.number} / {project.code}
            </span>

            <span className="project-detail-status">
              IN DEVELOPMENT
            </span>
          </div>

          <h1>{project.name}</h1>

          <h2>{project.tagline}</h2>

          <p>{project.description}</p>

          <div className="project-detail-meta">
            <span>
              <b>TEAM</b>
              {project.team}
            </span>

            <span>
              <b>FOR</b>
              {project.targetUsers}
            </span>
          </div>
        </header>

        <section className="project-detail-section">
          <span className="project-detail-eyebrow">
            01 / OVERVIEW
          </span>

          <h2>About the Project</h2>

          <p>{project.overview}</p>
        </section>

        <ProjectGallery
          images={project.images}
          onSelectImage={onSelectImage}
        />

        <section className="project-detail-section">
          <span className="project-detail-eyebrow">
            03 / FEATURES
          </span>

          <h2>Core Modules</h2>

          <div className="project-detail-modules">
            {project.modules.map((module) => (
              <span key={module}>{module}</span>
            ))}
          </div>
        </section>

        <section className="project-detail-section">
          <span className="project-detail-eyebrow">
            04 / STUDENT LEARNING
          </span>

          <h2>What Students Can Learn</h2>

          <div className="project-detail-reasons">
            {project.learning.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>

                <div>
                  <h3>{item}</h3>

                  <p>
                    Practical experience through project planning,
                    implementation and collaboration.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="project-detail-section">
          <span className="project-detail-eyebrow">
            05 / TEAM & TECHNOLOGY
          </span>

          <h2>Team Requirements</h2>

          <p>{project.teamPlan}</p>

          <h3 className="project-detail-subheading">
            Proposed technology stack
          </h3>

          <div className="project-detail-modules">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <p className="project-detail-disclaimer">
            Features and technology choices describe the planned
            scope and may evolve during development.
          </p>
        </section>

        <button
          className="project-detail-bottom-back"
          onClick={onBack}
        >
          ← Back to All Projects
        </button>
      </div>
    </section>
  )
}

export default ProjectDetails
