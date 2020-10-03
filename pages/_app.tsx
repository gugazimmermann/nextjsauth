import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
