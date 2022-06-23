import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Valorant Stat Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/leaderboards">Leaderboards</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
