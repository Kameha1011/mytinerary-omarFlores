import styled from "styled-components";
import bg from "../../assets/images/signup-bg.jpg";
import Form from "react-bootstrap/Form";
export const StyledMain = styled.main`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg});
`;

export const SignUpForm = styled(Form)`
    height: 80%;
    width: 50%;
    background-color: #279EFF;
    color: white;
    border-radius: 1rem;
`

export const SignUpWithButton = styled.button`
    background-color: white;
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    color: black;
`

