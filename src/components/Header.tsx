import { useEffect, useRef, useState } from 'react'
import './Header.css'

// =========================================================
// SECTION 1: NAVIGATION CONTENT
// Add or edit navigation links here.
// =========================================================

const navigationLinks = [{ label: 'Home', href: '#home' }]

// =========================================================
// SECTION 2: LOGO CONTENT
// Edit the characters or their CSS classes here.
// Typography and colors are controlled in Header.css.
// =========================================================

const logoCharacters = [
  { text: 'S', className: 'sxc-header__logo-cap' },
  ...Array.from('intra', (text) => ({
    text,
    className: 'sxc-header__logo-lower',
  })),
  { text: 'X', className: 'sxc-header__logo-x' },
  { text: 'C', className: 'sxc-header__logo-cap' },
  ...Array.from('reations', (text) => ({
    text,
    className: 'sxc-header__logo-lower',
  })),
]

// =========================================================
// SECTION 3: HEADER COMPONENT
// Manages the mobile menu and logo interactions.
// =========================================================

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCharacter, setActiveCharacter] = useState<number | null>(null)

  const touchResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close the mobile menu after selecting a navigation item.
  const closeMenu = () => setMenuOpen(false)

  // Reset any pending touch timer and clear the active logo character.
  const resetLogoInteraction = () => {
    if (touchResetTimer.current !== null) {
      clearTimeout(touchResetTimer.current)
      touchResetTimer.current = null
    }

    setActiveCharacter(null)
  }

  // Clean up the timer when the component unmounts.
  useEffect(() => {
    return () => {
      if (touchResetTimer.current !== null) {
        clearTimeout(touchResetTimer.current)
      }
    }
  }, [])

  // Desktop pointer interaction: activate the character under the pointer.
  const handleCharacterPointerEnter = (
    index: number,
    pointerType: string,
  ) => {
    if (pointerType !== 'touch') {
      setActiveCharacter(index)
    }
  }

  // Restore the default logo colors when the pointer leaves a character.
  const handleCharacterPointerLeave = (pointerType: string) => {
    if (pointerType !== 'touch') {
      setActiveCharacter(null)
    }
  }

  // Touch interaction: briefly activate the selected character.
  const handleCharacterTouch = (index: number) => {
    if (touchResetTimer.current !== null) {
      clearTimeout(touchResetTimer.current)
    }

    setActiveCharacter(index)

    touchResetTimer.current = setTimeout(() => {
      setActiveCharacter(null)
      touchResetTimer.current = null
    }, 700)
  }

  return (
    <header className="sxc-header">
      <div className="sxc-header__inner">
        {/* =================================================
            SECTION 4: BRAND LOGO
            The wordmark remains a link to the home section.
            ================================================= */}

        <a
          className="sxc-header__brand"
          href="#home"
          aria-label="SintraXCreations home"
          onClick={() => {
            closeMenu()
            resetLogoInteraction()
          }}
          onBlur={resetLogoInteraction}
        >
          <span className="sxc-header__logo-word" aria-hidden="true">
            {logoCharacters.map((character, index) => {
              const isActive = activeCharacter === index
              const isXSwapped =
                character.className === 'sxc-header__logo-x' &&
                activeCharacter !== null

              return (
                <span
                  className={[
                    'sxc-header__logo-char',
                    character.className,
                    isActive ? 'is-active' : '',
                    isXSwapped ? 'is-x-swapped' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={`${character.text}-${index}`}
                  style={{ animationDelay: `${index * 32}ms` }}
                  onPointerEnter={(event) =>
                    handleCharacterPointerEnter(index, event.pointerType)
                  }
                  onPointerLeave={(event) =>
                    handleCharacterPointerLeave(event.pointerType)
                  }
                  onPointerDown={(event) => {
                    if (event.pointerType === 'touch') {
                      handleCharacterTouch(index)
                    }
                  }}
                >
                  {character.text}
                </span>
              )
            })}
          </span>
        </a>

        {/* =================================================
            SECTION 5: MOBILE MENU TOGGLE
            Visible on smaller screens only.
            ================================================= */}

        <button
          className="sxc-header__toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="sxc-primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* =================================================
            SECTION 6: PRIMARY NAVIGATION
            Keep navigation links and the mobile CTA here.
            ================================================= */}

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

          {/* Mobile CTA: shown inside the opened mobile menu. */}
          <a
            className="sxc-header__cta sxc-header__cta--mobile"
            href="#join"
            onClick={closeMenu}
          >
            Join Project
          </a>
        </nav>

        {/* Desktop CTA: compact button sized to its text. */}
        <a className="sxc-header__cta sxc-header__cta--desktop" href="#join">
          Join Project
        </a>
      </div>
    </header>
  )
}

export default Header