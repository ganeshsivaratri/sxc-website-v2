import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

/* Every page change starts at the top of the new page. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}

/* Re-mounts on every route change, so the CSS page-in
   animation in index.css plays on each new page. */
export function PageShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className="page-shell">
      {children}
    </div>
  )
}

/* ---------- SEO: per-page title + meta description ---------- */

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'SintraX Creations — Build Real B.Tech Projects in 45 Days',
    description:
      'SXC is a 45-day build program in Eluru where B.Tech students finish a real, live project — with a portfolio, certificate and interview confidence.',
  },
  '/projects': {
    title: 'Project Ideas for CSE & B.Tech Students — SintraX Creations',
    description:
      'Real projects SXC students build and finish: live apps and platforms you deploy and can explain in your viva and interviews. See current projects.',
  },
  '/student-journey': {
    title: 'The 45-Day Journey — How SXC Students Build & Finish Projects',
    description:
      'Day 0 to Day 45 at SXC: how a student team plans, builds, tests, deploys and learns to explain a real project — roles, phase gates and Demo Day.',
  },
  '/plans-beyond': {
    title: 'Plans & Beyond — SXC Program Plans, Fees & Benefits',
    description:
      'Individual plans from ₹2,199, team plans from ₹1,999 per student. Every plan: live project, portfolio website and certificate. Book with ₹500.',
  },
  '/student-benefits': {
    title: 'Student Benefits — What You Get at SintraX Creations',
    description:
      'What SXC students walk away with: a live project link, your own portfolio website, an earned certificate, real team roles and Lead Intern chances.',
  },
  '/join-now': {
    title: 'Join SintraX Creations — Book Your Seat with ₹500',
    description:
      'Join the next SXC batch: choose your plan, book your seat with ₹500 and start building on Day 1. Individual and team joining both open.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy — SintraX Creations',
    description:
      'How SintraX Creations collects, uses and protects the details you share through the Join form and WhatsApp.',
  },
  '/refund-policy': {
    title: 'Refund Policy — SintraX Creations',
    description:
      'SXC fees and booking terms: the ₹500 booking and program fees are non-refundable once paid. Read before you pay.',
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions — SintraX Creations',
    description:
      'The terms every SXC student agrees to: program rules, project ownership, certificate rules and Lead Intern roles.',
  },
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function MetaManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta =
      ROUTE_META[pathname] ??
      ({
        title: 'SintraX Creations — Students Build Tomorrow',
        description: ROUTE_META['/'].description,
      } as const)

    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)

    const pageUrl = `https://sxc.codpox.com${pathname === '/' ? '/' : pathname}`
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', pageUrl)
    setMeta('property', 'og:url', pageUrl)
  }, [pathname])

  return null
}
