import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import RoomsCarousel from './components/RoomsCarousel'
import Assets from './components/Assets'

function App() {

  return (
   <div>
    <Navbar/>
      <Header/> 
     <About/>
     <div id="about">
      <SectionOne/>
      <SectionTwo/>
      <Assets/>
     </div>
     <Contact/>
     <Footer/>
   </div>
  )
}

export default App
