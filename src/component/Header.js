import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalBarTwoToneIcon from "@material-ui/icons/LocalBarTwoTone";
import TextField from "@material-ui/core/TextField";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="sticky" className="header">
      <Toolbar>
        <Typography variant="h6" color="inherit" className="header_title">
          Cock-Tail
        </Typography>
        <form className="header_search">
          <SearchIcon />
          <TextField
            className="header_input"
            placeholder="Drink name..."
            id="standard-basic"
          />
          <IconButton>
            <LocalBarTwoToneIcon />
          </IconButton>
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
