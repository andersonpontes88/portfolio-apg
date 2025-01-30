import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProviderContext } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/global.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>
      <GlobalStyle />
      <App />
    </ThemeProviderContext>
  </StrictMode>
);
