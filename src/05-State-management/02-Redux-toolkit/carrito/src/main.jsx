import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Imports de redux
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
{/* El provider va a envolver toda mi aplicación */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
