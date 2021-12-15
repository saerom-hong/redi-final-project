import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const BrewsCard = ({ title, ort, id }) => {
  return (
    <Card
      sx={{ width: 400, minWidth: 250, padding: "auto", margin: "30px 20px" }}
      variant="outlined"
    >
      <CardContent>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" gutterBottom>
            {id}. {title}
          </Typography>
          <Typography svariant="h6" color="text.secondary">
            Location: {ort}
          </Typography>
        </ThemeProvider>
      </CardContent>
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
    h5: {
      fontWeight: 450,
    },
  },
});

export { BrewsCard };
