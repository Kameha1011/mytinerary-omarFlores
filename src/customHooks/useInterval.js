import { useEffect, useRef } from "react";
/**
 * Resets the timeout by clearing the timeout reference if it exists.
 *
 * @param {Object} ref - The timeout reference.
 */
const resetTimeout = (ref) =>{
    if (ref.current) {
      clearTimeout(ref.current);
    }
  }

  /**
   * Executes a callback function repeatedly with a fixed time delay between each execution.
   *
   * @param {Function} callback - The function to be executed.
   * @param {number} delay - The time delay in milliseconds between each execution.
   */
  export const useInterval = (callback, delay, ) => {
    const timeoutRef = useRef(null);
    useEffect(() => {
        resetTimeout(timeoutRef);
        timeoutRef.current = setInterval(callback, delay);
      });
  }