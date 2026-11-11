/* =========================================================
   HOME PAGE
   The home page is a stack of sections, in this order.
   Every section is its own component under components/home/.
   ========================================================= */

import HomeHero from '../components/home/HomeHero'
import BuildTicker from '../components/home/BuildTicker'
import InterviewPriority from '../components/home/InterviewPriority'
import VideoShowcase from '../components/home/VideoShowcase'
import FakeVsReal from '../components/home/FakeVsReal'
import WhatIsSXC from '../components/home/WhatIsSXC'
import HomeCTA from '../components/home/HomeCTA'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <BuildTicker />
      <InterviewPriority />
      <VideoShowcase />
      <FakeVsReal />
      <WhatIsSXC />
      <HomeCTA />
    </main>
  )
}

export default Home
