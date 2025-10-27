import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = ["light", "dim", "dark"];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    themes.forEach((t) => root.classList.remove(t));
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
