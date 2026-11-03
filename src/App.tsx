
/* =========================================================
   SXC APPLICATION ROUTER
   Main application routes and shared components
   ========================================================= */

import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Shared components */

import Header from './components/Header'
import { ScrollToTop, PageShell, MetaManager } from './components/PageEffects'
import BuildTicker from './components/home/BuildTicker'
import InterviewPriority from './components/home/InterviewPriority'
import VideoShowcase from './components/home/VideoShowcase'
import FakeVsReal from './components/home/FakeVsReal'
import WhatIsSXC from './components/home/WhatIsSXC'

/* Page components */

import Home from './pages/Home'
import Projects from './pages/Projects'
import StudentJourney from './pages/StudentJourney'
import PlansBeyond from './pages/PlansBeyond'
import JoinNow from './pages/JoinNow'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Benefits from './pages/Benefits'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import HomeCTA from './components/home/HomeCTA'


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
        <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={
            <>
              <Home />
              <BuildTicker />
              <InterviewPriority />
              <VideoShowcase />
              <FakeVsReal />
              <WhatIsSXC />
              <HomeCTA />
            </>
          }
        />

        {/* PROJECTS PAGE */}

        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* STUDENT JOURNEY PAGE */}

        <Route
          path="/student-journey"
          element={<StudentJourney />}
        />

        {/* PLANS & BEYOND PAGE */}

        <Route
          path="/plans-beyond"
          element={<PlansBeyond />}
        />

        <Route path="/join-now" element={<JoinNow />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/student-benefits" element={<Benefits />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
        </PageShell>
        <Footer />
        <FloatingActions />

    </BrowserRouter>
  )
}

export default App
