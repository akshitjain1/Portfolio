'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  color: string
  direction: number
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }

    updateDimensions()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateDimensions)
    }

    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * (dimensions.width || 1920),
      y: Math.random() * (dimensions.height || 1080),
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
      color: ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)],
      direction: Math.random() * Math.PI * 2
    }))

    setParticles(initialParticles)

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateDimensions)
      }
    }
  }, [isMounted, dimensions.width, dimensions.height])

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const newX = particle.x + Math.cos(particle.direction) * particle.speed
          const newY = particle.y + Math.sin(particle.direction) * particle.speed
          
          return {
            ...particle,
            // Wrap around screen edges
            x: newX > dimensions.width ? 0 : newX < 0 ? dimensions.width : newX,
            y: newY > dimensions.height ? 0 : newY < 0 ? dimensions.height : newY
          }
        })
      )
    }

    const interval = setInterval(animateParticles, 16) // ~60fps
    return () => clearInterval(interval)
  }, [dimensions])

  // Don't render on server-side
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.id * 0.1
          }}
        />
      ))}
      
      {/* Connection lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            )
            
            if (distance < 100) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(59, 130, 246, 0.1)"
                  strokeWidth={1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 - distance / 100 }}
                />
              )
            }
            return null
          })
        )}
      </svg>
    </div>
  )
}
