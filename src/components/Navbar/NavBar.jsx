import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavBar() {

    return (
        <>
            <Navbar className='Navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">DREAMERS</Navbar.Brand>
                    <Navbar.Brand>
                        <DropdownButton id="Dropdown-Button" title="Information">
                            <Dropdown.Item href="/festivals">My Festivals</Dropdown.Item>
                            <Dropdown.Item href="/editions">Editions</Dropdown.Item>
                            <Dropdown.Item href="/">Home Page </Dropdown.Item>
                        </DropdownButton>
                    </Navbar.Brand>

                    <Nav className="me-auto"></Nav>

                </Container>
            </Navbar>
        </>
    )



}

export default NavBar