import * as React from 'react'
import { useState } from 'react'
import Principal from '../Principal/Principal'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { SignUp } from './SignUp'
import { Login } from './Login'
import Link from '@mui/material/Link'
import { ToggleButtonGroup, ToggleButton, Box, Paper, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Routes, Route, useNavigate } from 'react-router-dom'


export default function LoginForm() {
  const [loginOption, setLoginOption] = useState('login')

  const navigate = useNavigate()

  const navigateToPrincipal = () => {
    navigate(-1)
  }

  const handleLogin = (event, newLogin) => {
    if (newLogin !== null) {
      setLoginOption(newLogin)
    }
  }

  return (
    <div>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{ backgroundImage: 'url(https://lazosdelagente.com/wp-content/uploads/2019/07/Santiago-de-cali-1250x800.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography display="inline" variant="h4" sx={{ color: '#8b8b8b' }}>Plataforma </Typography><Typography display="inline" variant="h4" sx={{ color: '#c52636', mb: '3rem' }}>UVLedge</Typography>
            <ToggleButtonGroup value={loginOption} exclusive onChange={handleLogin} aria-label='login asignar'>
              <ToggleButton value='login' aria-label='login asignado'>
                <LoginIcon />
                <Typography variant="h8" sx={{ ml: '1rem', color: '#8b8b8b' }}>Iniciar Sesión</Typography>
              </ToggleButton>
              <ToggleButton value='sigin' aria-label='register asignado'>
                <PersonAddIcon />
                <Typography variant="h8" sx={{ ml: '1rem', color: '#8b8b8b' }}>Registrarme</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            {loginOption === 'login' ?
              <Login />
              :
              <SignUp />
            }

            <Grid container sx={{ mt: '4rem' }}>
              <Grid item xs> <Link onClick={navigateToPrincipal} variant="body2"> Regresar </Link> </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Routes>
        <Route path='principal' element={<Principal />} />
      </Routes>
    </div>
  )
}