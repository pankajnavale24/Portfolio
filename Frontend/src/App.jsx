import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Banner/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    
    </>
  )
}

export default App