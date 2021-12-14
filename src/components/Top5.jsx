import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BeerCard } from "./BeerCard";
import TopList from "./data/TopList.json";

const getTopList = (list, topNum) => {
  return list;
};

const DisplayCards = ({ top }) => {
  const topList = getTopList(TopList, top);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {topList.map(({ bier, herkunft, bewertungInt, votes, imgUrl }, i) => (
          <Grid item xs="auto" key={i}>
            <BeerCard
              imgUrl={imgUrl}
              bier={bier}
              herkunft={herkunft}
              bewert={bewertungInt}
              votes={votes}
              z
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Top5 = () => {
  return (
    <div className="top5">
      <h2>Top 5 German Beer</h2>
      <DisplayCards top={5} />
    </div>
  );
};

export { Top5 };
