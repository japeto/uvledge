import React from "react";
import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";


function NoticePostCard() {
  return (
    <Card sx={{ ml: "1rem", maxWidth: "26%", maxHeight: "200px" }}>
      <CardActionArea>
        <CardHeader
          title="Noticias"
          sx={{
            fontWeight: "bold",
            color: "white",
            bgcolor: "#c20e1a",
            pt: "5px",
            pb: "5px",
          }}
        />
        <CardContent sx={{ pr: 0, mr: 0 }}>
          <CardMedia
            sx={{ mr: "10px", width: "40%", display: "inline-block" }}
            component="img"
            image="https://i.blogs.es/d8a22c/poeta_lunera_46878434_357901494940657_8644354556054754798_n/1366_2000.webp"
            alt="Feria del libro"
          />
          <Box sx={{ width: "55%", display: "inline-block" }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
              color="text.secondary"
            >
              Feria internacional del libro
            </Typography>
            <Typography sx={{ fontSize: "0.7rem" }} color="text.secondary">
              Agencia de noticias univalle hace presencia en la XXXIV
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { NoticePostCard };
