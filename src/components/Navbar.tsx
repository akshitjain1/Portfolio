'use client'

import dynamic from 'next/dynamic'

const NavbarClient = dynamic(() => import('./NavbarClient'), {
  ssr: false,
  loading: () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">AJ</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Placeholder navigation items */}
          </div>
          <div className="flex items-center space-x-4">
            {/* Placeholder theme toggle */}
          </div>
        </div>
      </div>
    </nav>
  )
})

export default function Navbar() {
  return <NavbarClient />
}
