
import './CurrentProjects.css'

/*
=========================================================
SXC PROJECT DATABASE
Project types, image resolver and project records
=========================================================
*/

export type ProjectImage = {
  src: string
  title: string
  caption: string
}


/* =========================================================
   PROJECT DATA TYPE
   Defines all information required for a project
   ========================================================= */

export type Project = {
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
  '../../assets/images/projects/**/*.webp',
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
  const key = `../../assets/images/projects/${file}`
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

export const projects: Project[] = [

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
        src: image('sxcod1/image-1-main-app.webp'),
        title: 'Main B2B Marketplace',
        caption: 'Retailer and supplier marketplace experience.',
      },
      {
        src: image('sxcod1/image-2-bulk-ordering.webp'),
        title: 'Product Details & Bulk Ordering',
        caption: 'Product variants, wholesale details and bulk order flow.',
      },
      {
        src: image('sxcod1/image-3-negotiation.webp'),
        title: 'Negotiation & Deal Management',
        caption: 'Communication and negotiation between business users.',
      },
      {
        src: image('sxcod1/image-4-admin-dashboard.webp'),
        title: 'Admin Dashboard',
        caption: 'Platform administration and operational monitoring.',
      },
      {
        src: image('sxcod1/image-5-business-analytics.webp'),
        title: 'Business Analytics',
        caption: 'Business performance and reporting overview.',
      },
      {
        src: image('sxcod1/image-6-system-architecture.webp'),
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
        src: image('sxcod2/image-1-passenger-app.webp'),
        title: 'Passenger App',
        caption: 'Passenger ride discovery and booking experience.',
      },
      {
        src: image('sxcod2/image-2-captain-app.webp'),
        title: 'Captain App',
        caption: 'Captain availability and ride request experience.',
      },
      {
        src: image('sxcod2/image-3-live-tracking.webp'),
        title: 'Live Ride Tracking',
        caption: 'Trip progress and location tracking.',
      },
      {
        src: image('sxcod2/image-4-admindashboard.webp'),
        title: 'Admin Dashboard',
        caption: 'Ride operations and platform administration.',
      },
      {
        src: image('sxcod2/image-5-captain-earnings.webp'),
        title: 'Captain Earnings',
        caption: 'Earnings and trip performance overview.',
      },
      {
        src: image('sxcod2/image-6-payments-withdrawals.webp'),
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
        src: image('sxcod3/image-1-linker-mobile-app.webp'),
        title: 'Linker Mobile App',
        caption: 'Mobile rewards dashboard and user experience.',
      },
      {
        src: image('sxcod3/image-2-task-earning.webp'),
        title: 'Task-Based Earning',
        caption: 'Tasks and reward earning experience.',
      },
      {
        src: image('sxcod3/image-3-wallet-withdrawals.webp'),
        title: 'Wallet & Withdrawals',
        caption: 'Wallet balance, transactions and withdrawal flow.',
      },
      {
        src: image('sxcod3/image-4-url-shortener.webp'),
        title: 'URL Shortener',
        caption: 'Create and manage short links.',
      },
      {
        src: image('sxcod3/image-5-admin-dashboard.webp'),
        title: 'Admin Dashboard',
        caption: 'Link and platform administration.',
      },
      {
        src: image('sxcod3/image-6-systemarchitecture.webp'),
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
        src: image('sxcod4/image-1-dashboard-builder.webp'),
        title: 'Dashboard Builder',
        caption: 'Main workspace for creating dashboards.',
      },
      {
        src: image('sxcod4/image-2-drag-drop-editor.webp'),
        title: 'Drag & Drop Editor',
        caption: 'Arrange and resize dashboard components.',
      },
      {
        src: image('sxcod4/image-3-theme-customisation.webp'),
        title: 'Theme Customisation',
        caption: 'Personalise dashboard appearance.',
      },
      {
        src: image('sxcod4/image-4-data-integrations.webp'),
        title: 'Data Integrations',
        caption: 'Connect APIs and external data sources.',
      },
      {
        src: image('sxcod4/image-5-user-access-control.webp'),
        title: 'User Access Control',
        caption: 'Manage users, teams and permissions.',
      },
      {
        src: image('sxcod4/image-6-deploy-and-share.webp'),
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
        src: image('sxcod5/image-1-college-memories-vision.webp'),
        title: 'College Memories Vision',
        caption: 'The platform concept and student memories experience.',
      },
      {
        src: image('sxcod5/image-2-frontend-experience.webp'),
        title: 'Frontend Experience',
        caption: 'Responsive interface direction.',
      },
      {
        src: image('sxcod5/image-3-backend-engineering.webp'),
        title: 'Backend Engineering',
        caption: 'Backend services, APIs and data architecture concept.',
      },
      {
        src: image('sxcod5/image-4-target-audience.webp'),
        title: 'Target Audience',
        caption: 'Initial reach target of 2,000 college students.',
      },
      {
        src: image('sxcod5/image-5-technology-stack.webp'),
        title: 'Technology Stack',
        caption: 'Proposed technologies for the platform.',
      },
      {
        src: image('sxcod5/image-6-team-community.webp'),
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

export const lockedProjects = [
  'SXCOD6',
  'SXCOD7',
  'SXCOD8',
]




/* =========================================================
   PROJECT CARD COMPONENT
   Displays an individual project preview card
   ========================================================= */



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

type CurrentProjectsProps = {
  onSelectProject: (project: Project) => void
}

export default function CurrentProjects({
  onSelectProject,
}: CurrentProjectsProps) {
  return (
    <section className="current-projects" id="current-projects">
      <div className="current-projects__heading">
        <span>IDEAS IN ACTION · SXC</span>

        <h2>
          Current Projects<span>.</span>
        </h2>

        <p>
          Explore the products we are building to solve real-world problems.
        </p>
      </div>

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
            onClick={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  )
}
