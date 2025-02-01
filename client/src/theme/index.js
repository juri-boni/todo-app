import { darkTheme, lightTheme } from "./colors";
import { spacing } from "./spacing";
import { sizes } from "./sizes";
import { fonts } from "./fonts";

export const themes = {
  dark: {
    colors: darkTheme,
    spacing,
    sizes,
    fonts: fonts, // Access all font properties
  },
  light: {
    colors: lightTheme,
    spacing,
    sizes,
    fonts: fonts, // Access all font properties
  },
};
