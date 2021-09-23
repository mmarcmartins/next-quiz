import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { Theme } from "../styles/Theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
