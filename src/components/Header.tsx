import { useState } from 'react'
import logoImage from '../assets/sintrax-creations-logo.png'
import './Header.css'

// =========================================================
// SECTION 1: NAVIGATION CONTENT
// =========================================================

const navigationLinks = [{ label: 'Home', href: '#home' }]

// =========================================================
// SECTION 2: HEADER COMPONENT
// Manages the mobile navigation menu.
// =========================================================

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sxc-header">
      <div className="sxc-header__inner">
        {/* SECTION 3: BRAND LOGO */}

        <a
          className="sxc-header__brand"
          href="#home"
          aria-label="SintraX Creations home"
          onClick={closeMenu}
        >
          <img
            className="sxc-header__logo-image"
            src={logoImage}
            alt="SintraX Creations"
          />
        </a>

        {/* SECTION 4: MOBILE MENU TOGGLE */}

        <button
          className="sxc-header__toggle"
          type="button"
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="sxc-primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* SECTION 5: PRIMARY NAVIGATION */}

        <nav
          id="sxc-primary-navigation"
          className={`sxc-header__navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link, index) => (
            <a
              className="sxc-header__link"
              href={link.href}
              key={link.label}
              aria-current="page"
              style={{ animationDelay: `${250 + index * 115}ms` }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}

          <a
            className="sxc-header__cta sxc-header__cta--mobile"
            href="#join"
            onClick={closeMenu}
          >
            Join Project
          </a>
        </nav>

        {/* SECTION 6: DESKTOP CTA */}

        <a className="sxc-header__cta sxc-header__cta--desktop" href="#join">
          Join Project
        </a>
      </div>
    </header>
  )
}

export default Header
