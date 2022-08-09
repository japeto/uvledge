import React, {useState} from 'react';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { loginInformationValidator } from '../../Assets/Yup/validateLogin';
import { useNavigate } from "react-router-dom";
import {login as LoginFunction} from "./AxiosLogin"

function Login() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (LoggedIn) return navigate("/");
  }, [LoggedIn]);

  const formik = useFormik({
    initialValues: {
      id: '',
      password: ''
    },
    validationSchema: loginInformationValidator
  });

  const tryLogin = (values) =>{
    LoginFunction(values).then(([res, err]) => {
      if(err) return;
      setLoggedIn(true);
    })
  }

  const validateValues = async () => {
    await formik.validateForm();
    for (var key in formik.values) {
      formik.setFieldTouched(key, true);
    }

    return formik.isValid
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const valuesAreValid = await validateValues();
    if(valuesAreValid) tryLogin(formik.values);


  }

  return (
    <div>
      <Box component='form' onSubmit={onSubmit} sx={{ mt: 1 }}>
        <TextField
          fullWidth
          error={Boolean(formik.touched.id && formik.errors.id)}
          helperText={formik.touched.id && formik.errors.id}
          label="Código del estudiante"
          name="id"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          required
          margin='normal'
          value={formik.values.id}
        />
        <TextField
          fullWidth
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin='normal'
          label="Contraseña"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          required
          value={formik.values.password}
          type={'password'}
        />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2, bgcolor: '#c52636' }}>
          Ingresar
        </Button>
        <Grid container>
          <Grid item xs> <Link href="#" variant="body2"> Forgot password? </Link> </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export { Login }