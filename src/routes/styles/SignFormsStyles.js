import styled from "styled-components";
import bg from "../../assets/images/signup-bg.jpg";
import Form from "react-bootstrap/Form";
export const StyledMain = styled.main`
  min-height: 100vh;
  padding: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg});
`;

export const SignUpForm = styled(Form)`
    height: 80%;
    width: 85%;
    background-color: #279EFF;
    color: white;
    border-radius: 1rem;
    @media(min-width: 768px) {
        width: 75%;
    }
    @media(min-width: 1024px) {
        width: 60%;
    }
`

export const SignUpWithButton = styled.button`
    background-color: white;
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    color: black;
`

