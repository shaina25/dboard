import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
   
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  
   
    
  }

 
  button3 {border-radius: 12px;
    background-color: rgb(231, 40, 88); 
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 40px;
    font-size: large;
    font-style: inherit;
    font-family: 'Times New Roman', Times, serif; 
`
