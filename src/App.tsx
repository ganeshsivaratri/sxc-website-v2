import Header from './components/Header'
import Home from './pages/Home'
import BuildTicker from './components/BuildTicker'
import InterviewPriority from './components/InterviewPriority'
import VideoShowcase from './components/VideoShowcase'

// =====================================================
// MAIN APP — HOMEPAGE SECTION ORDER
// =====================================================

function App() {
  return (
    <>
      {/* SECTION 1: HEADER */}
      <Header />

      {/* SECTION 2: HERO */}
      <Home />

      {/* SECTION 3: SCROLLING TICKER */}
      <BuildTicker />

      {/* SECTION 4: INTERVIEW PRIORITY */}
      <InterviewPriority />

      {/* SECTION 5: BUILD YOUR FUTURE VIDEO */}
      <VideoShowcase />
    </>
  )
}

export default App