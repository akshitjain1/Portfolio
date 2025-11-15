'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/LoadingSpinner'

// Dynamic imports for performance optimization
const CodeProfiles = dynamic(() => import('@/sections/CodeProfiles'), {
  loading: () => <LoadingSpinner />
})
const Timeline = dynamic(() => import('@/sections/Timeline'), {
  loading: () => <LoadingSpinner />
})
const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), {
  loading: () => <div />
})
const FloatingNotifications = dynamic(() => import('@/components/FloatingNotifications'), {
  loading: () => <div />,
  ssr: false
})
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  loading: () => <div />,
  ssr: false
})
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  loading: () => <div />,
  ssr: false
})

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <CustomCursor />
      <FloatingNotifications />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ErrorBoundary>
        <CodeProfiles />
      </ErrorBoundary>
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
