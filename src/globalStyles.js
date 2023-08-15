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
export const StyledMain = styled.main`
min-height: 80vh;
@media  (min-width: 768px) {
        min-height: 90vh;
    }
`
export const StyledContainer = styled(Container)`
    min-height: 30rem;
    @media  (min-width: 768px) {
       min-height: 50rem;
    }
`