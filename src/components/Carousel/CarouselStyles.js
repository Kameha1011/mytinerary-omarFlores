import styled from "styled-components"

export const CarouselContainer = styled.div`
    width: 100%;
    height: 35rem;
    padding: 0.5rem;
    left: 0;
    .previous, .next {
        position: absolute;
        top: 37%;
        z-index: 1;
        font-size: 3rem;
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
        height: 100%;
        overflow-x: hidden;
    }
    @media  (min-width: 768px) {
        height: 50rem;
        .previous, .next {
            font-size: 4rem;
            top: 45%;
        }
    }
`