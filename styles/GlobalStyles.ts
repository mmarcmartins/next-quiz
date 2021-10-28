import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: cornflowerblue;
  color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  &:focus{
    outline: none;
  }
}
#__next{
  display: flex;
  height: 100vh;
}
ul{
  margin:0;
  list-style:none;
  padding:0;
}
`;
