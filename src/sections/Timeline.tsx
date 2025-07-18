'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { timeline } from '@/data/portfolio'
import { useState } from 'react'
import { 
  HiAcademicCap, 
  HiBriefcase, 
  HiLocationMarker, 
  HiCalendar,
  HiChevronDown,
  HiChevronUp
} from 'react-icons/hi'

export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="timeline" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of my education, experiences, and professional growth
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isExpanded = expandedItems.includes(item.id)
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-4 h-4 rounded-full ${
                          item.type === 'education' 
                            ? 'bg-primary-500' 
                            : 'bg-accent-500'
                        } border-4 border-white dark:border-gray-800`}
                      />
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all ml-16 md:ml-0 border border-gray-200 dark:border-gray-800"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              item.type === 'education' 
                                ? 'bg-primary-100 dark:bg-primary-900/20' 
                                : 'bg-accent-100 dark:bg-accent-900/20'
                            }`}>
                              {item.type === 'education' ? (
                                <HiAcademicCap className="w-5 h-5 text-primary-500" />
                              ) : (
                                <HiBriefcase className="w-5 h-5 text-accent-500" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                              </h3>
                              <p className="text-primary-500 dark:text-primary-400 font-medium">
                                {item.organization}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleExpanded(item.id)}
                            className="p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {isExpanded ? (
                              <HiChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <HiChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </motion.button>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <HiCalendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <HiLocationMarker className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {item.description}
                        </p>

                        {/* Achievements (Expandable) */}
                        <motion.div
                          initial={false}
                          animate={{ height: isExpanded ? 'auto' : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start space-x-2"
                                >
                                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Future Goals */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What&apos;s Next?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m actively seeking opportunities in machine learning and software development. 
              My goal is to work on projects that make a real impact while continuing to learn 
              and grow as a developer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Let&apos;s Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
