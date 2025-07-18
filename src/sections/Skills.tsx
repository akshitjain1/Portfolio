'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/data/portfolio'
import { useState } from 'react'
import { 
  SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNextdotjs,
  SiTailwindcss, SiNumpy, SiPandas, SiTensorflow, SiGit, SiDocker,
  SiVisualstudiocode, SiLinux, SiMongodb, SiCplusplus,
  SiC, SiJupyter, SiScikitlearn
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const iconMap: { [key: string]: any } = {
  python: SiPython,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss3,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  numpy: SiNumpy,
  pandas: SiPandas,
  tensorflow: SiTensorflow,
  git: SiGit,
  docker: SiDocker,
  vscode: SiVisualstudiocode,
  linux: SiLinux,
  mongodb: SiMongodb,
  cpp: SiCplusplus,
  java: FaJava,
  c: SiC,
  jupyter: SiJupyter,
  sklearn: SiScikitlearn,
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0])
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
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
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(skills).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills[activeCategory as keyof typeof skills].map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || SiPython
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary-500" />
                      </div>
                      <span className="font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                    />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 80 ? 'Advanced' : 
                     skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of software development and machine learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Programming Languages</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">10+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Frameworks & Libraries</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tools & Technologies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
