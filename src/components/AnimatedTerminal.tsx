'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Command {
  command: string
  output: string
  delay: number
}

const commands: Command[] = [
  { command: 'whoami', output: 'akshit-jain', delay: 1000 },
  { command: 'ls skills/', output: 'python  machine-learning  react  typescript  cpp', delay: 2000 },
  { command: 'cat passion.txt', output: 'Building AI solutions that make a difference 🚀', delay: 3000 },
  { command: 'git status', output: 'On branch main\nYour portfolio is up to date! ✨', delay: 4000 },
  { command: 'npm run build-future', output: 'Building amazing projects... 💻', delay: 5000 },
]

export default function AnimatedTerminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [displayedCommands, setDisplayedCommands] = useState<Command[]>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const timer = setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setDisplayedCommands(prev => [...prev, commands[currentCommandIndex]])
          setCurrentCommandIndex(prev => prev + 1)
          setIsTyping(false)
        }, 1500)
      }, commands[currentCommandIndex].delay)

      return () => clearTimeout(timer)
    } else {
      // Reset after showing all commands
      const resetTimer = setTimeout(() => {
        setDisplayedCommands([])
        setCurrentCommandIndex(0)
      }, 8000)

      return () => clearTimeout(resetTimer)
    }
  }, [currentCommandIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 rounded-lg p-4 font-mono text-sm shadow-2xl border border-gray-700 max-w-md mx-auto"
    >
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs ml-2">akshit@portfolio:~$</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2 min-h-[200px]">
        {displayedCommands.map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-1"
          >
            <div className="flex items-center space-x-2">
              <span className="text-green-400">$</span>
              <motion.span
                className="text-white"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 0.8 }}
              >
                {cmd.command}
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 pl-4 whitespace-pre-line"
            >
              {cmd.output}
            </motion.div>
          </motion.div>
        ))}
        
        {/* Current typing indicator */}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <motion.span
              className="text-white"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              {currentCommandIndex < commands.length ? commands[currentCommandIndex].command : ''}
            </motion.span>
            <motion.span
              className="text-white"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
