import axios from "axios";

const SERVER_URI = process.env.SERVER_HOST ? process.env.SERVER_HOST : "http://localhost:8000/";

//Save an user(participant) in DB
async function saveUser(data) {
  try {
    const [res, err] = await axios.post(SERVER_URI + "user/save/", data)
    return [res, err];
  }
  catch (err) {
    return [null, err];
  }
}

//check if user is logeed.
async function isLogged() {
  try {
    const [res, err] = await axios.get(SERVER_URI + "user/is_logged/")
    return [res, err]
  }
  catch (err) {
    return [null, err]
  }
}

//petition to log in.
async function login(data) {
  try {
    const [res, err] = await axios.post(SERVER_URI + "user/login/", data)
      return [res, err]
  } catch (err) {
    return [null, err]
  }
}

export { saveUser, isLogged, login }