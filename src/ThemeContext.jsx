import React, { createContext, useState, useContext } from "react";

// Skapa context
const ThemeContext = createContext();

// Provider-komponent
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Standardtemat är 'light'
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF"); // Standard bakgrundsfärg för 'light' tema

  // Funktion för att växla tema
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setBackgroundColor(newTheme === "light" ? "#FFFFFF" : "#333333"); // Växla bakgrundsfärgen beroende på tema
      return newTheme;
    });
  };

  // Värdet som kommer tillhandahållas till alla barnkomponenter
  const value = {
    theme,
    toggleTheme,
    backgroundColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook för att använda kontexten
export const useTheme = () => useContext(ThemeContext);
