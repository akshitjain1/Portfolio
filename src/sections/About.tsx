'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo } from '@/data/portfolio'
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

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <HiAcademicCap className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Education</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">3rd Year BTech</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <HiCode className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Focus</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Machine Learning</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <HiLightningBolt className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Experience</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">2+ Years</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <HiHeart className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Passion</span>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">Problem Solving</p>
              </div>
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
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden"
            >
              {/* Dark Subtle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
              
              {/* Subtle Dark Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              {/* Subtle Dark Border */}
              <div className="absolute inset-0 rounded-2xl border border-gray-700 dark:border-gray-600" />
              
              {/* Profile Image - Fixed positioning to show full head */}
              <motion.img
                src="/projects/Picture.png"
                alt="Akshit Jain"
                className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover object-top rounded-xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Dark Overlay for Live Effect */}
              <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Subtle Corner Accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-500 dark:border-gray-400 opacity-50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-500 dark:border-gray-400 opacity-50" />
              
              {/* Subtle Glow on Hover */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 blur-lg transition-opacity duration-300"
                whileHover={{ opacity: 0.1 }}
              />
              
              {/* Live Indicator */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 font-mono">LIVE</span>
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
