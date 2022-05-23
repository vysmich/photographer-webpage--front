import "../styles/globals.scss";

import { useEffect } from "react/cjs/react.production.min";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import Layout from "../src/components/layout/Layout";
import layoutGql from "../src/query/LayoutGql";

function MyApp({ Component, pageProps, props }) {
  return (
    <ApolloProvider client={client}>
      <Layout contextLocale={props.contextLocale} layoutData={props.layout}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  return await layoutGql(context.router);
};
export default MyApp;
