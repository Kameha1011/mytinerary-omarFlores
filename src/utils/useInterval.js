import { useEffect, useRef } from "react";
const resetTimeout = (ref) =>{
    if (ref.current) {
      clearTimeout(ref.current);
    }
  }

  export const useInterval = (callback, delay, ) => {
    const timeoutRef = useRef(null);
    useEffect(() => {
        resetTimeout(timeoutRef);
        timeoutRef.current = setInterval(callback, delay);
      });
  }