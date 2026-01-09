'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/data/portfolio'
import AnimatedTerminal from '@/components/AnimatedTerminal'
import { 
  HiAcademicCap,
  HiCode,
  HiHeart,
  HiLightningBolt,
  HiSparkles,
  HiStar
} from 'react-icons/hi'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Interactive Stats with Counters */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <HiAcademicCap className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Education</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">3rd Year BTech</p>
                <motion.div 
                  className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <motion.div 
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <HiCode className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Focus</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Machine Learning</p>
                <motion.div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-green-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 + i * 0.2 }}
                    />
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <HiLightningBolt className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Experience</span>
                </div>
                <motion.p 
                  className="font-semibold text-gray-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  2+ Years
                </motion.p>
                <div className="flex space-x-1">
                  {['💻', '🚀', '⚡'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, rotateY: 180 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ delay: 2.2 + i * 0.3 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-2 p-4 rounded-lg bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 border border-pink-200 dark:border-pink-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <HiHeart className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Passion</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Problem Solving</p>
                <motion.div 
                  className="text-pink-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-primary-500 font-mono text-sm">@</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-primary-500 font-mono text-sm">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">{personalInfo.location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Animated Terminal */}
            <AnimatedTerminal />

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden"
            >
              {/* Enhanced Dark Background with Animation */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
                animate={{
                  background: [
                    'linear-gradient(45deg, #1f2937, #111827, #000000)',
                    'linear-gradient(45deg, #111827, #000000, #1f2937)',
                    'linear-gradient(45deg, #000000, #1f2937, #111827)',
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Animated Grid Pattern */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Glowing Border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2"
                animate={{
                  borderColor: [
                    'rgba(59, 130, 246, 0.5)',
                    'rgba(139, 92, 246, 0.5)',
                    'rgba(236, 72, 153, 0.5)',
                    'rgba(59, 130, 246, 0.5)',
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Profile Image with Enhanced Effects */}
              <motion.img
                src="/profile.jpg"
                alt="Akshit Jain"
                className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover object-top rounded-xl"
                whileHover={{ 
                  scale: 1.05,
                  filter: 'brightness(1.1) contrast(1.1)'
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated Corner Accents */}
              <motion.div 
                className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-70"
                animate={{
                  borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(236, 72, 153, 1)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-70"
                animate={{
                  borderColor: [
                    'rgba(236, 72, 153, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(139, 92, 246, 1)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Pulsing Live Indicator */}
              <motion.div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-gray-300 font-mono">ONLINE</span>
              </motion.div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Fun Facts Widget */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <HiSparkles className="w-5 h-5 text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Fun Facts</h3>
              </div>
              <div className="space-y-3">
                {personalInfo.funFacts.slice(0, 3).map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <HiStar className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{fact}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
