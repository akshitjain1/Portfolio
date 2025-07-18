'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { 
  HiHeart,
  HiCode,
  HiLightningBolt 
} from 'react-icons/hi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold gradient-text">
              Akshit Jain
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building the future with code and algorithms. Always learning, always growing.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <HiHeart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <HiCode className="w-4 h-4 text-blue-500" />
              <span>by Akshit</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Let&apos;s Connect
            </h3>
            <div className="flex space-x-4">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <span className="text-sm font-medium uppercase">
                    {platform.charAt(0)}
                  </span>
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <HiLightningBolt className="w-4 h-4 text-yellow-500" />
              <span>Available for opportunities</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Akshit Jain. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary-500 cursor-pointer transition-colors"
              >
                Privacy Policy
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="hover:text-primary-500 cursor-pointer transition-colors"
              >
                Terms of Service
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
