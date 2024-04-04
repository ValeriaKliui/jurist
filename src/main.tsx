import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { AppProvider } from "./providers/App";
import { Theme } from "./providers/Theme/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Theme>
          <GlobalStyles />
          <App />
        </Theme>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
