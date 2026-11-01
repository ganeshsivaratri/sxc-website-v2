import { useState } from 'react'
import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectCard from '../components/projects/ProjectCard'
import './Projects.css'

const projects = [
  {
    number: '01',
    name: 'Padharaksha',
    code: 'SXCOD1',
    category: 'B2B FOOTWEAR MARKETPLACE',
    team: 'To be finalized',
    description:
      'A B2B footwear ordering platform connecting retailers with wholesalers and manufacturers.',
    targetUsers: 'Footwear Retailers & Wholesalers',
    highlights: [
      'Bulk Orders',
      'Supplier Network',
      'Price Comparison',
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
  },
]

const padharakshaModules = [
  'Product Discovery',
  'Price Comparison',
  'Supplier Verification',
  'Chat & Negotiation',
  'Bulk Ordering',
  'Sales Dashboard',
  'Inventory Management',
  'Order Tracking',
  'Transportation',
  'Admin Dashboard',
]

const reasons = [
  {
    title: 'Real Industry Problem',
    text: 'Helps footwear retailers discover suppliers, compare prices and source products more easily.',
  },
  {
    title: 'Real Business Users',
    text: 'Designed for retailers, wholesalers, distributors and manufacturers.',
  },
  {
    title: 'Revenue Opportunities',
    text: 'Potential models include supplier subscriptions, premium listings and order commissions.',
  },
  {
    title: 'Scalable Marketplace',
    text: 'Can expand across footwear categories, suppliers and geographical markets.',
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const selected = projects.find(
    (project) => project.code === selectedProject
  )

  return (
    <main className="projects-page">
      {selected ? (
        <section className="project-detail-page">
          <div className="project-detail-container">

            <button
              className="project-detail-back"
              onClick={() => setSelectedProject(null)}
            >
              ← Back to Projects
            </button>

            <div className="project-detail-hero">
              <span>PROJECT {selected.number} / {selected.code}</span>
              <h1>{selected.name}</h1>
              <h2>Retailers Trust.</h2>
              <p>
                A B2B footwear marketplace connecting retailers
                with verified wholesalers and manufacturers.
              </p>
              <span className="project-detail-category">
                {selected.category}
              </span>
            </div>

            <section className="project-detail-section">
              <span className="project-detail-eyebrow">01 / OVERVIEW</span>
              <h2>About the Project</h2>
              <p>
                Padharaksha aims to simplify footwear sourcing.
                Retailers can discover products, compare prices,
                communicate with suppliers and place bulk orders
                through one digital platform.
              </p>
            </section>

            <section className="project-detail-section">
              <span className="project-detail-eyebrow">02 / PURPOSE</span>
              <h2>Why Padharaksha?</h2>

              <div className="project-detail-reasons">
                {reasons.map((reason, index) => (
                  <article key={reason.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="project-detail-section">
              <span className="project-detail-eyebrow">03 / FEATURES</span>
              <h2>Product Modules</h2>
              <div className="project-detail-modules">
                {padharakshaModules.map((module) => (
                  <span key={module}>{module}</span>
                ))}
              </div>
            </section>

            <section className="project-detail-section">
              <span className="project-detail-eyebrow">04 / TEAM</span>
              <h2>Required Members</h2>
              <p>
                Team size and individual roles are yet to be finalized.
              </p>
            </section>

            <section className="project-detail-section">
              <span className="project-detail-eyebrow">05 / TECHNOLOGY</span>
              <h2>Technology Stack</h2>
              <div className="project-detail-modules">
                {selected.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </section>

            <button
              className="project-detail-bottom-back"
              onClick={() => setSelectedProject(null)}
            >
              ← Back to All Projects
            </button>

          </div>
        </section>
      ) : (
        <>
          <ProjectsHero />

          <section className="current-projects" id="current-projects">
            <div className="current-projects__heading">
              <span>IDEAS IN ACTION · SXC</span>
              <h2>Current Projects<span>.</span></h2>
              <p>
                Explore the products we are building to solve
                real-world problems.
              </p>
            </div>

            <div className="current-projects__grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.code}
                  {...project}
                  onClick={() => setSelectedProject(project.code)}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}

export default Projects
