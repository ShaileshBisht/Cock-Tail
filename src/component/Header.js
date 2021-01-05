import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocalBarIcon from "@material-ui/icons/LocalBar";

import SearchIcon from "@material-ui/icons/Search";

import "./Header.css";
import CardDrink from "./CardDrink";
import { IconButton } from "@material-ui/core";

const Header = () => {
  const [input, setInput] = useState("");
  const [inputTemp, setInputTemp] = useState("");
  const [data, setData] = useState([]);
  console.log(data);

  const searchDrink = (e) => {
    e.preventDefault();
    setInputTemp(input);
    setInput("");
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputTemp}`
      )
        .then((resp) => resp.json())
        .then((data) => setData(data.drinks));
    };
    fetchData();
  }, [inputTemp]);

  return (
    <div>
      <AppBar position="sticky" className="header">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            className="header_title"
            onClick={(e) => setInputTemp("")}
          >
            CockTail
          </Typography>
          <form className="header_search">
            <SearchIcon style={{ marginLeft: "10px" }} />
            <input
              className="header_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <IconButton
              type="submit"
              disabled={input === ""}
              onClick={searchDrink}
              className="header_searchIcon"
            >
              <LocalBarIcon style={{ color: "white" }} />
            </IconButton>
          </form>
        </Toolbar>
      </AppBar>

      {data ? (
        <Grid justify="space-evenly" container spacing={1}>
          {data.map((item) => (
            <Grid item xs={12} sm={5} md={4} lg={3} xl={4}>
              <CardDrink key={item.idDrink} info={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="header_noResult">
          <Typography variant="h1" component="h2" gutterBottom>
            No Search Result
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Header;
