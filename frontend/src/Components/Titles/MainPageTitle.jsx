import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";


function MainPageTitle() {
  return (
    <Grid item xs={12}>
      <Typography
        display="inline"
        variant="h4"
        sx={{ color: "#8b8b8b" }}
      >
        Plataforma{" "}
      </Typography>
      <Typography
        display="inline"
        variant="h4"
        sx={{ color: "#c52636" }}
      >
        UVLedge
      </Typography>
    </Grid>
  )
}

export { MainPageTitle }