import React from "react";
import Grid from "@mui/material/Grid";
import { BrewsCard } from "./BrewsCard";

const BrewList = ({ list }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      rowSpacing={1}
    >
      {list.map(({ title, ort }, i) => (
        <Grid item key={i}>
          <BrewsCard id={i + 1} title={title} ort={ort} />
        </Grid>
      ))}
    </Grid>
  );
};

export { BrewList };
