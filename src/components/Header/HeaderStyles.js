import styled from "styled-components"
import Navbar from "react-bootstrap/Navbar";

export const StyledNavbar = styled(Navbar)`
    background-color: #0C356A;
    .nav-link, .navbar-brand{
        color: #F6F4EB;
    }
    .nav-link:hover{
        color: #40F8FF;
    }
    .user-icon{
        height: 35px;
        width: 35px;
    }
    @media (min-width: 1024px) {
        height: 10vh;
    }
`