
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import BuildTicker from './components/BuildTicker'
import InterviewPriority from './components/InterviewPriority'
import VideoShowcase from './components/VideoShowcase'
import FakeVsReal from './components/FakeVsReal'
import WhatIsSXC from './components/WhatIsSXC'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
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

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
