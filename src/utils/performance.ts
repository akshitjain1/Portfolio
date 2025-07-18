// Performance monitoring utilities

export const measurePerformance = (name: string, fn: () => void | Promise<void>) => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now()
    const result = fn()
    
    if (result instanceof Promise) {
      return result.finally(() => {
        const end = performance.now()
        if (process.env.NODE_ENV === 'development') {
          console.log(`${name} took ${end - start} milliseconds`)
        }
      })
    } else {
      const end = performance.now()
      if (process.env.NODE_ENV === 'development') {
        console.log(`${name} took ${end - start} milliseconds`)
      }
      return result
    }
  }
  return fn()
}

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
