import "../../styles/globals.css";
import { ThemeProvider } from "@theme-ui/core";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { ModalStack } from "@mattjennings/react-modal-stack";
import "./registerForm.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalStack>
        <Layout>
          <SEO title="Robotics Club,WRC" />
          <Component {...pageProps} />
        </Layout>
      </ModalStack>
    </ThemeProvider>
  );
}

export default MyApp;
