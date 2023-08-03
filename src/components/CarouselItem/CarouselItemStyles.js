import styled from "styled-components";

export const StyledImg = styled.img`
  width: 35%;
  height: 350px;
`;
export const CarouselItemContainer = styled.div`
  position: absolute;
  width: 100%;
  filter: blur(${(props) => (props.styledProps.isActive ? "0" : "5px")});

  ${(props) =>
    props.styledProps.isActive && props.styledProps.slideDirection === "right"
      && `animation: slideInRight 1s forwards;`
      }
  ${(props) =>
    !props.styledProps.isActive && props.styledProps.slideDirection === "right"
      && `animation: slideOutRight 1s forwards;`
      }
       ${(props) =>
    props.styledProps.isActive && props.styledProps.slideDirection === "left"
      && `animation: slideInLeft 1s forwards;`
      }
       ${(props) =>
    !props.styledProps.isActive && props.styledProps.slideDirection === "left"
      && `animation: slideOutLeft 1s forwards;`
      }
    transition: filter 1s ease-in-out;

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
`;
