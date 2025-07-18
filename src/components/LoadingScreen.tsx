'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const loadingMessages = [
  "Initializing neural networks...",
  "Compiling algorithms...",
  "Loading portfolio data...",
  "Optimizing user experience...",
  "Almost ready..."
]

export default function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full mb-8 mx-auto"
        />
        
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          Akshit Jain
        </motion.h1>
        
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-gray-600 dark:text-gray-400 text-sm font-mono"
        >
          {loadingMessages[messageIndex]}
        </motion.p>
      </div>
    </motion.div>
  )
}
