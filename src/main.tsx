import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./globalStyles";
import { Theme } from "./components/Theme/index.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
