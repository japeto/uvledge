import * as Yup from 'yup'

const passwordValidator = Yup.string().max(256).required('Password is required').min(8, "The password must have eigth or more digits")
const idValidator = Yup.string().matches(/^\d+$/, "ID must be a number").max(12, "Invalid ID").min(8).required("ID is required")

const signUpInformationValidator = Yup.object().shape({
  fullName: Yup.string().required('Field is required').max(50),
  email: Yup
    .string().email('Valid email is required').max(256)
    .required('Email is required'),
  password: passwordValidator,
  id: idValidator,
  idType: Yup.string(),
  studentCode: Yup
    .string().matches(/^\d+$/, "Student code must be a number").max(12, "Invalid Studen code").min(8).required("Studen code is required")
})

const loginInformationValidator = Yup.object().shape({
  id: idValidator,
  password: passwordValidator
})

export { signUpInformationValidator, loginInformationValidator }