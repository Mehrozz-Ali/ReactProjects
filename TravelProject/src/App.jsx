import { useState } from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from './Routes/Home'
import About from "./Routes/About"
import Service from './Routes/Service'
import Contact from './Routes/Contact'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
