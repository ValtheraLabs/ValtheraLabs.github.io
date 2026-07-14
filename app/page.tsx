import Hero from '@/components/sections/Hero'
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import FeaturedSystems from '@/components/sections/FeaturedSystems'
import TechStack from '@/components/sections/TechStack'
import Process from '@/components/sections/Process'
import WhyValthera from '@/components/sections/WhyValthera'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Hero />
      <main id="main-content">
        <FeaturedSystems />
        <WhatWeBuild />
        <Process />
        <WhyValthera />
        <TechStack />
        <Contact />
      </main>
    </>
  )
}
