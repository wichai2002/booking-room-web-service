import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from 'redux'

import reducers from "./reducers";

const root = document.getElementById("root")!;

const store = createStore(reducers)


ReactDOM.createRoot(root as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
)
