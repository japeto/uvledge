import React, {useState} from 'react'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { signUpInformationValidator } from '../../Services/Utils/YupModels/validateLogin';
import { login, saveUser } from '../../Services/Utils/AxiosPetitions/AxiosLogin';

function SignUp() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (LoggedIn) return navigate("/");
  }, [LoggedIn]);


  const tipoids = [{ value: 'C.C', label: 'C.C' }, { value: 'T.I', label: 'T.I' }]

  const isValidSubmit = async () =>{
    if (!formik.isValid) return [false, "Invalid values"];
    const [saveUserRes, saveUserErr] = await saveUser(formik.values)
    if (saveUserErr) return [false, saveUserErr];
    const [loginRes, loginErr] = await login(formik.values)
    if (loginErr) return [false, loginErr];

    return [true, loginRes]
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await formik.validateForm();


    for (var key in formik.values) {
      formik.setFieldTouched(key, true);
    }

    const [validSubmit, message] =  await isValidSubmit();
    if(!validSubmit) return;
    setLoggedIn(true);


  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      id: '',
      idType: 'C.C',
      studentCode: ''
    },
    validationSchema: signUpInformationValidator
  });

  const onSelectIdType = (e) => {
    const idType = e.target.innerText;
    formik.values.idType = idType;
  }

  return (
    <div>
      <Grid container spacing={2} component='form' onSubmit={onSubmit} sx={{ mt: 1 }}>
        <Grid item xs={2}>
          <TextField
            select
            label='Tipo id'
            defaultValue='C.C'
          >
            {tipoids.map((option) => (
              <MenuItem key={option.value} value={option.value} onClick={onSelectIdType}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            error={Boolean(formik.touched.id && formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
            label="Identificación"
            name="id"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.id}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            error={Boolean(formik.touched.studentCode && formik.errors.studentCode)}
            helperText={formik.touched.studentCode && formik.errors.studentCode}
            label="Código de estudiante"
            name="studentCode"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.studentCode}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={4}>
          <TextField
            fullWidth
            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            label="Nombre completo"
            name="fullName"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.fullName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            label="Coreo electronico"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.email}
          />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={10} >
          <TextField
            fullWidth
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            label="Contraseña"
            type={'password'}
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            required
            value={formik.values.password}
          />
        </Grid>
        <Button fullWidth type={'submit'} variant='contained' sx={{ mt: 3, mb: 2, bgcolor: '#c52636' }}>
          Registrarme
        </Button>
      </Grid>
    </div>
  )
}

export { SignUp }