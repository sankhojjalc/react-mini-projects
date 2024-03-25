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

// ALTERNATE APPROACH

// export const useNewLocalStorage = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const storageTheme = localStorage.getItem("theme");
//     if (storageTheme) {
//       setTheme(storageTheme);
//     } else {
//       localStorage.setItem("theme", theme);
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   return [theme, toggleTheme];
// };
