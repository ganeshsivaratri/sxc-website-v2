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
