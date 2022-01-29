import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const REST_API_URL = "https://hungry-skinny-cappelletti.glitch.me/";

const restLink = new RestLink({
  uri: REST_API_URL
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});

export default client;
