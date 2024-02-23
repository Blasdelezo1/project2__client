import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './NavBar.css'

import appIcon from './../../assets/images/icon2-logo-app.png'

function NavBar() {

    return (
        <header>
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="/">
                    <img className='imgNavBar' src={appIcon} alt='appIcon' />
                </Navbar.Brand>

                <Nav>
                    <Link to="/festivals" className='navButton nav-link'>Festivals</Link>
                    <Link to="/editions" className='navButton nav-link'>Editions</Link>
                    <Link to="/create-festival" className='navButton nav-link'>Create festival</Link>
                </Nav>

            </Navbar>
        </header>
    )
}

export default NavBar
