import { Navbar, Nav } from 'react-bootstrap'

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
                    <Nav.Link className='navButton' href="/festivals">Festivals</Nav.Link>
                    <Nav.Link className='navButton' href="/editions">Editions</Nav.Link>
                    <Nav.Link className='navButton' href="/create-festival">Create Festival</Nav.Link>
                </Nav>

            </Navbar>
        </header>
    )
}

export default NavBar
