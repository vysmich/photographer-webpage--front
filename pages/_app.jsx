import "../styles/globals.scss";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps, props }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ApolloProvider>
  );
}

export default MyApp;
