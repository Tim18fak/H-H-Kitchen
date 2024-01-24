import { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Routes/Login/Login'
import Main from './Routes/Main/Main'
import ReloadAnim from './components/animations/ReloadAnim/ReloadAnim'

import './global.css'
function App() {
  useEffect(function(){
    if(window.location.pathname !== '/register'){
      setTimeout(() => {
        window.location.href = '/register'
      },5000)
    }
  },[])

  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ReloadAnim/>} />
        <Route path='/register' element={<Login/>}/>
        <Route path='/login' element={<Main/>}/>  

      </Routes>
    </Router>
    </>
  )
}

export default App
