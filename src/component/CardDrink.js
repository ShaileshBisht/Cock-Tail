import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./CardDrink.css";

const CardDrink = ({ info }) => {
  return (
    <Card className="card">
      <CardMedia
        className="card_media"
        image={info.strDrinkThumb}
        title={info.strDrink}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {info.strDrink}
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          className="card_instruction"
        >
          {info.strInstructions}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDrink;
