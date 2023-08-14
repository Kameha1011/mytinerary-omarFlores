import styled from "styled-components";
import HeaderImg from "../../assets/images/header.jpg";

export const StyledHero = styled.header`
  height: 100vh;
  color: #f6f4eb;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${HeaderImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
    opacity: 0.85;
  }
  h1{
    font-size: 3rem;
    letter-spacing: 0.5rem;
    color: #05014a;
  }
  p{
    color: #03396c;
    font-size: 1.5rem;
  }
  .cta-button{
    border: 1px solid #05014a;
    background-color: #05014a;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    color: #f6f4eb;
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
