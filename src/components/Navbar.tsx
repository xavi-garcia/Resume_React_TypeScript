import { Container, Button,  Nav, Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


export function Navbar() {
    return (
    <NavbarBs className='bg-black shadow-sm mb-2'>
        <Container>
            <Nav className="ms-auto">
                <Nav.Link id="navlinks" to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link id="navlinks" to="/contact" as={NavLink}>Contact Me</Nav.Link>
                <Nav.Link id="navlinks" href="https://www.linkedin.com/in/javier-garc%C3%ADa-3653a795/">LinkedIn</Nav.Link>
                <Nav.Link id="navlinks" href="https://github.com/xavi-garcia">GitHub</Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    )
}