import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalBarTwoToneIcon from "@material-ui/icons/LocalBarTwoTone";
import "./Header.css";
import CardDrink from "./CardDrink";

const Header = () => {
  const [input, setInput] = useState("margarita");
  const [data, setData] = useState([]);
  console.log(data);

  // const searchDrink = (e) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
      )
        .then((resp) => resp.json())
        .then((data) => setData(data.drinks));
    };
    fetchData();
  }, [input]);

  return (
    <div>
      <AppBar position="sticky" className="header">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="header_title">
            CockTail
          </Typography>
          <div className="header_search">
            <SearchIcon style={{ marginLeft: "10px" }} />
            <input
              className="header_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* <IconButton
              type="submit"
              disabled={input === ""}
              onClick={searchDrink}
            >
              <LocalBarTwoToneIcon style={{ color: "white" }} />
            </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>

      {data ? (
        <Grid justify="space-evenly" container spacing={4}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
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
