import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import menuIcon from './../../assets/menu-icon.png'
import appIcon from './../../assets/icon2-logo-app.png'
import { Button, Dropdown, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <header>

            <div className='Navbar'>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src={appIcon} alt='appIcon' width='100' height='80' />
                        </Navbar.Brand>
                        {/* <Nav className="me-auto">
                            <Nav.Link href="/festivals">My Festivals</Nav.Link>
                            <Nav.Link href="/editions">Editions</Nav.Link>
                            <Nav.Link href="/">Home Page</Nav.Link>
                        </Nav> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="dark">
                                <img src={menuIcon} alt="Menu" width="30" height="30" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/festivals">Festivals</Dropdown.Item>
                                <Dropdown.Item href="/editions">Editions</Dropdown.Item>
                                <Dropdown.Item href="/create">Create Festival</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="outline-light" href="#">Log in</Button>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

export default NavBar
