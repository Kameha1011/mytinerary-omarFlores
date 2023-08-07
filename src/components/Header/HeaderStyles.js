import styled from "styled-components"
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
    background-color: #91C8E4;
    .nav-link, .navbar-brand{
        color: #F6F4EB;
    }
    .nav-link:hover{
        color: #4682A9;
    }
    @media (min-width: 1024px) {
        height: 10vh;
    }
`