import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BrewsCard = ({ title, ort, id }) => {
  return (
    <Card sx={{ width: 400, minWidth: 250, margin: "50px 10px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {id}. {title}
        </Typography>
        <Typography svariant="h7" color="text.secondary">
          Location: {ort}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { BrewsCard };
