import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export const StyledButton = styled(Button)`
  color: black;
  background-color: #40f8ff;
  border-color: #4682a9;
  &&:hover {
    background-color: #316587;
  }
`;
export const StyledLink = styled(Link)`
  color: #40f8ff;
`;
export const StyledMain = styled.main`
  min-height: 80vh;
  @media (min-width: 768px) {
    min-height: 90vh;
  }
`;
export const StyledContainer = styled(Container)`
  min-height: 30rem;
  @media (min-width: 768px) {
    min-height: 50rem;
  }
`;
