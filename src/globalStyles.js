import styled from "styled-components"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


export const StyledButton = styled(Button)`
    background-color: #4682A9;
    border-color: #4682A9;
    &&:hover{
        background-color: #316587;
    }
`
export const StyledContainer = styled(Container)`
height: 50rem;

`