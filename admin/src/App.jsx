import { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Routes/Login/Login'
import Main from './Routes/Main/Main'
import './global.css'

function App() {

  // useEffect(function(){
  //   if(window.location.pathname !== '/register'){
  //     setTimeout(() => {
  //       window.location.href = '/sign'
  //     },5000)
  //   }
  // },[])

  if(2 > 3) return <Login/>
  return (
    <>
   <Main/>
    </>
  )
}

export default App
