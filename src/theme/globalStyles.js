import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .w-1200 {
    margin: 0 auto;
    max-width: 75rem;
  }
`;

export default GlobalStyle;
