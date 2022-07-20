import React from "react";
import '../../styles/Navbar.css';
import { AppBar, Toolbar } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return <div>
    <AppBar>
        <Toolbar>
            <MenuIcon/>
            <p>Mi pastillero</p>
            <SearchIcon/>
            <ShoppingCartIcon/>
        </Toolbar>
    </AppBar>
  </div>;
};

export default Navbar;
