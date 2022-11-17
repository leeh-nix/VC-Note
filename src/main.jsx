import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import generateMuiTheme from "./mui/theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={generateMuiTheme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
