import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'



import './App.css'

function App() {


  return (
    <div>
      <header>
        <NavBar />
      </header>


      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default App
