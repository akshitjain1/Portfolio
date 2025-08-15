'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { personalInfo } from '@/data/portfolio'
import { scrollToSection, fadeInUp, staggerContainer } from '@/utils'
import { 
  HiChevronDown,
  HiDownload,
  HiMail 
} from 'react-icons/hi'

export default function Hero() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayedText, setDisplayedText] = useState('')
  const [windowHeight, setWindowHeight] = useState(800) // Default fallback
  const [isClient, setIsClient] = useState(false)
  
  const typewriterText = "Machine Learning Engineer"

  // Set client-side flag
  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
      
      const handleResize = () => setWindowHeight(window.innerHeight)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % personalInfo.funFacts.length)
    }, 5000) // Increased from 3 seconds to 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Optimized Typewriter effect with longer delays
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isTyping && displayedText.length < typewriterText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, displayedText.length + 1))
      }, 150) // Slower typing for better performance
    } else if (displayedText.length === typewriterText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)
        setDisplayedText('')
      }, 3000) // Longer pause
    } else {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, 1000) // Longer delay between cycles
    }
    return () => clearTimeout(timeout)
  }, [displayedText, isTyping])

  const scrollToNext = () => {
    scrollToSection('about')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20">
        {/* Simplified Floating Elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`cube-${i}`}
              className="absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 opacity-40 rounded"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>

        {/* Reduced Matrix Rain Effect - Only show on client */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`matrix-${i}`}
                className="absolute text-green-500 font-mono text-xs select-none"
                animate={{
                  y: [-20, windowHeight + 20],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
                style={{
                  left: `${10 + i * 10}%`,
                }}
              >
                {Array.from({ length: 8 }, (_, j) => (i + j) % 2 === 0 ? '1' : '0').join('')}
              </motion.div>
            ))}
          </div>
        )}
        {/* Binary Rain Effect - Only show on client */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`binary-${i}`}
                className="absolute text-green-500 font-mono text-xs select-none"
                animate={{
                  y: [-20, 1000],
                }}
                transition={{
                  duration: (i % 8) + 4,
                  repeat: Infinity,
                  delay: (i % 5),
                  ease: "linear",
                }}
                style={{
                  left: `${(i * 5) % 100}%`,
                }}
              >
                {Array.from({ length: 20 }, (_, j) => (i + j) % 3 === 0 ? '1' : '0').join('')}
              </motion.div>
            ))}
          </div>
        )}

        {/* Neural Network Nodes - Only show on client */}
        {isClient && (
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`node-${i}`}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: (i % 4) + 2,
                  repeat: Infinity,
                  delay: (i % 3),
                }}
                style={{
                  left: `${(i * 8.33) % 100}%`,
                  top: `${(i * 7.14) % 100}%`,
                }}
              />
            ))}
          </div>
        )}

        {/* Floating Code Symbols - Only show on client */}
        {isClient && (
          <div className="absolute inset-0 opacity-4 dark:opacity-8">
            {['λ', '∑', 'π', '∇', '∞', 'α', 'β', 'θ'].map((symbol, i) => (
              <motion.div
                key={`symbol-${i}`}
                className="absolute text-purple-500 font-mono text-lg select-none"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: (i % 15) + 10,
                  repeat: Infinity,
                  delay: (i % 8),
                }}
                style={{
                  left: `${(i * 12.5) % 100}%`,
                  top: `${(i * 11.11) % 100}%`,
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
        )}

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'pulse 8s infinite'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium"
          >
            Hi, nice to e-meet you.
          </motion.p>

          {/* Main Title with 3D Effect */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center relative"
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                transformStyle: 'preserve-3d'
              }}
            >
              AKSHIT JAIN
              {/* 3D Shadow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-20 translate-x-1 translate-y-1 -z-10">
                AKSHIT JAIN
              </span>
            </motion.span>
          </motion.h1>

          {/* Dynamic Subtitle with Typewriter */}
          <motion.div
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto h-16 flex items-center justify-center"
          >
            <span>Aspiring </span>
            <motion.span 
              className="text-primary-500 font-bold mx-2 min-w-[280px] text-left"
              key={displayedText}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary-500"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Animated Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['Python', 'Machine Learning', 'React', 'TypeScript', 'AI'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  y: -5 
                }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Tech Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-12 flex items-center justify-center"
          >
            <motion.p
              className="text-cyan-500 dark:text-cyan-400 font-mono text-sm md:text-base tracking-wide"
            >
              Music fuels my coding sessions
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </motion.button>

            <motion.a
              href={personalInfo.resume}
              download="Akshit_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>

            <motion.a
              href={personalInfo.social.email}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              Say Hello
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          <HiChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </motion.button>
      </motion.div>
    </section>
  )
}
