import { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
import AppRoutes from './Routes/AppRoutes'
import './App.css'


function App() {


  return (
    <div>
      <header>
        <NavBar />
      </header>
      <AppRoutes />
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default App
