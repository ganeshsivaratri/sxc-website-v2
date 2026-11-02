
/* =========================================================
   SXC APPLICATION ROUTER
   Main application routes and shared components
   ========================================================= */

import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Shared components */

import Header from './components/Header'
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
import Footer from './components/Footer'


/* =========================================================
   APP COMPONENT
   ========================================================= */

function App() {
  return (
    <BrowserRouter>

      {/* Shared website header */}

      <Header />

      {/* Application routes */}

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
      </Routes>
        <Footer />

    </BrowserRouter>
  )
}

export default App
