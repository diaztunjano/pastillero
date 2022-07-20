import React from "react";
import "../../styles/Navbar.css";
import { AppBar, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <p className="title">Mi pastillero</p>
          <SearchIcon sx={{ marginLeft: "auto" }} />
          <ShoppingCartIcon sx={{ marginLeft: "25px" }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
