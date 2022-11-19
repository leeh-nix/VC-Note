import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link as MUIlink } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import ConferencingImage from "../assets/conferencing.png";
// import { logout } from "../firebase";

export default function Landing() {
  const sessionToken = sessionStorage.getItem("Auth-Token");
  // console.log(sessionToken === null ? false : true)
  const [isLoggedIn, setIsLoggedIn] = useState(!sessionToken ? false : true);

  const handleSignOut = () => {
    console.log("Sign Out");
    // sessionStorage.removeItem("Auth-Token");
    // setIsLoggedIn(false);
    // logout();
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ padding: "1.375rem 1rem", display: "flex", alignContent: "space-between" }}>
        <Typography sx={{ fontSize: "2.5rem", fontFamily: "Roboto Condensed", flex: "1", color: "#fff" }} align="left">
          <MUIlink component={Link} to="/" sx={{ marginLeft: "0.3125rem", color: "#fff" }} underline="none">
            VC-Note
          </MUIlink>
        </Typography>
        <Box sx={{ display: "flex", gap: "3rem" }}>
          {!isLoggedIn ? (
            <Button sx={{ fontSize: "1.25rem", textTransform: "none" }}>
              <MUIlink component={Link} to="/login" sx={{ marginLeft: "0.3125rem", color: "#fff" }} underline="none">
                Log In
              </MUIlink>
            </Button>
          ) : (
            <Button sx={{ fontSize: "1.25rem", textTransform: "none", color: "#fff" }} onClick={handleSignOut}>
              Sign Out
            </Button>
          )}

          <Button variant="contained" sx={{ fontSize: "1.25rem", textTransform: "none" }}>
            Start a meeting
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: "75vh", display: "flex", gap: "4rem", padding: "0rem 2rem", alignItems: "center" }}>
        <Box sx={{ maxWidth: "55%", textAlign: "left" }}>
          <Typography variant="h3">Connect with people like never before.</Typography>
          <Typography variant="body1" sx={{ fontSize: "1.25rem", marginTop: "1.25rem" }}>
            VC-Note is the most and enjoyable way to connect via video call with your families and business organisations across the world
          </Typography>
          <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center", marginTop: "32px" }}>
            <Button variant="contained" sx={{ fontSize: "1.25rem", textTransform: "none", height: "3.75rem" }}>
              Start a meeting
            </Button>
            <Typography>or</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <TextField id="outlined-basic" label="Enter meeting code" variant="outlined" />
              <Button variant="text" sx={{ color: "#6F6F70" }}>
                Join
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginTop: "2.25rem" }} />
          <Typography variant="body1" sx={{ fontSize: "1rem", color: "#fff", marginTop: "1.5rem" }}>
            Don't have an account?
            <MUIlink component={Link} to="/signup" sx={{ marginLeft: "0.3125rem" }} underline="hover">
              Get Started Now
            </MUIlink>
          </Typography>
        </Box>
        <Box sx={{ width: "40%" }}>
          <img src={ConferencingImage} alt="Conferencing" style={{ backgroundSize: "contain", width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
}
