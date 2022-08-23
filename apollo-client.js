import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:1337/graphql",
  uri: process.env.NEXT_PUBLIC_BACKEND_URI,
  cache: new InMemoryCache(),
});
export default client;
