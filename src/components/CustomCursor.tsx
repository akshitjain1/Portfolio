'use client'

import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const updateCursorPosition = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        if (cursorRef.current && trailRef.current) {
          const x = e.clientX
          const y = e.clientY
          
          // Use transform instead of state updates for better performance
          cursorRef.current.style.transform = `translate3d(${x - 8}px, ${y - 8}px, 0)`
          trailRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`
        }
      })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    
    const handleLinkHover = () => setIsHovering(true)
    const handleLinkLeave = () => setIsHovering(false)

    // Only add listeners if on desktop and window is available
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768
      if (!isMobile) {
        document.addEventListener('mousemove', updateCursorPosition)
        document.addEventListener('mouseenter', handleMouseEnter)
        document.addEventListener('mouseleave', handleMouseLeave)

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', handleLinkHover)
          el.addEventListener('mouseleave', handleLinkLeave)
        })

        return () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId)
          }
          document.removeEventListener('mousemove', updateCursorPosition)
          document.removeEventListener('mouseenter', handleMouseEnter)
          document.removeEventListener('mouseleave', handleMouseLeave)
          
          interactiveElements.forEach(el => {
            el.removeEventListener('mouseenter', handleLinkHover)
            el.removeEventListener('mouseleave', handleLinkLeave)
          })
        }
      }
    }
  }, [])

  // Don't render on server or mobile devices
  if (!isMounted || (typeof window !== 'undefined' && window.innerWidth < 768)) {
    return null
  }

  return (
    <>
      {/* Cursor trail */}
      <div
        ref={trailRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-opacity duration-300 ${
          isVisible ? 'opacity-20' : 'opacity-0'
        } ${
          isHovering ? 'bg-blue-500 scale-150' : 'bg-gray-400'
        }`}
        style={{
          transform: 'translate3d(-16px, -16px, 0)',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
        }}
      />
      
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-80' : 'opacity-0'
        } ${
          isHovering ? 'bg-blue-600 scale-125' : 'bg-gray-800 dark:bg-white'
        }`}
        style={{
          transform: 'translate3d(-8px, -8px, 0)',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
        }}
      />
    </>
  )
}
