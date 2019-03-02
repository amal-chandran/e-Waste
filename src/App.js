import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import Router from "./main/Router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import { store, history, persistor } from "./redux/store";

const client = new ApolloClient({
  uri: "http://192.168.0.7:8000/graphql",
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
