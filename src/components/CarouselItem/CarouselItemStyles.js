import styled from "styled-components";

export const StyledImg = styled.img`
  width: 35%;
  height: 350px;
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
