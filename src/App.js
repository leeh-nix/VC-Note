import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meeting from "./Pages/Meeting";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto Condensed",
    },
    body1: {
      fontFamily: "Inter",
    },
    button: {
      fontFamily: "Inter",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
