import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps, props }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ApolloProvider client={client}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-239743330-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-239743330-1');
        `}
      </Script>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ApolloProvider>
  );
}

export default MyApp;
