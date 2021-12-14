import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    search: {
      main: "#f5ba13",
      darker: "#053e85",
    },
  },
});

const Gosearch = () => {
  return (
    <div className="search">
      <h3>Are you curious about the breweries in your area?</h3>
      <ThemeProvider theme={theme}>
        <Button
          component={Link}
          to={"/search"}
          color="search"
          variant="contained"
          size="large"
          style={{ fontFamily: "Rubik" }}
        >
          Search the breweries
        </Button>
      </ThemeProvider>
    </div>
  );
};

export { Gosearch };
