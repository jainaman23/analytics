import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Character from "../Character";
import Analytics from '../../analytics'

const CharactersListing = () => {
  const [characters, setCharacters] = useState({ info: {}, results: [] });

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "LSIT");
        setCharacters(res);
      });
  }, []);

  const handleShowMore = () => {
    Analytics.event({
      category: "Characters Listing",
      action: "SHOW MORE CLICKED",
      label: "Show More", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });

    const nextUrl = characters.info.next;
    fetch(nextUrl)
      .then((res) => res.json())
      .then((res) => {
        const prevResult = characters.results;
        setCharacters({ ...res, results: [...prevResult, ...res.results] });
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {characters.results.map((itm) => {
          return (
            <Grid item xs={3}>
              <Character key={itm.id} details={itm} />
            </Grid>
          );
        })}
        {characters.info.next && (
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleShowMore}>Show More</Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default CharactersListing;
