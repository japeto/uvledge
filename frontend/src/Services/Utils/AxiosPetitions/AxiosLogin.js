import axios from "axios";

const SERVER_URI = process.env.SERVER_HOST ? process.env.SERVER_HOST : "http://localhost:8000/";

//Save an user(participant) in DB
async function saveUser(data) {
  try {
    const res = await axios.post(SERVER_URI + "user/save/", data, { withCredentials: true })
    return [res, null];
  }
  catch (err) {
    return [null, err];
  }
}

//check if user is logeed.
async function isLogged() {
  const id = sessionStorage.getItem("id")
  if(id === null) return [{"logged": false}, null]

  try {
    const res = await axios.get(SERVER_URI + `user/is_logged/`, { withCredentials: true })
    return [res, null]
  }
  catch (err) {
    return [null, err]
  }
}

//petition to log in.
async function login(data) {
  try {
    const res = await axios.post(SERVER_URI + "user/login/", data, { withCredentials: true })
      sessionStorage.setItem("id", data.id);
      return [res, null]
  } catch (err) {
    return [null, err]
  }
}

export { saveUser, isLogged, login }