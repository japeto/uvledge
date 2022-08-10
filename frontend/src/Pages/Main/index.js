//Dependences
import React from 'react'
import { Routes, Route } from "react-router-dom";

//MUI components
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

//Components
import Header from "../../Layouts/Header";
import FeaturedPost from "../../Components/Cards/FeaturedPostCard";
import Footer from "../../Layouts/Footer/index"
import Login from "../Login";
import { NoticePostCard } from "../../Components/Cards/NoticePostCard";
import { UserLoginCard } from "../../Components/Cards/UserLoginCard";

//JSON package
import featuredPosts from "./../../Services/Utils/PostInformation/postInformation.json"
import sections from "./../../Services/Utils/PostInformation/mainMenuSections.json"
import { NavegationPathCard } from "../../Components/Cards/NavegationPathCard";
import { MainPageTitle } from "../../Components/Titles/MainPageTitle";
import { MainPageCarousel } from "../../Components/Carousels/MainPageCarousel";

//Functions
import { isLogged } from "./../../Services/Utils/AxiosPetitions/AxiosLogin"

const theme = createTheme();

export default function Principal() {

  const [UserIsLogged, setUserIsLogged] = React.useState();

  React.useState(async () => {
    const [userlogged, err] = await isLogged();
    if(err){
      setUserIsLogged(false)
      return;
    }
    
    console.log(userlogged.data.logged)
    setUserIsLogged(userlogged.data.logged)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div sx={{ backgroundColor: "red" }}>
        <Header maxWidth={false} sections={sections} />
        <Container sx={{ maxWidth: "sm" }}>
          <Box sx={{ height: 150, mt: "1rem" }}>
            <Grid container spacing={2}>
              <NavegationPathCard />
              {!UserIsLogged ?
                <UserLoginCard />
                :
                null}

              <MainPageTitle />
            </Grid>
          </Box>
          <main>
            <MainPageCarousel />

            <Grid container spacing={1} sx={{ mt: 0.5, mb: "100px" }}>
              {featuredPosts.map((post) => (
                <FeaturedPost
                  sx={{ maxWidth: "12%" }}
                  key={post.title}
                  post={post}
                />
              ))}
              <NoticePostCard />
            </Grid>
          </main>
        </Container>
      </div>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer description="2022 Universidad del Valle - Vigilada MinEducacion" />
    </ThemeProvider>
  );
}
