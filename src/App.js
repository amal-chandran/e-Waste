import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import Router from "./main/Router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { store, history, persistor } from "./redux/store";
import { BASE_URL } from "./config";

const client = new ApolloClient({
  uri: `${BASE_URL}/graphql`,
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
          <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
              <MainLayout>
                <Router />
              </MainLayout>
            </ConnectedRouter>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    );
  }
}
