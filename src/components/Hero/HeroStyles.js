import styled from "styled-components";
import HeaderImg from "../../assets/images/header.jpg";

export const StyledHero = styled.header`
  height: 90vh;
  color: #f6f4eb;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${HeaderImg});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    background-position: center;
  }
`;
