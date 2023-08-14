import styled from "styled-components";

export const StyledImg = styled.img``;
export const CarouselItemCard = styled.div`
  width: 40%;
  height: 200px;
  background-image: ${(props) => `url(${props.bgimg})`};
  background-size: 100% 100%; 
  background-repeat: no-repeat;
  color: #fff;
  box-shadow: inset 0px -50px 25px -15px rgba(0,0,0,0.75);
  transition: box-shadow .4s ease-in;
  h3{
    position: relative;
    font-size: 1rem;
    top: 85%;
    transition: all .4s ease-in-out;
  }
  &:hover {
    box-shadow: inset 0px -380px 25px -15px rgba(0,0,0,0.75);
    transition: all .4s ease-in;
    h3{
      top: 50%;
      transition: all .4s ease-in;
    }
  }
  @media (min-width: 768px) {
    width: 35%;
    height: 350px;
    h3{
      font-size: 1.9rem;
    }
  }
`;
export const CarouselItemContainer = styled.div`
  position: absolute;
  width: 100%;
  filter: blur(${(props) => (props.styledprops.isActive ? "0" : "5px")});
  transition: filter 1s ease-in-out;
  ${(props) =>
    props.styledprops.isActive &&
    props.styledprops.slideDirection === "right" &&
    `animation: slideInRight 1s forwards;`}
  ${(props) =>
    !props.styledprops.isActive &&
    props.styledprops.slideDirection === "right" &&
    `animation: slideOutRight 1s forwards;`}
       ${(props) =>
    props.styledprops.isActive &&
    props.styledprops.slideDirection === "left" &&
    `animation: slideInLeft 1s forwards;`}
       ${(props) =>
    !props.styledprops.isActive &&
    props.styledprops.slideDirection === "left" &&
    `animation: slideOutLeft 1s forwards;`} 

  @keyframes slideInLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes slideOutLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes slideInRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes slideOutRight {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  // más corto pero tiene un bug
  /*   animation: ${(props) =>
    props.styledprops.isActive ? "slideIn" : "slideOut"}
      1s forwards; */
  /*   @keyframes slideIn {
      0% {
        transform: translateX(
          ${(props) =>
    props.styledprops.slideDirection === "left" ? "100%" : "-100%"}
        );
      }
      100% {
        transform: translateX(0%);
      }
    }
    @keyframes slideOut {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(
          ${(props) =>
    props.styledprops.slideDirection === "left" ? "-100%" : "100%"}
        );
      }
    } */
  /*   ${(props) =>
    props.styledprops.isActive &&
    props.styledprops.slideDirection === "right" &&
    `background-color: red;`}
  ${(props) =>
    !props.styledprops.isActive &&
    props.styledprops.slideDirection === "right" &&
    `background-color: blue;`}
       ${(props) =>
    props.styledprops.isActive &&
    props.styledprops.slideDirection === "left" &&
    `background-color: green;`}
       ${(props) =>
    !props.styledprops.isActive &&
    props.styledprops.slideDirection === "left" &&
    `background-color: magenta;`}
   */
`;
