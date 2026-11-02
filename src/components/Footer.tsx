import { Link } from 'react-router-dom'

import logoImage from '../assets/sintrax-creations-logo.png'

import './Footer.css'

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
            WhatsApp: 94903 54451
          </a>
          <a href="mailto:sintraxcreations@gmail.com">
            sintraxcreations@gmail.com
          </a>
          <a href="https://www.instagram.com/sintraxcreations" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/sintraxcreations/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

      </div>

      <div className="sxc-footer__bottom">
        <span>© {new Date().getFullYear()} SintraX Creations. All rights reserved.</span>
        <span className="sxc-footer__motto">Learn. Build. Experience.</span>
      </div>
    </footer>
  )
}
