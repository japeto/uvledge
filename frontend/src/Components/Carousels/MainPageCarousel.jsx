import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import MainFeaturedPost from "./../Cards/MainFeaturedPost";

import post from "./../../Services/Utils/PostInformation/mainpostInformation.json"

function MainPageCarousel() {

  return (
    <Carousel autoPlay={false}>
      {post.map((item, i) => {
        return (
          <Paper key={i}>
            <MainFeaturedPost post={item} />
          </Paper>
        );
      })}
    </Carousel>
  )

}

export { MainPageCarousel }