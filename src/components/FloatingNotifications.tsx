'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiCode, HiLightningBolt, HiStar, HiHeart, HiFire, HiBadgeCheck } from 'react-icons/hi'

interface Notification {
  id: number
  icon: React.ReactNode
  title: string
  message: string
  color: string
  bgColor: string
}

const notifications: Omit<Notification, 'id'>[] = [
  {
    icon: <HiCode className="w-5 h-5" />,
    title: 'Code Pushed!',
    message: 'New ML model deployed successfully',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  },
  {
    icon: <HiLightningBolt className="w-5 h-5" />,
    title: 'Problem Solved!',
    message: 'LeetCode daily challenge completed',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  },
  {
    icon: <HiStar className="w-5 h-5" />,
    title: 'GitHub Star!',
    message: 'Project received a new star ⭐',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
  },
  {
    icon: <HiHeart className="w-5 h-5" />,
    title: 'Coffee Break',
    message: 'Refueling creativity... ☕',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800'
  },
  {
    icon: <HiFire className="w-5 h-5" />,
    title: 'Deploy Success!',
    message: 'Portfolio updated and live',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
  },
  {
    icon: <HiBadgeCheck className="w-5 h-5" />,
    title: 'Skills Upgraded!',
    message: 'Learning new technology...',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
  }
]

export default function FloatingNotifications() {
  const [activeNotifications, setActiveNotifications] = useState<Notification[]>([])
  const [notificationId, setNotificationId] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const interval = setInterval(() => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      const newNotification: Notification = {
        ...randomNotification,
        id: notificationId
      }
      
      setActiveNotifications(prev => [...prev, newNotification])
      setNotificationId(prev => prev + 1)

      // Remove notification after 5 seconds
      setTimeout(() => {
        setActiveNotifications(prev => prev.filter(notif => notif.id !== newNotification.id))
      }, 5000)
    }, 12000) // Increased from 6 seconds to 12 seconds

    return () => clearInterval(interval)
  }, [isMounted, notificationId])

  // Don't render on server-side
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-[60] space-y-2 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {activeNotifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8, transition: { duration: 0.3 } }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className={`${notification.bgColor} border rounded-lg p-4 shadow-lg backdrop-blur-sm max-w-xs`}
          >
            <div className="flex items-start space-x-3">
              <motion.div
                className={notification.color}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                {notification.icon}
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {notification.title}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  {notification.message}
                </p>
              </div>
            </div>
            
            {/* Progress bar */}
            <motion.div
              className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className={`h-full ${notification.color.replace('text-', 'bg-')}`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
