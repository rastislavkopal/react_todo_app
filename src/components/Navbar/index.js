import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

import { useLocation } from "react-router-dom";


export default function NavBar() {
  const location = useLocation();

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="me-auto">
            <Nav.Link href="/">TODO-list</Nav.Link>
              <Nav.Link href="/about">O mne</Nav.Link>
              <Nav.Link href="/stuff">Stuff</Nav.Link>
              <Nav.Link href="/contact">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
