'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiColorSwatch, HiX, HiCheck } from 'react-icons/hi'

interface ColorTheme {
  name: string
  primary: string
  accent: string
  description: string
  gradient: string
}

const colorThemes: ColorTheme[] = [
  {
    name: 'Ocean Blue',
    primary: '#3B82F6',
    accent: '#8B5CF6',
    description: 'Professional & Trustworthy',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Emerald Green',
    primary: '#10B981',
    accent: '#059669',
    description: 'Growth & Innovation',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Sunset Orange',
    primary: '#F59E0B',
    accent: '#EF4444',
    description: 'Creative & Energetic',
    gradient: 'from-amber-500 to-red-500'
  },
  {
    name: 'Royal Purple',
    primary: '#8B5CF6',
    accent: '#A855F7',
    description: 'Luxury & Sophistication',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    name: 'Cherry Red',
    primary: '#EF4444',
    accent: '#F97316',
    description: 'Bold & Dynamic',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    name: 'Mint Fresh',
    primary: '#06B6D4',
    accent: '#14B8A6',
    description: 'Fresh & Modern',
    gradient: 'from-cyan-500 to-teal-500'
  }
]

export default function ThemeColorPicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(colorThemes[0])
  const [previewTheme, setPreviewTheme] = useState<ColorTheme | null>(null)

  const applyTheme = (theme: ColorTheme) => {
    const root = document.documentElement
    
    // Convert hex to RGB for CSS custom properties
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null
    }

    const primaryRgb = hexToRgb(theme.primary)
    const accentRgb = hexToRgb(theme.accent)

    if (primaryRgb && accentRgb) {
      // Update CSS custom properties
      root.style.setProperty('--primary-50', `rgb(${Math.min(255, primaryRgb.r + 100)} ${Math.min(255, primaryRgb.g + 100)} ${Math.min(255, primaryRgb.b + 100)})`)
      root.style.setProperty('--primary-100', `rgb(${Math.min(255, primaryRgb.r + 80)} ${Math.min(255, primaryRgb.g + 80)} ${Math.min(255, primaryRgb.b + 80)})`)
      root.style.setProperty('--primary-500', `rgb(${primaryRgb.r} ${primaryRgb.g} ${primaryRgb.b})`)
      root.style.setProperty('--primary-600', `rgb(${Math.max(0, primaryRgb.r - 20)} ${Math.max(0, primaryRgb.g - 20)} ${Math.max(0, primaryRgb.b - 20)})`)
      root.style.setProperty('--primary-700', `rgb(${Math.max(0, primaryRgb.r - 40)} ${Math.max(0, primaryRgb.g - 40)} ${Math.max(0, primaryRgb.b - 40)})`)
      root.style.setProperty('--primary-900', `rgb(${Math.max(0, primaryRgb.r - 80)} ${Math.max(0, primaryRgb.g - 80)} ${Math.max(0, primaryRgb.b - 80)})`)
      
      root.style.setProperty('--accent-500', `rgb(${accentRgb.r} ${accentRgb.g} ${accentRgb.b})`)
      root.style.setProperty('--accent-600', `rgb(${Math.max(0, accentRgb.r - 20)} ${Math.max(0, accentRgb.g - 20)} ${Math.max(0, accentRgb.b - 20)})`)
    }

    // Save to localStorage
    localStorage.setItem('portfolio-theme', JSON.stringify(theme))
    setSelectedTheme(theme)
  }

  const handleThemeSelect = (theme: ColorTheme) => {
    applyTheme(theme)
    setIsOpen(false)
    setPreviewTheme(null)
  }

  const handlePreview = (theme: ColorTheme | null) => {
    setPreviewTheme(theme)
    if (theme) {
      applyTheme(theme)
    } else {
      applyTheme(selectedTheme)
    }
  }

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme)
        setSelectedTheme(theme)
        applyTheme(theme)
      } catch (error) {
        console.log('Error loading saved theme:', error)
      }
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Color Picker Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 flex items-center justify-center group"
      >
        <HiColorSwatch className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors" />
        
        {/* Current theme indicator */}
        <div 
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"
          style={{ backgroundColor: selectedTheme.primary }}
        />
      </motion.button>

      {/* Color Picker Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Theme Colors
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <HiX className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Choose your preferred color scheme
              </p>
            </div>

            {/* Color Options */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {colorThemes.map((theme) => (
                <motion.div
                  key={theme.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => handlePreview(theme)}
                  onHoverEnd={() => handlePreview(null)}
                  onClick={() => handleThemeSelect(theme)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedTheme.name === theme.name
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* Color Preview */}
                      <div className="flex space-x-1">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.primary }}
                        />
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.accent }}
                        />
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {theme.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {theme.description}
                        </p>
                      </div>
                    </div>

                    {/* Selection indicator */}
                    {selectedTheme.name === theme.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center"
                      >
                        <HiCheck className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Gradient Preview */}
                  <div 
                    className={`mt-2 h-2 rounded-full bg-gradient-to-r ${theme.gradient}`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Your theme preference is saved automatically
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
