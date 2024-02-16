import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function NavBar() {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">DREAMERS</Navbar.Brand>
                    <Nav className="me-auto">
                        <h1>hola</h1>


                    </Nav>
                </Container>
            </Navbar>
        </>
    )



}

export default NavBar