import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Analytics from '../../analytics'

export default function Character({ details }) {
  const handleClick = () => {
    Analytics.event({
      category: "Characters Details",
      action: "LEARN MORE CLICKED",
      label: "Learn More", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={details.name}
        height="140"
        src={details?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Gender: ${details.gender}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Species: ${details.species}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Status: ${details.status}`}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button size="small" onClick={handleClick} >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}