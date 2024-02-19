import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import menuIcon from './../../assets/menu-icon.png'
import appIcon from './../../assets/icon2-logo-app.png'
import { Button, Dropdown, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <>

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
                                <Dropdown.Item href="/festivals">My Festivals</Dropdown.Item>
                                <Dropdown.Item href="/editions">Editions</Dropdown.Item>
                                <Dropdown.Item href="/">Home Page</Dropdown.Item>
                                <Dropdown.Item href="/create">Create Festival</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="outline-light" href="#">Log in</Button>
                    </Container>
                </Navbar>
            </div>







            {/* <Navbar className='Navbar' bg="dark" data-bs-theme="dark">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="/">
                        <img src={appIcon}
                            alt='appIcon'
                            width='70'
                            height='70'
                        />
                    </Navbar.Brand>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <img src={menuIcon}
                                alt="Menu"
                                width="30"
                                height="30"
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/festivals">My Festivals</Dropdown.Item>
                            <Dropdown.Item href="/editions">Editions</Dropdown.Item>
                            <Dropdown.Item href="/">Home Page </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="outline-light" href="#" >Log in</Button>
                    <Nav className="me-auto"></Nav>
                </Container>
            </Navbar> */}
        </>
    )



}

export default NavBar


//opcion con el estilo del button

// < Navbar className = 'Navbar' bg = "dark" data - bs - theme="dark" >
//     <Container>
//         <Navbar.Brand href="/">icon</Navbar.Brand>
//         <Dropdown>
//             <Dropdown.Toggle id="dropdown-basic">
//                 <img src={menuIcon} alt="Menu" width="30" height="30" />
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//                 <Dropdown.Item href="/festivals">My Festivals</Dropdown.Item>
//                 <Dropdown.Item href="/editions">Editions</Dropdown.Item>
//                 <Dropdown.Item href="/">Home Page </Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//         <Nav className="me-auto"></Nav>
//     </Container>
//         </Navbar >