import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textParagraph};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    transition: .12s ease;
    cursor: pointer;
  }
`

export default GlobalStyles;