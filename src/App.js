import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Contact, Projects, AboutMe } from './pages/index'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './app.css'

function App() {
  return (
    <div className='container'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App