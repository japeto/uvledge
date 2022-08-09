import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Footer from './Footer'
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Login from '../Login'
import {Routes, Route, useNavigate} from 'react-router-dom'

const sections = [
    { title: 'Inicio', url: '#' },
    { title: 'La Universidad', url: '#' },
    { title: 'Estudia en Univalle', url: '#' },
    { title: 'Sedes Regionales', url: '#' },
    { title: 'Investigación', url: '#' },
    { title: 'Internalización', url: '#' },
    { title: 'Publicaciones', url: '#' },
    { title: 'Campus Virtual', url: 'https://campusvirtual.univalle.edu.co/moodle/' }
  ]

const mainFeaturedPost = [
    {
      title: '¡Bienvenido!',
      description:
        'Nos encontramos en construcción',
      image: 'https://www.eltiempo.com/files/article_main/uploads/2018/07/27/5b5b8e2d7b3a3.jpeg',
      imageText: 'main image description'
    },
    {
      title: 'UVLedge',
      description:
        'Frontend de prueba de conocimientos',
      image: 'https://www.cali.gov.co/turismo/publicaciones/154205/cali-nuevamente-nominada-como-destino-turistico-por-excelencia/info/principal/media/pubInt/thumbs/thpub_700X400_154205.jpg',
      imageText: 'main image description'
    }
  ]

const featuredPosts = [
    {
      title: 'Reclutamiento',
      image: 'https://cdn2.iconfinder.com/data/icons/business-804/24/deal-contract-agreement-handshake-hand-512.png',
      imageLabel: 'Image Text'
    },
    {
      title: 'Contacto',
      image: 'https://cdn2.iconfinder.com/data/icons/business-804/24/deal-contract-agreement-handshake-hand-512.png',
      imageLabel: 'Image Text'
    },
    {
      title: 'Eventos',
      image: 'https://cdn2.iconfinder.com/data/icons/business-804/24/loudspeaker-promotion-advertising-bullhorn-megaphone-marketing-512.png',
      imageLabel: 'Image Text'
    },
    {
      title: 'Eva Lab',
      image: 'https://cdn2.iconfinder.com/data/icons/business-804/24/computer-seo-startup-start-launch-rocket-512.png',
      imageLabel: 'Image Text'
    },
    {
      title: 'Desarrollo',
      image: 'https://cdn0.iconfinder.com/data/icons/education-364/24/school-programming-laptop-learning-coding-education-512.png',
      imageLabel: 'Image Text'
    }
  ]

const theme = createTheme()

export default function Principal () {
    const navigate = useNavigate()

    const navigateToLoginHub = () => {
      navigate('login')
    }

    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="fullwidth" sx={{ mt: 0.5 }}>
        <Header sections={sections} sx = {{ mb: '2rem' }}/>
        <Box sx={{ height: 150, mt: '1rem'}}>
          <Grid container spacing = {2}>
            <Grid item xs = {8} sx = {{ mb: '2rem'}}><LocationOnIcon/><Typography variant="h8" sx = {{ color: '#8b8b8b' }}>Inicio</Typography></Grid>
            <Grid item xs = {4} alignItems="flex-end">
              <Box onClick = {navigateToLoginHub} component = 'button' sx = {{ ml: '8rem' }}>
                <PersonIcon/>
                <Typography variant="h8" sx = {{ color: '#8b8b8b', fontWeight: 'bold' }}> Inicio </Typography>
                <Typography variant="h8" sx = {{ color: '#8b8b8b' }}>Ingresa o registrate</Typography>
              </Box>
            </Grid>
            <Grid item xs = {12}><Typography display="inline" variant="h4" sx = {{ color: '#8b8b8b' }}>Plataforma </Typography><Typography display="inline" variant="h4" sx = {{ color: '#c52636' }}>UVLedge</Typography></Grid>
          </Grid>
        </Box>
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Carousel autoPlay = {false} >
            {
              mainFeaturedPost.map((item, i) => {
                return (
                <Paper key = {i}>
                  <MainFeaturedPost post={item} />
                </Paper>
                )
              }
              )
            }
          </Carousel>
          <Grid container spacing={2} sx={{ mt: 0.5 }}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} sx = {{ ml: '2rem' }}/>
            ))}
            <Card sx = {{maxWidth: 345, ml: '18rem'}}>
              <CardActionArea>
                <CardHeader title = 'Noticias' sx = {{ fontWeight: 'bold', color: 'white', bgcolor: '#c20e1a' }}/>
                <CardMedia component = 'img' height= '100' image = 'https://i.blogs.es/d8a22c/poeta_lunera_46878434_357901494940657_8644354556054754798_n/1366_2000.webp' alt = 'Feria del libro'/>
                <CardContent>
                  <Typography variant = 'h9' color = 'text.secondary'>
                    Agencia de noticias univalle hace presencia en la XXXIV Feria internacional del libro
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
          </Grid>
          
        </main>
      </Container>
      <Routes>
        <Route path = 'login' element = {<Login/>}/>
      </Routes>
      <Footer
        description="2022 Universidad del Valle - Vigilada MinEducacion"
      />
    </ThemeProvider>
    )
}