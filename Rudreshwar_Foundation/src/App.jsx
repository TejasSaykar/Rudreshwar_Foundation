import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Footer from './components/Footer'
import Payment from './pages/Payment'

function App() {

  return (
    <>
    <div className='fixed top-0 z-10 w-full'>
      <Navbar />
    </div>
    <div className='mt-16'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/events' element={ <Events /> } />
        <Route path='/payment' element={ <Payment /> } />
      </Routes>
    </div>
      <Footer/>
    </>
  )
}

export default App
