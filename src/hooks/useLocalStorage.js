import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [theme, setTheme] = useState("light");
  const getThemeFromStorage = localStorage.getItem("theme")
    ? setTheme(getThemeFromStorage)
    : localStorage.setItem("theme", theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
