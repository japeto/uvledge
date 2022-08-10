import React from "react";
import { Link, useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function UserLoginCard() {

  const navigate = useNavigate();

  const navigateToLoginHub = () => {
    navigate("login");
  };


  return (
    <Grid item xs={4} alignItems="flex-end">
      <Box
        container
        justifyContent="flex-end"
        sx={{ display: "flex" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <PersonIcon sx={{ fontSize: "4rem" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "auto",
            mb: "auto",
          }}
        >
          <Typography sx={{ color: "#8b8b8b", fontWeight: "bold" }}>
            {"Mi cuenta"}
          </Typography>

          <Typography sx={{ color: "#8b8b8b", fontSize: "0.7rem" }}>
            <Link to="login">{"Ingresa"}</Link> {"o"} <Link to="login">{"registrate"}</Link>
          </Typography>
          
        </Box>
      </Box>
    </Grid>
  )
}

export { UserLoginCard }