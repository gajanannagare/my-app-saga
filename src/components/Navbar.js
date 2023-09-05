import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>
          </Typography>
          <Typography>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="add-user"
            >
              Add User
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
