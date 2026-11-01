
/* =========================================================
   PROJECTS PAGE
   Main page for current and upcoming SXC projects
   ========================================================= */


/* =========================================================
   IMPORTS
   React hooks, project components, and page styles
   ========================================================= */

import { useState } from 'react'

import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectCard from '../components/projects/ProjectCard'

import './Projects.css'


/* =========================================================
   PROJECT IMAGE TYPE
   Defines the structure of each project gallery image
   ========================================================= */

type ProjectImage = {
  src: string
  title: string
  caption: string
}


/* =========================================================
   PROJECT DATA TYPE
   Defines all information required for a project
   ========================================================= */

type Project = {
  number: string
  name: string
  code: string
  category: string
  team: string
  description: string
  targetUsers: string
  highlights: string[]
  technologies: string[]
  tagline: string
  overview: string
  modules: string[]
  learning: string[]
  teamPlan: string
  images: ProjectImage[]
}


/* =========================================================
   PROJECT IMAGE IMPORT SYSTEM
   Automatically loads PNG images from project folders
   ========================================================= */

const projectImageFiles = import.meta.glob(
  '../assets/images/projects/**/*.png',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>


/* =========================================================
   IMAGE PATH RESOLVER
   Returns the correct image URL or throws an error
   if the requested image does not exist
   ========================================================= */

const image = (file: string): string => {
  const key = `../assets/images/projects/${file}`
  const url = projectImageFiles[key]

  if (!url) {
    throw new Error(`Missing project image: ${file}`)
  }

  return url
}


/* =========================================================
   PROJECT DATABASE
   Contains all current SXC project information
   ========================================================= */

const projects: Project[] = [

  /* -------------------------------------------------------
     PROJECT 01 - PADHARAKSHA
     B2B Footwear Marketplace
     ------------------------------------------------------- */

  {
    number: '01',
    code: 'SXCOD1',
    name: 'Padharaksha',

    category: 'B2B FOOTWEAR MARKETPLACE',
    team: '10 students',

    description:
      'A B2B footwear ecosystem connecting retailers with suppliers for product discovery, bulk ordering and business operations.',

    targetUsers: 'Retailers, wholesalers & manufacturers',

    highlights: [
      'Bulk Orders',
      'Supplier Network',
      'Inventory',
    ],

    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
    ],

    tagline: 'Retailers Trust.',

    overview:
      'Padharaksha is planned as a connected B2B footwear ecosystem. Retailers can discover suppliers, compare wholesale products, negotiate and place bulk orders. Connected inventory and web dashboard tools support supplier and business operations.',

    modules: [
      'B2B Marketplace App',
      'Product Catalogue & Variants',
      'Supplier Discovery & Verification',
      'Wholesale Price Comparison',
      'Chat & Negotiation',
      'Bulk Ordering',
      'Order Tracking',
      'Stock & Inventory Management',
      'Admin Dashboard',
      'Business Analytics',
    ],

    learning: [
      'Cross-platform mobile development',
      'Role-based workflows and authentication',
      'Database design and API integration',
      'Inventory and order lifecycle modelling',
      'Testing and team-based delivery',
    ],

    teamPlan:
      '10 students across mobile app, inventory, dashboard, backend, UI/UX and QA responsibilities.',

    images: [
      {
        src: image('sxcod1/image-1-main-app.png'),
        title: 'Main B2B Marketplace',
        caption: 'Retailer and supplier marketplace experience.',
      },
      {
        src: image('sxcod1/image-2-bulk-ordering.png'),
        title: 'Product Details & Bulk Ordering',
        caption: 'Product variants, wholesale details and bulk order flow.',
      },
      {
        src: image('sxcod1/image-3-negotiation.png'),
        title: 'Negotiation & Deal Management',
        caption: 'Communication and negotiation between business users.',
      },
      {
        src: image('sxcod1/image-4-admin-dashboard.png'),
        title: 'Admin Dashboard',
        caption: 'Platform administration and operational monitoring.',
      },
      {
        src: image('sxcod1/image-5-business-analytics.png'),
        title: 'Business Analytics',
        caption: 'Business performance and reporting overview.',
      },
      {
        src: image('sxcod1/image-6-system-architecture.png'),
        title: 'System Architecture',
        caption: 'Connected marketplace, inventory and dashboard ecosystem.',
      },
    ],
  },


  /* -------------------------------------------------------
     PROJECT 02 - LOCORIDE
     Bike Taxi Booking Platform
     ------------------------------------------------------- */

  {
    number: '02',
    code: 'SXCOD2',
    name: 'LocoRide',

    category: 'BIKE TAXI BOOKING PLATFORM',
    team: '5 students',

    description:
      'A bike-taxi booking platform connecting passengers with nearby captains for convenient urban rides.',

    targetUsers: 'Passengers & bike-taxi captains',

    highlights: [
      'Ride Booking',
      'Live Tracking',
      'Captain Earnings',
    ],

    technologies: [
      'React Native',
      'TypeScript',
      'Maps API',
      'Backend APIs',
      'Database',
    ],

    tagline: 'Your Ride. Your Route.',

    overview:
      'LocoRide is a proposed bike-taxi platform with passenger and captain experiences. The planned system covers ride requests, captain acceptance, trip tracking, payments and operational administration.',

    modules: [
      'Passenger App',
      'Captain App',
      'Ride Request & Acceptance',
      'Live Ride Tracking',
      'Navigation',
      'Fare & Payment Flow',
      'Captain Earnings',
      'Withdrawals',
      'Admin Dashboard',
      'Ride & User Management',
    ],

    learning: [
      'Mobile application development',
      'Maps and location-based services',
      'Real-time ride state management',
      'Payment and transaction workflows',
      'Role-based app design and testing',
    ],

    teamPlan:
      '5 students across passenger app, captain app, backend/integrations and testing.',

    images: [
      {
        src: image('sxcod2/image-1-passenger-app.png'),
        title: 'Passenger App',
        caption: 'Passenger ride discovery and booking experience.',
      },
      {
        src: image('sxcod2/image-2-captain-app.png'),
        title: 'Captain App',
        caption: 'Captain availability and ride request experience.',
      },
      {
        src: image('sxcod2/image-3-live-tracking.png'),
        title: 'Live Ride Tracking',
        caption: 'Trip progress and location tracking.',
      },
      {
        src: image('sxcod2/image-4-admindashboard.png'),
        title: 'Admin Dashboard',
        caption: 'Ride operations and platform administration.',
      },
      {
        src: image('sxcod2/image-5-captain-earnings.png'),
        title: 'Captain Earnings',
        caption: 'Earnings and trip performance overview.',
      },
      {
        src: image('sxcod2/image-6-payments-withdrawals.png'),
        title: 'Payments & Withdrawals',
        caption: 'Payment and withdrawal workflows.',
      },
    ],
  },


  /* -------------------------------------------------------
     PROJECT 03 - LINKER
     Digital Rewards & URL Shortener
     ------------------------------------------------------- */

  {
    number: '03',
    code: 'SXCOD3',
    name: 'Linker',

    category: 'DIGITAL REWARDS & URL SHORTENER',
    team: '8 students',

    description:
      'A dual-platform concept combining task-based rewards with a URL-shortening and link analytics service.',

    targetUsers: 'Mobile users, link creators & administrators',

    highlights: [
      'Task Rewards',
      'URL Shortener',
      'Wallet',
    ],

    technologies: [
      'Mobile App',
      'Web App',
      'Backend APIs',
      'Database',
      'Analytics',
    ],

    tagline: 'Connect. Share. Earn.',

    overview:
      'Linker brings together a mobile rewards experience and a web URL-shortening service. The proposed scope includes task verification, rewards and withdrawal workflows alongside short-link creation, redirects and click analytics.',

    modules: [
      'Mobile Registration & Profiles',
      'Task-Based Earning',
      'Watch & Earn',
      'Reward Wallet',
      'Transaction History',
      'Withdrawal Requests',
      'Referrals & Notifications',
      'URL Shortening',
      'Redirect & Click Tracking',
      'Admin Workflows',
    ],

    learning: [
      'Mobile and web full-stack development',
      'URL generation and redirect handling',
      'Wallet and transaction modelling',
      'Analytics and admin tooling',
      'Validation, security and abuse prevention',
    ],

    teamPlan:
      '8 students across mobile, URL web app, backend, admin dashboards, integration and QA.',

    images: [
      {
        src: image('sxcod3/image-1-linker-mobile-app.png'),
        title: 'Linker Mobile App',
        caption: 'Mobile rewards dashboard and user experience.',
      },
      {
        src: image('sxcod3/image-2-task-earning.png'),
        title: 'Task-Based Earning',
        caption: 'Tasks and reward earning experience.',
      },
      {
        src: image('sxcod3/image-3-wallet-withdrawals.png'),
        title: 'Wallet & Withdrawals',
        caption: 'Wallet balance, transactions and withdrawal flow.',
      },
      {
        src: image('sxcod3/image-4-url-shortener.png'),
        title: 'URL Shortener',
        caption: 'Create and manage short links.',
      },
      {
        src: image('sxcod3/image-5-admin-dashboard.png'),
        title: 'Admin Dashboard',
        caption: 'Link and platform administration.',
      },
      {
        src: image('sxcod3/image-6-systemarchitecture.png'),
        title: 'System Architecture',
        caption: 'High-level view of the connected systems.',
      },
    ],
  },


  /* -------------------------------------------------------
     PROJECT 04 - CUSTOMISABLE DASHBOARD SYSTEM
     Universal Dashboard Builder
     ------------------------------------------------------- */

  {
    number: '04',
    code: 'SXCOD4',
    name: 'Customisable Dashboard System',

    category: 'UNIVERSAL DASHBOARD BUILDER',
    team: '8 students',

    description:
      'A web-based platform to create personalised dashboards using templates, widgets and connected data sources.',

    targetUsers: 'Individuals, teams & organisations',

    highlights: [
      'Drag & Drop',
      'Custom Widgets',
      'Integrations',
    ],

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'WebSockets',
    ],

    tagline: 'Your Data. Your Dashboard.',

    overview:
      'The Customisable Dashboard System is planned as a web-first dashboard builder. Users can start from templates, arrange widgets, connect data sources and share dashboards privately or with teams.',

    modules: [
      'Dashboard Workspace',
      'Template Library',
      'Drag-and-Drop Builder',
      'Widget Library',
      'Custom Widget Builder',
      'API & Database Integrations',
      'Theme Customisation',
      'Sharing & Permissions',
      'Export & Reports',
      'Workspace Management',
    ],

    learning: [
      'Complex frontend state management',
      'Drag-and-drop interactions',
      'API and database integrations',
      'Charts and data visualisation',
      'Access control and collaborative workflows',
    ],

    teamPlan:
      '8 students across frontend, backend, integrations, UI/UX, testing and deployment.',

    images: [
      {
        src: image('sxcod4/image-1-dashboard-builder.png'),
        title: 'Dashboard Builder',
        caption: 'Main workspace for creating dashboards.',
      },
      {
        src: image('sxcod4/image-2-drag-drop-editor.png'),
        title: 'Drag & Drop Editor',
        caption: 'Arrange and resize dashboard components.',
      },
      {
        src: image('sxcod4/image-3-theme-customisation.png'),
        title: 'Theme Customisation',
        caption: 'Personalise dashboard appearance.',
      },
      {
        src: image('sxcod4/image-4-data-integrations.png'),
        title: 'Data Integrations',
        caption: 'Connect APIs and external data sources.',
      },
      {
        src: image('sxcod4/image-5-user-access-control.png'),
        title: 'User Access Control',
        caption: 'Manage users, teams and permissions.',
      },
      {
        src: image('sxcod4/image-6-deploy-and-share.png'),
        title: 'Deploy & Share',
        caption: 'Publish and share dashboards.',
      },
    ],
  },


  /* -------------------------------------------------------
     PROJECT 05 - COLLEGE MEMORIES
     College Memories Platform
     ------------------------------------------------------- */

  {
    number: '05',
    code: 'SXCOD5',
    name: 'College Memories',

    category: 'COLLEGE MEMORIES PLATFORM',
    team: '3 students + 1 SXC member',

    description:
      'A student-focused platform to capture, organise, share and relive memorable moments from college life.',

    targetUsers: 'College students across UG & PG',

    highlights: [
      'Memories Gallery',
      'Friends & Batches',
      'College Timeline',
    ],

    technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Cloudinary',
    ],

    tagline: 'College Days Fade. Memories Stay.',

    overview:
      'College Memories is centred on preserving the experiences that make college life meaningful. Students can collect photos and videos, organise memories into albums and timelines, and revisit moments connected to friends, batches, events and campus life. The initial reach target is 2,000 students.',

    modules: [
      'Student Profiles',
      'Photo & Video Memories Gallery',
      'Albums & Collections',
      'Friends & Batch Spaces',
      'College & Year Timeline',
      'Events & Highlights',
      'Favourite Moments',
      'Community Sharing',
      'Media Storage',
      'Administration & Moderation',
    ],

    learning: [
      'Responsive web application development',
      'Media upload and cloud storage workflows',
      'User profiles and community features',
      'Data modelling for albums, batches and timelines',
      'Privacy, permissions and content moderation',
    ],

    teamPlan:
      '3 students and 1 SXC member. The initial community reach target is 2,000 students; this is a target, not a current user count.',

    images: [
      {
        src: image('sxcod5/image-1-college-memories-vision.png'),
        title: 'College Memories Vision',
        caption: 'The platform concept and student memories experience.',
      },
      {
        src: image('sxcod5/image-2-frontend-experience.png'),
        title: 'Frontend Experience',
        caption: 'Responsive interface direction.',
      },
      {
        src: image('sxcod5/image-3-backend-engineering.png'),
        title: 'Backend Engineering',
        caption: 'Backend services, APIs and data architecture concept.',
      },
      {
        src: image('sxcod5/image-4-target-audience.png'),
        title: 'Target Audience',
        caption: 'Initial reach target of 2,000 college students.',
      },
      {
        src: image('sxcod5/image-5-technology-stack.png'),
        title: 'Technology Stack',
        caption: 'Proposed technologies for the platform.',
      },
      {
        src: image('sxcod5/image-6-team-community.png'),
        title: 'Team & Community',
        caption: 'Student-led collaboration and community vision.',
      },
    ],
  },
]


