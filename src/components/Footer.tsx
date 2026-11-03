import { Link } from 'react-router-dom'

import logoImage from '../assets/sintrax-creations-logo.png'

import './Footer.css'

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'Student Journey', href: '/student-journey' },
  { label: 'Projects', href: '/projects' },
  { label: 'Plans & Beyond', href: '/plans-beyond' },
  { label: 'Join Now', href: '/join-now' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="sxc-footer">
      <div className="sxc-footer__inner">

        <div className="sxc-footer__brand">
          <img
            className="sxc-footer__logo"
            src={logoImage}
            alt="SintraX Creations"
          />
          <p className="sxc-footer__tagline">Students Build Tomorrow.</p>
          <p className="sxc-footer__about">
            A 45-day build program where B.Tech students finish real,
            live projects — in teams, with a mentor.
          </p>
        </div>

        <nav className="sxc-footer__col" aria-label="Pages">
          <h3>Pages</h3>
          {pageLinks.map((link) => (
            <Link key={link.href} to={link.href}>{link.label}</Link>
          ))}
        </nav>

        <nav className="sxc-footer__col" aria-label="Legal">
          <h3>Legal</h3>
          {legalLinks.map((link) => (
            <Link key={link.href} to={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="sxc-footer__col">
          <h3>Contact</h3>
          <a href="https://wa.me/919490354451" target="_blank" rel="noreferrer">
            <span className="sxc-footer__contact-icon">
              <WhatsAppIcon />
            </span>
            WhatsApp: 94903 54451
          </a>
          <a href="mailto:sintraxcreations@gmail.com">
            <span className="sxc-footer__contact-icon">
              <MailIcon />
            </span>
            sintraxcreations@gmail.com
          </a>
          <a href="https://www.instagram.com/sintraxcreations" target="_blank" rel="noreferrer">
            <span className="sxc-footer__contact-icon">
              <InstagramIcon />
            </span>
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/sintraxcreations/" target="_blank" rel="noreferrer">
            <span className="sxc-footer__contact-icon">
              <LinkedInIcon />
            </span>
            LinkedIn
          </a>
        </div>

      </div>

      <div className="sxc-footer__bottom">
        <span>© {new Date().getFullYear()} SintraX Creations. All rights reserved.</span>
        <span className="sxc-footer__bottom-right">
          <span className="sxc-footer__motto">Learn. Build. Experience.</span>
          <button
            type="button"
            className="sxc-footer__top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ↑
          </button>
        </span>
      </div>

      <div className="sxc-footer__watermark" aria-hidden="true">
        SINTRAX
      </div>
    </footer>
  )
}
