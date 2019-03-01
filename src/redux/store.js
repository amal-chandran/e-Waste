import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["router"]
};
const history = createBrowserHistory();

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

let store = createStore(
  persistedReducer,
  compose(applyMiddleware(routerMiddleware(history)))
);
let persistor = persistStore(store);

export { store, persistor, history };
