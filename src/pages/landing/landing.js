import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Typography variant="h1">Welcome to Boards</Typography>
      <Link to="/home">
        <Typography variant="h3">Login</Typography>
      </Link>
    </div>
  );
};

export default Landing;
