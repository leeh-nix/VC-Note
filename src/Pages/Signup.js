import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Link as MUIlink } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ReactComponent as GoogleIcon } from "../Assets/googleicon.svg";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <Box sx={{ maxWidth: "31.25rem", margin: "0 auto", height: "100vh", position: "relative" }}>
      <Box sx={{ border: "1px solid rgba(45, 45, 45, 0.2)", borderRadius: "0.9375rem", position: "absolute", width: "100%", top: "50%", transform: "translate(0, -50%)" }}>
        <Box sx={{ maxWidth: "26.5rem", margin: "0 auto" }}>
          <Typography variant="h5" sx={{ marginTop: "1.875rem" }}>
            Sign Up
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{ textTransform: "none", color: "#374151", border: "1px solid #E5E7EB", boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)", marginTop: "1.5rem" }}
          >
            Sign up with Google
          </Button>
          <Divider sx={{ color: "#9CA3AF", marginTop: "1.5rem" }}>or use your email</Divider>
          <Box sx={{ marginTop: "1.875rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth="true"
              onChange={handleChange("name")}
              required
              sx={{ boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)", borderRadius: "0.25rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth="true"
              onChange={handleChange("email")}
              required
              sx={{ boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)", borderRadius: "0.25rem" }}
            />
            <FormControl variant="outlined" fullWidth required sx={{ boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)", borderRadius: "0.25rem" }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant="contained" fullWidth sx={{ height: "3rem", backgroundColor: "#5048E5", boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)" }}>
              Create An Account
            </Button>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox required size="small" labelStyle={{ color: "white" }} iconStyle={{ fill: "#ffcccb" }} />
              <Typography variant="body1" sx={{ fontSize: "0.875rem", color: "#374151" }}>
                I agree to the Terms of Service and Privacy Policy
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: "0.875rem", color: "#374151", marginBottom: "1.875rem" }}>
              Already a member?
              <MUIlink component={Link} to="/login" sx={{ marginLeft: "0.3125rem", color: "#5048E5" }} underline="hover">
                Log In
              </MUIlink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
