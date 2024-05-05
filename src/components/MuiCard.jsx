import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

function MuiCard() {
  return (
    <>
      <Box width="300px">
              <Card>
                  <CardMedia
                      component='img'
                      height='140'
                      image="https://source.unsplash.com/random"
                      alt='unsplash image'
                  />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              porro amet inventore, voluptatem excepturi sapiente veni
            </Typography>

            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default MuiCard;
