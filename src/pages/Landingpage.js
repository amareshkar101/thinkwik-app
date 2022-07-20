import React from "react";
import img from "../assets/img1.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/Landingpage.css";

function Landingpage() {
  const navigate = useNavigate();

  const logIn = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="i">
        <div className="i-left">
          <img className="i-img" src={img} alt="image of a woman" />
        </div>
        <div className="i-right">
          <h1 className="header">Thinkwik Technology</h1>
          <p className="description">
            We build products for the web and mobile, that change the way work
            is done, and inspire people.
          </p>
          <Button
            className="btn"
            variant="contained"
            color="primary"
            onClick={logIn}
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
