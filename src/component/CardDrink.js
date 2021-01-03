import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./CardDrink.css";
import Box from "@material-ui/core/Box";

const CardDrink = ({ info }) => {
  return (
    <Card className="card">
      <CardMedia
        className="card_media"
        image={info.strDrinkThumb}
        title={info.strDrink}
      />
      <CardContent>
        <Box
          fontWeight="fontWeightBold"
          fontSize={25}
          textAlign="center"
          letterSpacing={3}
          lineHeight={2}
          m={1}
        >
          {info.strDrink}
        </Box>

        <Box
          fontWeight="fontWeightRegular"
          fontSize={18}
          fontFamily="Monospace"
          textAlign="center"
          m={1}
          fontStyle="oblique"
          className="card_instruction"
        >
          {info.strInstructions}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardDrink;
