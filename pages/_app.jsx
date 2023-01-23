import { useRef } from "react";
//components
import Head from "next/head";
import Script from "next/script";
//styles
import "../styles/globals.scss";
//locomotive scroll
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
//apollo
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps, props }) {
  const getLayout = Component.getLayout || ((page) => page);
  const containerRef = useRef(null);

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
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
            breakpoint: 0,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef}>
          {getLayout(
            <Component
              data-scroll-container
              ref={containerRef}
              {...pageProps}
            />,
            pageProps
          )}
        </div>
      </LocomotiveScrollProvider>
    </ApolloProvider>
  );
}

export default MyApp;
