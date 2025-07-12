import "../../styles/globals.css";
import { ThemeProvider } from "@theme-ui/core";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { ModalStack } from "@mattjennings/react-modal-stack";
import "./registerForm.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalStack>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <SEO title="Robotics Club, WRC" />
          <Component {...pageProps} />
        </Layout>
      </ModalStack>
    </ThemeProvider>
  );
}

export default MyApp;
