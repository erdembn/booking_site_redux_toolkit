import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginAuthProvider } from "./contexts/LoginAuth.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <LoginAuthProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </LoginAuthProvider>
    </Provider>
  </React.StrictMode>
);
