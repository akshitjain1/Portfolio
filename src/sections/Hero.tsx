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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % personalInfo.funFacts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    scrollToSection('about')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20">
        {/* Binary Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-green-500 font-mono text-xs select-none"
              animate={{
                y: [-20, window.innerHeight + 20],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </motion.div>
          ))}
        </div>

        {/* Neural Network Nodes */}
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
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating Code Symbols */}
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
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

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

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AKSHIT JAIN
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Aspiring Machine Learning Engineer | Debugging for joy | Rhythm-Coded Thinker
          </motion.p>

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
