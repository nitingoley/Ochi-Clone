import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marque from './components/Marque'
import About from './components/About'
import Eye from './components/Eye'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Footer from './components/Footer'
// import './App.css'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen'>
<Navbar />
      <Home />
      <Marque />
      <About />
      <Eye />
      <Projects />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
