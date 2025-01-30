import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

const ThemeContext = createContext();

export const ThemeProviderContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ThemeContext };
