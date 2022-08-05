import * as React from 'react'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

export default function LoginConfirm ({ optionLogin }) {
    const { register, handleSubmit } = useForm()

    const tipoids = [{value: 'C.C', label: 'C.C'}, { value: 'T.I', label: 'T.I'} ]

    const onSubmit = data => {
      console.log(data)
    }

    if (optionLogin === 'login') {
      return (
        <div>
          <Box component = 'form' onSubmit = {handleSubmit} sx = {{ mt: 1 }}>
              <TextField margin = 'normal' required fullWidth id = 'codigo' label = 'Codigo de estudiante' name = 'codigo' autoFocus/>
              <TextField margin = 'normal' required fullWidth name = 'contraseña' label = 'Contraseña' type = 'password' id = 'contraseña'/>
              <Button type = 'submit' fullWidth onClick = {handleSubmit(onSubmit)} variant = 'contained' sx = {{ mt: 3, mb: 2, bgcolor: '#c52636'}}>
                Ingresar
              </Button>
              <Grid container>
                <Grid item xs> <Link href="#" variant="body2"> Forgot password? </Link> </Grid>
              </Grid>
          </Box>
        </div>
      )
    } else {
      return (
        <div>
          <Grid container spacing = {2} component = 'form' onSubmit = {handleSubmit} sx = {{ mt: 1}}>
            <Grid item xs = {2}>
              <TextField select label = 'Tipo id' defaultValue = 'C.C' {...register('tipo_id', { required: true })}>
                {tipoids.map((option) => (
                  <MenuItem key = {option.value} value = {option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs = {4}>
              <TextField label = 'Identificacion' {...register('identificacion', { required: true })} />
            </Grid>
            <Grid item xs = {6}>
              <TextField label = 'Codigo de estudiante' {...register('codigoestudiante', { required: true })}/>
            </Grid>
            <Grid item xs = {2}/>
            <Grid item xs = {4}> <TextField label = 'Nombre completo' {...register('nombrecompleto', { required: true })}/> </Grid>
            <Grid item xs = {6}> <TextField label = 'Correo electronico' {...register('correo', { required: true })}/> </Grid>
            <Grid item xs = {2}/> 
            <Grid item xs = {10} > <TextField label = 'Contraseña' {...register('contraseña', { required: true })} sx = {{ maxWidth: 'lg' }} /></Grid>
            <Button type = {onSubmit} onClick = {handleSubmit(onSubmit)} fullWidth variant = 'contained' sx = {{ mt: 3, mb: 2, bgcolor: '#c52636'}}>
                Registrarme
            </Button>
          </Grid>
        </div>
      )
    }
}



