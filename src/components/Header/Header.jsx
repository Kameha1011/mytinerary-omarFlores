import { StyledButton } from "../../globalStyles";
import { StyledNavbar } from "./HeaderStyles";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <StyledNavbar expand="md">
      <Container>
        <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to="/" className="text-decoration-none nav-link">
              Home
            </Link>
            <Link to="/cities" className="text-decoration-none nav-link">
              Cities
            </Link>
            <StyledButton
              variant="primary"
              className="text-center ms-2 px-3 fw-bold"
            >
              <FaUserAlt className="me-2" />
              Login
            </StyledButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
