import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const BasicSelect = ({ brewName, setBrewName, location, setLocation }) => {
  function handleChange(e) {
    setLocation(e.target.value);
    // console.log(e.target.value);
  }

  function detectName(e) {
    setBrewName(e.target.value);
  }

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 200 }} variant="standard">
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={location}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value={"berlin"}>Berlin</MenuItem>
          <MenuItem value={"hessen"}>Hessen</MenuItem>
          <MenuItem value={"saarland"}>Saarland</MenuItem>
          <MenuItem value={"hamburg"}>Hamburg</MenuItem>
          <MenuItem value={"brandenburg"}>Bradenburg</MenuItem>
          <MenuItem value={"bremen"}>Bremen</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="state-customized-textbox">Brewery Name</InputLabel>
        <BootstrapInput
          id="state-customized-textbox"
          value={brewName}
          onChange={(e) => detectName(e)}
        />
      </FormControl>
    </Box>
  );
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 70px 10px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    "&:focus": {
      borderRadius: 7,
      borderColor: "#f5ba13",
      boxShadow: "0 0 0 0.1rem #f5ba13",
    },
  },
}));

export { BasicSelect };
