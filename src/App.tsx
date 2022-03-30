import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  gql,
} from "@apollo/client";

import { offsetLimitPagination } from "@apollo/client/utilities";
import "./App.css";
import Routing from "./routes";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: offsetLimitPagination(),
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
};

export default App;
