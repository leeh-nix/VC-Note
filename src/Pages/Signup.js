import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import { Link as MUIlink } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useAuthState } from "react-firebase-hooks/auth";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ReactComponent as GoogleIcon } from "../Assets/googleicon.svg";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../firebase";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    checked: false,
    showPassword: false,
  });

  const [isFormInvalid, setIsFormInvalid] = useState(true);
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

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
    let namecheck = !/^([A-z]){2,40}\w+/.test(values.name) ? true : false;
    let emailcheck = !isValidEmail(values.email) ? true : false;
    let ischecked = values.checked ? true : false;
    let passwordcheck = !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,19}$/.test(values.password) ? true : false;
    setIsInvalidName(namecheck);
    setIsInvalidEmail(emailcheck);
    setIsInvalidPassword(passwordcheck);
    setIsChecked(ischecked);
    if (namecheck === false && emailcheck === false && passwordcheck === false && isChecked === true) {
      setIsFormInvalid(false);
    } else {
      setIsFormInvalid(true);
    }
  };

  const register = (e) => {
    e.preventDefault();
    validate();
    if (!isFormInvalid) {
      console.log("here");
      let res = registerWithEmailAndPassword(values.name, values.email, values.password);
      console.log(res);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      user.getIdToken().then((res) => {
        sessionStorage.setItem("Auth-Token", res);
      });
      console.log(user);
      navigate("/");
    }
  }, [user, loading]);

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
            onClick={signInWithGoogle}
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
              error={isInvalidName}
              helperText={isInvalidName && "Name is required"}
              required
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth="true"
              type="email"
              error={isInvalidEmail}
              helperText={isInvalidEmail && "Please enter a valid email address"}
              onChange={handleChange("email")}
              required
            />
            <FormControl variant="outlined" fullWidth required>
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
              {isInvalidPassword && (
                <FormHelperText error id="outlined-adornment-password">
                  Your password must have atleast 8 and maximum of 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character
                </FormHelperText>
              )}
            </FormControl>
            <Button variant="contained" onClick={register} fullWidth sx={{ height: "3rem", backgroundColor: "#5048E5", boxShadow: "0px 1px 2px rgba(31, 41, 55, 0.08)" }}>
              Create An Account
            </Button>

            <FormGroup>
              <FormControlLabel
                sx={{ fontSize: "0.875rem" }}
                control={<Checkbox size="small" checked={values.checked} onChange={handleCheckBox} name="gilad" />}
                label={
                  <Typography variant="body1" sx={{ fontSize: "0.875rem", color: "#374151" }}>
                    I agree to the Terms of Service and Privacy Policy
                  </Typography>
                }
              />
              {!isChecked && <FormHelperText error>Please check this box before proceeding</FormHelperText>}
            </FormGroup>

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
