import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import Router from "./main/Router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./redux/store";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  request: Operation => {
    const token = localStorage.getItem("token");

    Operation.setContext({
      headers: {
        Authorization: token ? `JWT ${token}` : ""
      }
    });
    return Operation;
  }
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <MainLayout>
              <Router />
            </MainLayout>
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}
