
/* =========================================================
   SXC APPLICATION ROUTER
   Main application routes and shared components
   ========================================================= */

import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Shared components */

import Header from './components/Header'
import BuildTicker from './components/BuildTicker'
import InterviewPriority from './components/InterviewPriority'
import VideoShowcase from './components/VideoShowcase'
import FakeVsReal from './components/FakeVsReal'
import WhatIsSXC from './components/WhatIsSXC'

/* Page components */

import Home from './pages/Home'
import Projects from './pages/Projects'
import StudentJourney from './pages/StudentJourney'


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

        {/* ===============================================
            HOME PAGE
            =============================================== */}

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


        {/* ===============================================
            PROJECTS PAGE
            =============================================== */}

        <Route
          path="/projects"
          element={<Projects />}
        />


        {/* ===============================================
            STUDENT JOURNEY PAGE
            =============================================== */}

        <Route
          path="/student-journey"
          element={<StudentJourney />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
