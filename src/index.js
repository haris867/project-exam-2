import React from "react";
import ReactDOM from "react-dom/client";
import "././App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
