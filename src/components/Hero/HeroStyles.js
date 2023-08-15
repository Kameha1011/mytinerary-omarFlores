import styled from "styled-components";
import HeaderImg from "../../assets/images/header.jpg";

export const StyledHero = styled.header`
  height: 100vh;
  color: #D5FFD0;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),  url(${HeaderImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
  }
  h1{
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
  p{
    font-size: 1.5rem;
    color: lightgrey;
  }
  .cta-button{
    border: 1px solid #279EFF;
    background-color: #279EFF;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    color: #0C356A;
  }
  .cta-button:hover{
    border: 1px solid #0C356A;
    background-color: #0C356A;
    color: #D5FFD0;
  }
  @media (min-width: 1024px) {
        height: 90vh;
        h1{
          font-size: 4rem;
        }
        p{
          font-size: 2rem;
        }
    }
`;
