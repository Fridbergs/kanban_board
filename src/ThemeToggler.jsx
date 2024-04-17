import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme(); // Använda hook för att få åtkomst till tema och toggle-funktionen

  return (
    <button onClick={toggleTheme}>
      Byt backgrundsfärg: {theme === "light" ? "ljus" : "mörkt"}
    </button> // Knappen visar nuvarande tema och byter tema när den klickas på
  );
}

export default ThemeToggler;
