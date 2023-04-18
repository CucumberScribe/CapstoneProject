import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;s
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: left;
    background: ${({ theme }) => theme.White};
    color: ${({ theme }) => theme.primaryLight};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

  legend {
    font-size: 1.4em;
    color: black;
    font-weight: bold;
  }

  fieldset {
    margin: 5%;
    background-color: #f5f5f5;
  }

  header img {
    margin-top: 4%;
  }

  footer {
    background-color: #363636;
    width: 100%;
  }

  footer p {
    color: #F5F5F5;
    font-size: 0.8em;
    text-align: center;
    padding: 3%;
    margin-bottom: 0;
  }

  /* Desktop Viewport */
@media screen and (min-width: 769px) {
  header {
    display: block;
  }
  
  header img {
    justify-content: left;
    max-width: 25%;
  }

  fieldset {
    max-width: 40%;
    margin: auto;
    margin: 6% auto;
  }
}
  `