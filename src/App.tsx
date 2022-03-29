import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import "./App.css";
import Routing from "./routes";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
};

export default App;
