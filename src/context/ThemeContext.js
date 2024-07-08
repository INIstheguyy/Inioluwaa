import { createContext, useState, useEffect } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme", defaultDark ? "dark" : "light")
  );

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default themeContext;
