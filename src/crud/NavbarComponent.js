import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = () => {
  return (
    <Navbar className="nav" bg="dark" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand className='judul' href="/Home">CROSSFIT GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='konten' href='/Home'>Home</Nav.Link>
            <Nav.Link className='konten' href='/Member'>Membership</Nav.Link>
            <Nav.Link className='konten' href='#'>About</Nav.Link>
            <Nav.Link className='konten' href='#'>FAQ</Nav.Link>
            <Nav.Link className='konten' href='#'>Contact</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>

      </div>

    </Navbar>
  );
}

export default NavbarComponent