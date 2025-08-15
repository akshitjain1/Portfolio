'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiPlay, HiStop } from 'react-icons/hi'

const codeSnippets = [
  {
    language: 'python',
    title: 'ML Model Training',
    code: `# Training a neural network
import tensorflow as tf
from sklearn.model_selection import train_test_split

# Load and preprocess data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Build model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
])

# Compile and train
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')
model.fit(X_train, y_train, epochs=10, validation_split=0.2)

print(&quot;Model training completed! 🚀&quot;)`
  },
  {
    language: 'javascript',
    title: 'React Component',
    code: `// Modern React Component
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="portfolio-container"
    >
      {loading ? <Skeleton /> : <ProjectGrid projects={projects} />}
    </motion.div>
  );
};

export default Portfolio;`
  },
  {
    language: 'cpp',
    title: 'Algorithm Implementation',
    code: `// Efficient Binary Search Algorithm
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11, 13};
    int target = 7;
    
    int result = binarySearch(arr, target);
    cout &lt;&lt; &quot;Element found at index: &quot; &lt;&lt; result &lt;&lt; endl;
    
    return 0;
}`
  }
]

export default function InteractiveCodeEditor() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)

  const startTyping = () => {
    if (isTyping) return
    
    setIsTyping(true)
    setDisplayedCode('')
    setCurrentLine(0)
    
    const snippet = codeSnippets[currentSnippet]
    const lines = snippet.code.split('\n')
    let lineIndex = 0
    
    const typeNextLine = () => {
      if (lineIndex < lines.length) {
        setDisplayedCode(prev => prev + (lineIndex > 0 ? '\n' : '') + lines[lineIndex])
        setCurrentLine(lineIndex + 1)
        lineIndex++
        setTimeout(typeNextLine, Math.random() * 200 + 100)
      } else {
        setIsTyping(false)
      }
    }
    
    typeNextLine()
  }

  const nextSnippet = () => {
    if (!isTyping) {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
      setDisplayedCode('')
      setCurrentLine(0)
    }
  }

  useEffect(() => {
    setDisplayedCode('')
    setCurrentLine(0)
  }, [currentSnippet])

  const snippet = codeSnippets[currentSnippet]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 max-w-2xl mx-auto"
    >
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-mono">
            {snippet.title}.{snippet.language}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={startTyping}
            disabled={isTyping}
            className="flex items-center space-x-1 px-3 py-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-600 rounded text-white text-xs transition-colors"
          >
            {isTyping ? <HiStop className="w-3 h-3" /> : <HiPlay className="w-3 h-3" />}
            <span>{isTyping ? 'Running...' : 'Run'}</span>
          </button>
          
          <button
            onClick={nextSnippet}
            disabled={isTyping}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 rounded text-white text-xs transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="relative">
        <div className="flex">
          {/* Line Numbers */}
          <div className="bg-gray-800 px-3 py-4 text-gray-500 text-sm font-mono select-none">
            {displayedCode.split('\n').map((_, index) => (
              <div key={index} className="leading-6">
                {index + 1}
              </div>
            ))}
            {displayedCode === '' && <div className="leading-6">1</div>}
          </div>

          {/* Code Content */}
          <div className="flex-1 p-4 text-sm font-mono text-gray-100 leading-6 min-h-[300px]">
            <pre className="whitespace-pre-wrap">
              <AnimatePresence>
                {displayedCode && (
                  <motion.code
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`language-${snippet.language}`}
                  >
                    {displayedCode}
                  </motion.code>
                )}
              </AnimatePresence>
              
              {/* Cursor */}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="bg-green-400 w-2 h-6 inline-block ml-1"
                />
              )}
            </pre>
            
            {!displayedCode && !isTyping && (
              <div className="text-gray-500 italic">
                Click &quot;Run&quot; to see {snippet.title} in action...
              </div>
            )}
          </div>
        </div>

        {/* Language Badge */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full font-medium">
          {snippet.language.toUpperCase()}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <span>
            Lines: {displayedCode.split('\n').length} | 
            Characters: {displayedCode.length}
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Ready</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
