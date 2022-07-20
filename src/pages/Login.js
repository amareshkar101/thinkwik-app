import React from "react";
import img from "../assets/login.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import "../styles/Login.css";

function Login() {
  const paperStyle = {
    padding: "0px 30px",
    width: "300px",
    height: "60vh",
    margin: " auto",
  };

  const marginBtw = {
    margin: "10px auto",
  };

  return (
    <div className="i-l">
      <div className="i-left-l">
        <img className="i-img-l" src={img} alt="Logging in" />
      </div>
      <div className="i-right-l">
        <Grid>
          <Paper style={paperStyle}>
            <form
            // onSubmit={loginFn}
            >
              <Typography style={marginBtw}>
                <h1 className="header">Sign In</h1>
              </Typography>

              <TextField
                id="email"
                variant="outlined"
                // value={userId}
                // onChange={updateSignupData}
                label="Email"
                placeholder="Enter Email"
                style={marginBtw}
                fullWidth
                required
              />

              <TextField
                id="password"
                variant="outlined"
                // value={userPassword}
                // onChange={updateSignupData}
                label="Password"
                placeholder="Enter Password"
                style={marginBtw}
                type="password"
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                style={marginBtw}
                fullWidth
                color="primary"
              >
                SignIn
              </Button>

              {/* toggle to sing-up */}
              <Typography style={marginBtw}>
                Not a member?
                <Link to="/signup" className="signup-style">
                  Sign up
                </Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
