/* =========================================================
   NOT FOUND (404) PAGE
   Shown for any URL that is not a real page (route "*").
   ========================================================= */

import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">This page does not exist.</h1>
      <p className="not-found-text">
        The link may be old, or the address may have a typing mistake.
      </p>
      <Link className="not-found-button" to="/">
        Go to the home page
      </Link>
    </main>
  )
}

export default NotFound
