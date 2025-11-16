import { useState, useRef, useEffect } from "react";

export const useThrottle = (value, delay = 300) => {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExecutedRef = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastExecutedRef.current > delay) {
        setThrottleValue(value);
        lastExecutedRef.current = Date.now();
      }
    }, delay - (Date.now() - lastExecutedRef.current));

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttleValue;
};
