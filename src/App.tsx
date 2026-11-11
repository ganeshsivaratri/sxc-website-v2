
/* =========================================================
   SXC APPLICATION ROUTER
   Routes + the shared shell only — page content lives in
   pages/. Every page loads lazily: its code downloads only
   when a visitor opens that page, so the first load is fast.
   ========================================================= */

import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Shared components */

import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import { ScrollToTop, PageShell, MetaManager } from './components/PageEffects'

/* Page components (lazy) */

const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const StudentJourney = lazy(() => import('./pages/StudentJourney'))
const PlansBeyond = lazy(() => import('./pages/PlansBeyond'))
const JoinNow = lazy(() => import('./pages/JoinNow'))
const Benefits = lazy(() => import('./pages/Benefits'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const NotFound = lazy(() => import('./pages/NotFound'))

/* =========================================================
   APP COMPONENT
   ========================================================= */

function App() {
  return (
    <BrowserRouter>

      {/* Shared website header */}

      <ScrollToTop />
      <MetaManager />
      <Header />

      {/* Application routes */}

      <PageShell>
        <Suspense fallback={<div className="page-loading">Loading…</div>}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/student-journey" element={<StudentJourney />} />
            <Route path="/plans-beyond" element={<PlansBeyond />} />
            <Route path="/join-now" element={<JoinNow />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/student-benefits" element={<Benefits />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            {/* Any other address shows the 404 page */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Suspense>
      </PageShell>

      <Footer />
      <FloatingActions />

    </BrowserRouter>
  )
}

export default App
