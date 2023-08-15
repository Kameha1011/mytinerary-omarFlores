import styled from "styled-components";

export const StyledHero = styled.header`
  height: 100vh;
  color: #d5ffd0;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
  }
  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
  p {
    font-size: 1.5rem;
    color: lightgrey;
  }
  .cta-button {
    border: 1px solid #279eff;
    background-color: #279eff;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    color: #0c356a;
  }
  .cta-button:hover {
    border: 1px solid #0c356a;
    background-color: #0c356a;
    color: #d5ffd0;
  }
  @media (min-width: 1024px) {
    height: ${(props) => props.height};
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;
