import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Client/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Client/Home'
import Items from './Client/Items'
import OurTeam from './Client/OurTeam'
import Contact from './Client/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/items" element={<Items/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/ourteam" element={<OurTeam/>} />


      <Route path="*" element={<Navigate to="/" />} />

      </Routes >
    </>
  )
}

export default App
