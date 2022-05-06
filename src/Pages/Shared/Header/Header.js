import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
  <Navbar className='mb-1'  bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={logo} height="40px" alt="" /></Navbar.Brand>
    <Nav className="p-2">
      <Nav.Link href="/" className='text-white fw-bold'>Home</Nav.Link>
      <Nav.Link href="#features" className='text-white fw-bold'>Features</Nav.Link>
      <Nav.Link href="about" className='text-white fw-bold'>About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    );
};

export default Header;