/* =========================================================
   LOCKED PROJECTS
   Project codes reserved for future announcements
   ========================================================= */

const lockedProjects = [
  'SXCOD6',
  'SXCOD7',
  'SXCOD8',
]


/* =========================================================
   PROJECTS PAGE COMPONENT
   Manages project listing, detail view, and image gallery
   ========================================================= */

function Projects() {

  /* -------------------------------------------------------
     COMPONENT STATE
     selectedProject: currently opened project
     activeImage: currently selected lightbox image index
     ------------------------------------------------------- */

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  const [activeImage, setActiveImage] =
    useState<number | null>(null)


  /* =======================================================
     PROJECT DETAIL VIEW
     Rendered when a user selects a project card
     ======================================================= */

  if (selectedProject) {

    const project = selectedProject

    return (
      <main className="projects-page">

        {/* ===============================================
            PROJECT DETAIL PAGE CONTAINER
            =============================================== */}

        <section className="project-detail-page">

          <div className="project-detail-container">


            {/* ===========================================
                BACK TO PROJECTS BUTTON
                =========================================== */}

            <button
              className="project-detail-back"
              onClick={() => {
                setSelectedProject(null)
                setActiveImage(null)
              }}
            >
              ← Back to Projects
            </button>


            {/* ===========================================
                PROJECT HERO SECTION
                Project title, tagline, status and metadata
                =========================================== */}

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


              {/* Project team and target audience */}

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


            {/* ===========================================
                SECTION 01 - PROJECT OVERVIEW
                =========================================== */}

            <section className="project-detail-section">

              <span className="project-detail-eyebrow">
                01 / OVERVIEW
              </span>

              <h2>About the Project</h2>

              <p>{project.overview}</p>

            </section>


            {/* ===========================================
                SECTION 02 - PROJECT IMAGE GALLERY
                Six visual snapshots of the selected project
                =========================================== */}

            <section className="project-detail-section">

              <span className="project-detail-eyebrow">
                02 / PROJECT GALLERY
              </span>

              <h2>Explore the Project</h2>

              <p className="project-gallery-intro">
                Six visual snapshots of the project concept, experience and system.
              </p>


              {/* Project gallery grid */}

              <div className="project-gallery">

                {project.images.map((item, index) => (

                  <button
                    className="project-gallery-card"
                    key={item.src}
                    onClick={() => setActiveImage(index)}
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


            {/* ===========================================
                SECTION 03 - PROJECT FEATURES
                Displays the project's core modules
                =========================================== */}

            <section className="project-detail-section">

              <span className="project-detail-eyebrow">
                03 / FEATURES
              </span>

              <h2>Core Modules</h2>


              {/* Dynamic project module tags */}

              <div className="project-detail-modules">

                {project.modules.map((module) => (

                  <span key={module}>
                    {module}
                  </span>

                ))}

              </div>

            </section>


            {/* ===========================================
                SECTION 04 - STUDENT LEARNING
                Skills and practical learning opportunities
                =========================================== */}

            <section className="project-detail-section">

              <span className="project-detail-eyebrow">
                04 / STUDENT LEARNING
              </span>

              <h2>What Students Can Learn</h2>


              {/* Learning outcomes grid */}

              <div className="project-detail-reasons">

                {project.learning.map((item, index) => (

                  <article key={item}>

                    <span>
                      0{index + 1}
                    </span>

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


            {/* ===========================================
                SECTION 05 - TEAM AND TECHNOLOGY
                Team requirements and proposed tech stack
                =========================================== */}

            <section className="project-detail-section">

              <span className="project-detail-eyebrow">
                05 / TEAM & TECHNOLOGY
              </span>

              <h2>Team Requirements</h2>

              <p>{project.teamPlan}</p>


              {/* Proposed technology stack */}

              <h3 className="project-detail-subheading">
                Proposed technology stack
              </h3>

              <div className="project-detail-modules">

                {project.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>


              {/* Project development disclaimer */}

              <p className="project-detail-disclaimer">
                Features and technology choices describe the planned
                scope and may evolve during development.
              </p>

            </section>


            {/* ===========================================
                BOTTOM NAVIGATION
                Return to the complete project listing
                =========================================== */}

            <button
              className="project-detail-bottom-back"
              onClick={() => setSelectedProject(null)}
            >
              ← Back to All Projects
            </button>

          </div>

        </section>


        {/* =================================================
            IMAGE LIGHTBOX
            Opens when a project gallery image is selected
            ================================================= */}

        {activeImage !== null && (

          <div
            className="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Project image preview"
            onClick={() => setActiveImage(null)}
          >

            {/* Close lightbox */}

            <button
              className="project-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>


            {/* Previous image navigation */}

            <button
              className="project-lightbox-nav project-lightbox-prev"
              onClick={(event) => {
                event.stopPropagation()

                setActiveImage(
                  (activeImage + project.images.length - 1) %
                  project.images.length
                )
              }}
              aria-label="Previous image"
            >
              ‹
            </button>


            {/* Currently selected image */}

            <img
              src={project.images[activeImage].src}
              alt={project.images[activeImage].title}
              onClick={(event) => event.stopPropagation()}
            />


            {/* Next image navigation */}

            <button
              className="project-lightbox-nav project-lightbox-next"
              onClick={(event) => {
                event.stopPropagation()

                setActiveImage(
                  (activeImage + 1) % project.images.length
                )
              }}
              aria-label="Next image"
            >
              ›
            </button>


            {/* Image title */}

            <p>
              {project.images[activeImage].title}
            </p>

          </div>

        )}

      </main>
    )
  }


  /* =======================================================
     PROJECT LISTING VIEW
     Displayed when no project is selected
     ======================================================= */

  return (
    <main className="projects-page">


      {/* ===============================================
          PROJECTS HERO
          Existing hero, audio player and goals section
          =============================================== */}

      <ProjectsHero />


      {/* ===============================================
          CURRENT PROJECTS SECTION
          Displays all five active project cards
          =============================================== */}

      <section
        className="current-projects"
        id="current-projects"
      >

        {/* Current projects heading */}

        <div className="current-projects__heading">

          <span>
            IDEAS IN ACTION · SXC
          </span>

          <h2>
            Current Projects<span>.</span>
          </h2>

          <p>
            Explore the products we are building to solve real-world problems.
          </p>

        </div>


        {/* Current projects card grid */}

        <div className="current-projects__grid">

          {projects.map((project) => (

            <ProjectCard
              key={project.code}

              number={project.number}
              code={project.code}
              name={project.name}
              category={project.category}
              team={project.team}
              description={project.description}
              targetUsers={project.targetUsers}
              highlights={project.highlights}

              image={project.images[0].src}

              onClick={() => setSelectedProject(project)}
            />

          ))}

        </div>

      </section>


      {/* ===============================================
          FUTURE PROJECTS SECTION
          SXCOD6, SXCOD7 and SXCOD8 placeholders
          =============================================== */}

      <section className="locked-projects-section">

        {/* Future projects heading */}

        <div className="locked-projects-heading">

          <span>
            MORE IDEAS ARE ON THE WAY
          </span>

          <h2>
            Future Projects<span>.</span>
          </h2>

          <p>
            These project spaces will be revealed when their concepts are ready.
          </p>

        </div>


        {/* Future projects card grid */}

        <div className="locked-projects-grid">

          {lockedProjects.map((code) => (

            <article
              className="locked-project-card"
              key={code}
            >

              <span className="locked-project-icon">
                ⌑
              </span>

              <span className="locked-project-code">
                {code}
              </span>

              <h3>Coming Soon</h3>

              <p>
                Project details will be announced later.
              </p>

              <span className="locked-project-label">
                COMING SOON
              </span>

            </article>

          ))}

        </div>

      </section>

    </main>
  )
}


/* =========================================================
   EXPORT
   Makes the Projects page available to the application
   ========================================================= */

export default Projects
