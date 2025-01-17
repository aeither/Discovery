import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "../components/header";
import MobileNavigation from "../components/mobile-navigation";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Box>{" "}
      <MobileNavigation />
    </ChakraProvider>
  );
}

export default App;
