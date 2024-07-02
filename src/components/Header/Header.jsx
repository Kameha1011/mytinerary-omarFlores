import { StyledButton } from "../../globalStyles";
import { StyledNavbar } from "./HeaderStyles";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";
export const Header = () => {
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const location = useLocation();
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
            <Link
              to={user ? location.pathname : "/signin"}
              onClick={() => dispatch(signout())}
            >
              <StyledButton
                variant="primary"
                className="text-center ms-2 px-3 fw-bold"
              >
                {user ? (
                  <img
                    src={user?.picture}
                    alt="User Picture"
                    className="rounded-circle me-2 user-icon"
                  />
                ) : (
                  <FaUserAlt className="me-2" />
                )}
                {user ? "Sign Out" : "Sign In"}
              </StyledButton>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
