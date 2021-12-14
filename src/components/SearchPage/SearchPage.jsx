import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { BrewList } from "./BrewList";
import { BasicSelect } from "./BasicSelect";

const SearchPage = () => {
  // have states here
  const [location, setLocation] = useState("");
  const [allBrews, setAllBrews] = useState([]);
  const [filteredBrews, setFilteredBrews] = useState(allBrews);
  const [brewName, setBrewName] = useState("");
  //get data
  useEffect(() => {
    async function getBrews(location) {
      const res = await fetch(
        `https://beer-live.p.rapidapi.com/brews/${location}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "beer-live.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_X_RAPID_API_KEY,
          },
        }
      );
      const brews = await res.json();
      // console.log(brews);
      setAllBrews(brews);
    }
    if (location !== "") {
      getBrews(location);
    }
  }, [location]);
  //useEffect for filtered brewname
  useEffect(() => {
    const result = allBrews.filter(({ title }) =>
      title.toLowerCase().includes(brewName.toLowerCase())
    );
    setFilteredBrews(result);
  }, [brewName, allBrews]);

  return (
    <Layout>
      <div className="select">
        <h2>Choose your State</h2>
        <BasicSelect
          brewName={brewName}
          setBrewName={setBrewName}
          location={location}
          setLocation={setLocation}
        />
        <BrewList list={filteredBrews} />
      </div>
    </Layout>
  );
};

export { SearchPage };
