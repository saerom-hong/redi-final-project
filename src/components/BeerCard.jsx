import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const BeerCard = ({ bier, herkunft, bewert, votes, imgUrl }) => {
  return (
    <Card sx={{ width: 250, height: 300 }}>
      <CardMedia
        component="img"
        style={{
          width: "auto",
          maxHeight: "170px",
          display: "block",
          margin: "0 auto",
        }}
        image={imgUrl}
        alt={bier}
      />
      <ThemeProvider theme={theme}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {bier}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            🔥 <b>Origin:</b> {herkunft}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            🌟 <b>Evaluation:</b> {bewert}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ✅ <b>Vote:</b> {votes}
          </Typography>
        </CardContent>
      </ThemeProvider>
    </Card>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h6: {
      fontSize: 21,
    },
  },
});

export { BeerCard };
