'use client'

import React from 'react'

// Simplified: removed all animations and heavy cursor logic.
// Replaced animated cursor with a simple floating "Hire Me" button
// which is shown only on large screens.
export default function CustomCursor() {
  return (
    <div className="fixed z-50 right-6 bottom-6 hidden lg:block">
      <a
        href="/#contact"
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-label="Hire Me"
      >
        Hire Me
      </a>
    </div>
  )
}
