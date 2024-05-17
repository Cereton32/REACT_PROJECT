import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarNew() {
  return (
   <>
    <Navbar bg="dark" data-bs-theme="dark">
   <Container>
     <Navbar.Brand href="#home">Addidas logo</Navbar.Brand>
     <Nav className="me-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#features">Features</Nav.Link>
       <Nav.Link href="#pricing">Pricing</Nav.Link>
      
     </Nav>
     <Button variant="primary">Login</Button>{' '}
   </Container>
 </Navbar>

   </>
  )
}

export default NavbarNew
