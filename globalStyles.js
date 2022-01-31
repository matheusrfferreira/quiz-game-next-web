import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: "Comic Sans MS", "Comic Sans", cursive, Arial, Helvetica, sans-serif;
  }
  body {  
    margin: 0;
    color: whitesmoke;
    text-decoration: none;
    padding: 0;
    box-sizing: border-box;
    background: #212529;
    overflow: hidden;
  }
`;