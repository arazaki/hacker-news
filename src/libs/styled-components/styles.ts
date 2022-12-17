import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
    overflow: hidden;
    height: -webkit-fill-available;
  }
  html, body{
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.light};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.background.dark};
  }
  button, input{
    font-family: "Roboto", sans-serif;
  }

  body{
    height: 100vh;
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }

  h1, h2, h3{
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  h1{
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }


  h2{
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  h3{
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  #root, .App{
    height: 100%;
  }

  .App{
    
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 56px auto;
    max-width: 1280px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.background.dark};
    position: relative;
  }
`;

export default GlobalStyle;
