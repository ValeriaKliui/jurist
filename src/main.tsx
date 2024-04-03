import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Theme } from "./components/Theme/index.tsx";
import { GlobalStyles } from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
);
