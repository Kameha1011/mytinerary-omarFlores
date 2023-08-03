import styled from "styled-components"

export const CarouselContainer = styled.div`
    width: 100%;
    min-height: 50rem;
    left: 0;
    .previous, .next {
        position: absolute;
        top: 50%;
        z-index: 1;
        font-size: 4rem;
        padding: 0.5rem;
        background-color: rgba(209, 194, 202, 0.69);
        border-radius: 0.3rem;
    }
    .previous {
        left: 10px;
    }
    .next {
        right: 10px;
    }
    .carousel-items-container {
        width: 100%;
        height: 50rem;
    }
`