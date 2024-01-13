import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Navbar expand="m" bg="dark" variant="black" >
        <Navbar.Brand href="#" className='text-light fw-bolder'>&nbsp; MERAM BELEDİYESİ</Navbar.Brand>

        <Form className="d-flex col-lg-4">
          <FormControl
            type="search"
            placeholder=""
            
            aria-label="Search"
          />
          &nbsp;
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>

        <Navbar.Toggle  className= 'bg-light m-1' aria-controls="responsive-navbar-nav "  />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <br />
          <Nav className="bg-secondary " align="center">
            <Nav.Link href="https://www.meram.bel.tr/">Ana Sayfa</Nav.Link>
            <Nav.Link href="#">Projelerimiz</Nav.Link>
            <Nav.Link href="https://www.meram.bel.tr/iletisim">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNavbar;
