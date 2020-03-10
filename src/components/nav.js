import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function() {
  return (
    <Navbar expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="/home" className="flex-column">
             <Nav.Link href="/">Play</Nav.Link> 
             <Nav.Link href="/compete">Compete</Nav.Link> 
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
