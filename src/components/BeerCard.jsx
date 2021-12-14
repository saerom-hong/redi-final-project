import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BeerCard = ({ bier, herkunft, bewert, votes, imgUrl }) => {
  return (
    <Card sx={{ width: 250, height: 300 }}>
      <CardMedia
        component="img"
        style={{
          width: "auto",
          maxHeight: "150px",
          display: "block",
          margin: "0 auto",
        }}
        image={imgUrl}
        alt={bier}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bier}
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Origin: {herkunft}
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Evaluation: {bewert}
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          Vote: {votes}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { BeerCard };
