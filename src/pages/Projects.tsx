import { useState } from 'react'
import type { Project } from '../components/projects/CurrentProjects'
import ProjectsHero from '../components/projects/ProjectsHero'
import CurrentProjects from '../components/projects/CurrentProjects'
import FutureProjects from '../components/projects/FutureProjects'
import ProjectDetails, { ProjectLightbox } from '../components/projects/ProjectDetails'

export default function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  if (selectedProject) {
    return (
      <main className="projects-page">
        <ProjectDetails
          project={selectedProject}
          onBack={() => {
            setSelectedProject(null)
            setActiveImage(null)
          }}
          onSelectImage={setActiveImage}
        />

        {activeImage !== null && (
          <ProjectLightbox
            images={selectedProject.images}
            activeImage={activeImage}
            onClose={() => setActiveImage(null)}
            onChange={setActiveImage}
          />
        )}
      </main>
    )
  }

  return (
    <main className="projects-page">
      <ProjectsHero />
      <CurrentProjects onSelectProject={setSelectedProject} />
      <FutureProjects />
    </main>
  )
}
