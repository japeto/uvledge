import React from "react";
import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function NavegationPathCard() {
  return (
    <Grid item xs={8} sx={{ mb: "2rem" }}>
      <LocationOnIcon
        sx={{
          width: "1rem",
          m: "auto",
          mb: "4px",
          display: "inline-block",
          color: "#8b8b8b",
        }}
      />
      <Typography
        sx={{
          display: "inline-block",
          color: "#8b8b8b",
          width: "1rem",
          m: "auto",
        }}
      >
        /Inicio/
      </Typography>
    </Grid>
  )
}

export {NavegationPathCard}