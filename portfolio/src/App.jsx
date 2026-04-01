// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { useSearchParams } from "react-router-dom"
import Hero from './pages/Hero'
import About from './pages/About'
import Services from "./pages/Services"
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

const [searchParams] = useSearchParams()
const theme = searchParams.get('theme') || 'light'

  return (
    <div className={ theme }>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
