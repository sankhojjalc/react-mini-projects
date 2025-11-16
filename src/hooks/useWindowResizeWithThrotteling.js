import { useState, useEffect, useRef, useCallback } from "react";

export const useThrottledWindowResize = (delay = 200) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const lastRun = useRef(0);

  const handleResize = useCallback(() => {
    const now = Date.now();

    if (now - lastRun.current >= delay) {
      lastRun.current = now;
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, [delay]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowSize;
};
