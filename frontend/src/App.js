import Principal from './Pages/Principal/Principal'
import Login from './Pages/Login/index'

import {
  Routes,
  Route
} from 'react-router-dom'

export default function App () {
  return (
    <Routes>
      <Route path="/" element = {<Principal/>}/>
      <Route path="login" element = {<Login/>}/>
    </Routes>
  )
}
