import Main from '../Pages/Main/index'
import Login from '../Pages/Login/index'

import {
  Routes,
  Route
} from 'react-router-dom'

export default function App () {
  return (
    <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="login" element = {<Login/>}/>
    </Routes>
  )
}
