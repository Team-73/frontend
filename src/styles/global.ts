import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312D38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1,h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    font-size: 18px;
  }

  a:link {
    color: #fff;
    text-decoration: none;
  }
  
  /* visited link */
  a:visited {
    color: #fff;
    text-decoration: none;
  }
  
  /* mouse over link */
  a:hover {
    color: #fff;
    text-decoration: none;
  }
  
  /* selected link */
  a:active {
    color: #fff;
    text-decoration: none;
  }
`;
