import React from "react";
import img from "../assets/signup.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import "../styles/Signup.css";

function Signup() {
  const paperStyle = {
    padding: "0px 30px",
    width: "300px",
    height: "70vh",
    margin: " auto",
  };

  const marginBtw = {
    margin: "10px auto",
  };

  return (
    <div className="i-s">
      <div className="i-left-s">
        <img className="i-img-s" src={img} alt="Signing up" />
      </div>
      <div className="i-right-s">
        <Grid>
          <Paper style={paperStyle}>
            <form
            // onSubmit={loginFn}
            >
              <Typography style={marginBtw}>
                <h1 className="headed-s">Sign Up</h1>
              </Typography>

              <TextField
                id="name"
                variant="outlined"
                // value={userId}
                // onChange={updateSignupData}
                label="Name"
                placeholder="Enter Name"
                style={marginBtw}
                fullWidth
                required
              />

              <TextField
                id="email"
                variant="outlined"
                // value={userPassword}
                // onChange={updateSignupData}
                label="Email"
                placeholder="Enter Email"
                style={marginBtw}
                type="text"
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
                SignUp
              </Button>

              {/* toggle to sing-up */}
              <Typography style={marginBtw}>
                Already a member?
                <Link to="/login" className="signin-style">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
