import "./App.css";
// import VideoGrid from "./Components/VideoGrid";
// import RightSidebar from "./Components/RightSidebar";
// import LeftSidebar from "./Components/LeftSidebar/LeftSidebar";
// import PermanentDrawerLeft from "./Components/PermanentDrawerLeft";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
