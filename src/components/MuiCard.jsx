import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width="250px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="GrayText.secondary"
            component="p"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur natus, ipsum minus id non ratione. Eaque facere
            architecto at sequi. Alias ea tenetur optio voluptatum provident ab
            non? At, officia!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
