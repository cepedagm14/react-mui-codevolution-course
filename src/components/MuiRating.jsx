import { Box, Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const MuiRating = () => {
  const [rating, setRating] = useState(null);
  console.log("rating", rating);

  const handleChange = (e, number) => {
    setRating(number);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
      />
    </Stack>
  );
};

export default MuiRating;
