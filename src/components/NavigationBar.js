import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Valorant Stat Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Main</Nav.Link>
          <Nav.Link as={Link} to="/leaderboards">Leaderboards</Nav.Link>
          <NavDropdown title="Game Content" id="game-content-dropdown">
            <NavDropdown.Item as={Link} to="/game/maps">Maps</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/game/characters">Characters</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
