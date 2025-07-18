'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import CodeProfiles from '@/sections/CodeProfiles'
import Timeline from '@/sections/Timeline'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodeProfiles />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
