import { useState } from 'react'

/**
 * Custom hook for counter functionality
 * @param {number} initialValue - Initial counter value
 * @returns {object} Counter state and methods
 */
export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(initialValue)

  return {
    count,
    increment,
    decrement,
    reset
  }
}

