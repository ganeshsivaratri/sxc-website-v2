/* =========================================================
   SXC WEBSITE HEADER
   Main navigation and responsive mobile menu
   ========================================================= */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoImage from '../assets/sintrax-creations-logo.webp'

import './Header.css'


/* =========================================================
   SECTION 1: NAVIGATION CONTENT
   ========================================================= */

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Student Journey', href: '/student-journey' },
  { label: 'Projects', href: '/projects' },
  { label: 'Plans & Beyond', href: '/plans-beyond' },
  { label: 'Student Benefits', href: '/student-benefits' },
]


/* =========================================================
   SECTION 2: HEADER COMPONENT
   ========================================================= */

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sxc-header">

      <div className="sxc-header__inner">

        {/* BRAND LOGO */}

        <Link
          className="sxc-header__brand"
          to="/"
          aria-label="SintraX Creations home"
          onClick={closeMenu}
        >
          <img
            className="sxc-header__logo-image"
            src={logoImage}
            alt="SintraX Creations"
          />
        </Link>


        {/* MOBILE MENU TOGGLE */}

        <button
          className="sxc-header__toggle"
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="sxc-primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>


        {/* PRIMARY NAVIGATION */}

        <nav
          id="sxc-primary-navigation"
          className={`sxc-header__navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >

          {navigationLinks.map((link, index) => (

            <Link
              className="sxc-header__link"
              to={link.href}
              key={link.label}

              aria-current={
                location.pathname === link.href
                  ? 'page'
                  : undefined
              }

              style={{
                animationDelay: `${250 + index * 115}ms`,
              }}

              onClick={closeMenu}
            >
              {link.label}
            </Link>

          ))}


          {/* MOBILE CTA */}

          <Link
            className="sxc-header__cta sxc-header__cta--mobile"
            to="/join-now"
            onClick={closeMenu}
          >
            Join Project
          </Link>

        </nav>


        {/* DESKTOP CTA */}

        <Link
          className="sxc-header__cta sxc-header__cta--desktop"
          to="/join-now"
        >
          Join Project
        </Link>

      </div>

    </header>
  )
}

export default Header
