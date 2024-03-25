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

export const useNewLocalStorage = () => {
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
