import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-padding-top: 80px;
    scroll-behavior: smooth;

    @media (max-width: 1024px) {
      font-size: 14px; // Reduzir fontes em tablets
    }

    @media (max-width: 768px) {
      font-size: 12px; // Reduzir fontes em dispositivos móveis
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    transition: all 0.3s;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
