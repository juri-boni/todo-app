import React from "react";
import { ThemeToggleButton } from "./ThemeButton.styles";

export const ThemeButton = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </ThemeToggleButton>
    </>
  );
};
