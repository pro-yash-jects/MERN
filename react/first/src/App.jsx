// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Cart from './components/Cart'
// import SignIn from './components/SignInComponent'
// import Timer from './components/Timer'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import {Home} from './pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} /> 
    </Routes>
    </>
  )
}

export default App
