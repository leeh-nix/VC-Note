import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import generateMuiTheme from "./mui/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={generateMuiTheme()}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={5000}
        maxSnack={3}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
