import { useState, useRef, useEffect } from "react";

export const useThrottle = (value, delay = 300) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const now = Date.now();
    const remaining = delay - (now - lastExecuted.current);

    if (remaining <= 0) {
      // Execute immediately
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      // Schedule execution if not already scheduled
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          setThrottledValue(value);
          lastExecuted.current = Date.now();
          timeoutRef.current = null;
        }, remaining);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);

  return throttledValue;
};
