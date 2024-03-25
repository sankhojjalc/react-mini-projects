import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [theme, setTheme] = useState(() => {
    const getThemeFromStorage = localStorage.getItem("theme");
    return getThemeFromStorage ? getThemeFromStorage : "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
