import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { Link as MUIlink } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
// import { useAuthState } from "react-firebase-hooks/auth";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
// import { ReactComponent as GoogleIcon } from "../assets/googleicon.svg";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    checked: false,
    showPassword: false,
  });

  const [isFormInvalid, setIsFormInvalid] = useState(true);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleCheckBox = () => {
    setValues({
      ...values,
      checked: !values.checked,
    });
  };

  const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  };

  const validate = () => {
    let emailcheck = !isValidEmail(values.email) ? true : false;
    let passwordcheck = !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,19}$/.test(values.password) ? true : false;
    setIsInvalidEmail(emailcheck);
    setIsInvalidPassword(passwordcheck);
    if (emailcheck === false && passwordcheck === false) {
      setIsFormInvalid(false);
    } else {
      setIsFormInvalid(true);
    }
  };

  const login = (e) => {
    e.preventDefault();
    validate();
    // if (!isFormInvalid) {
    //   logInWithEmailAndPassword(values.email, values.password);
    // }
  };

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) {
  //     user.getIdToken().then((res) => {
  //       sessionStorage.setItem("Auth-Token", res);
  //     });
  //     console.log(user);
  //     navigate("/");
  //   }
  // }, [user, loading]);

  return (
    <Box sx={{ width: "31.25rem", margin: "0 auto", position: "relative" }}>
      <Box sx={{ border: "1px solid #434a4a", borderRadius: "0.9375rem", position: "absolute", width: "100%", top: "50%", transform: "translate(0, -50%)" }}>
        <Box sx={{ maxWidth: "26.5rem", margin: "0 auto" }}>
          <Typography variant="h5" sx={{ marginTop: "1.875rem" }}>
            Log In
          </Typography>
          <Box sx={{ marginTop: "1.875rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <FormControl variant="filled" fullWidth required>
              <TextField
                id="filled-basic"
                label="Email Address"
                variant="filled"
                error={isInvalidEmail}
                onChange={handleChange("email")}
                required
                sx={{
                  backgroundColor: "#2e2e2e",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
              {isInvalidEmail && (
                <FormHelperText error id="filled-basic">
                  Please enter a valid email address
                </FormHelperText>
              )}
            </FormControl>
            <FormControl variant="filled" fullWidth required>
              <InputLabel htmlFor="outlined-adornment-password" error={isInvalidPassword}>
                Password
              </InputLabel>
              <FilledInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                required
                error={isInvalidPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{
                        color: "#859393",
                      }}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{
                  backgroundColor: "#2e2e2e",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  "&:hover": {
                    backgroundColor: "#2a2a2a",
                  },
                }}
              />
              {isInvalidPassword && (
                <FormHelperText error id="outlined-adornment-password">
                  Your password must have atleast 8 and maximum of 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character
                </FormHelperText>
              )}
            </FormControl>
            <Box sx={{ display: "flex", alignItems: "center", alignContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox required size="small" checked={values.checked} onChange={handleCheckBox} />
                <Typography variant="body1" sx={{ fontSize: "0.875rem", color: "#aab3b3" }}>
                  Keep me logged in
                </Typography>
              </Box>
              <Typography align="right" variant="body1" sx={{ fontSize: "0.875rem", color: "#374151", flex: "1" }}>
                <MUIlink component={Link} to="/login" sx={{ marginLeft: "0.3125rem", color: "#5048E5" }} underline="hover">
                  Forgot Password?
                </MUIlink>
              </Typography>
            </Box>

            <Button variant="contained" onClick={login} fullWidth sx={{ height: "3rem", backgroundColor: "#5048E5", boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)" }}>
              Log In
            </Button>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              fullWidth
              // onClick={signInWithGoogle}
              sx={{ textTransform: "none", color: "#fff", border: "1px solid #E5E7EB", boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)", height: "3rem" }}
            >
              Log in with Google
            </Button>
            <Typography align="left" variant="body1" sx={{ fontSize: "0.875rem", color: "#aab3b3", marginBottom: "1.875rem" }}>
              Not a member?
              <MUIlink component={Link} to="/signup" sx={{ marginLeft: "0.3125rem", color: "#5048E5" }} underline="hover">
                Sign Up
              </MUIlink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
