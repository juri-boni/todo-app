import { ThemeToggleButton } from "./ThemeButton.styles";

interface ThemeButtonProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({
  theme,
  setTheme,
}) => {
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
