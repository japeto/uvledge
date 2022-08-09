import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const sections2 = [
  { title: "Portal Transparencia", url: "#" },
  { title: "Atención Ciudadano", url: "#" },
  { title: "Directorio", url: "#" },
  { title: "Correo", url: "#" },
  { title: "Biblioteca", url: "#" },
  { title: "Mapa sitio", url: "#" },
];

function Header(props) {
  const { sections } = props;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Box
          component="img"
          sx={{ mt: "2rem", ml: "3rem", width: "40%", display: "inline-block" }}
          alt="Universidad del valle"
          src="https://ingresealau.edu.co/wp-content/uploads/2022/03/logo-universidad-del-valle.png"
        />
        <Toolbar sx={{ width: "50%", display: "inline-block", mt: "1rem" }}>
          {sections2.map((section) => (
            <Link
              noWrap
              key={section.title}
              variant="button"
              href={section.url}
              underline="none"
              sx={{
                p: 1,
                flexShrink: 0,
                fontWeight: "bold",
                bgcolor: "#818286",
                color: "white",
                fontSize: "0.7rem",
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
        <Box sx={{ height: 100, maxWidth: "lg" }}></Box>
      </Grid>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            justifyContent: "space-between",
            overflowX: "auto",
            bgcolor: "#d43821",
          }}
        >
            <Container sx={{ maxWidth: "sm" }}>
          {sections.map((section) => (
            <Link
              noWrap
              key={section.title}
              variant="button"
              href={section.url}
              underline="none"
              sx={{ p: 1, flexShrink: 0,  color: "white" }}
            >
              {section.title}
            </Link>
          ))}
      </Container>
        </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
