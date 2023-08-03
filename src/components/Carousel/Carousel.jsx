import { useState } from "react";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { CarouselContainer } from "./CarouselStyles";
import { GrNext, GrPrevious } from "react-icons/gr";

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slideDirection, setSlideDirection] = useState("right");
  const carouselItems = [
    [
      {
        src: "https://images.unsplash.com/photo-1525095240410-9645dea911e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "caracas",
      },
      {
        src: "https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "tokyo",
      },
      {
        src: "https://images.unsplash.com/photo-1618503551238-7df2c50d2236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80",
        alt: "beijing",
      },
      {
        src: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "buenos_aires",
      },
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1508030358362-c071fa056233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "caracas",
      },
      {
        src: "https://images.unsplash.com/photo-1562595410-2cb999af24b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80",
        alt: "tokyo",
      },
      {
        src: "https://images.unsplash.com/photo-1582076197789-5c2af0bb51fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
        alt: "beijing",
      },
      {
        src: "https://images.unsplash.com/photo-1582076197789-5c2af0bb51fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
        alt: "buenos_aires",
      }
    ],
    [
      {
        src: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "buenos_aires",
      },
      {
        src: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "buenos_aires",
      },
      {
        src: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "buenos_aires",
      },
      {
        src: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        alt: "buenos_aires",
      },
    ]
  ];
  return (
    <CarouselContainer className="position-absolute">
      <GrPrevious
        className="previous z-index-1"
        role="button"
        onClick={() => {
          activeSlide > 1 && setActiveSlide(activeSlide - 1);
          activeSlide === 1 && setActiveSlide(carouselItems.length);
          setSlideDirection("left");
        }}
      />
      <h1>{activeSlide}{slideDirection}</h1>
      <div className="carousel-items-container position-relative">
        {carouselItems.map((items, index) => {
          return(
            <CarouselItem
              key={index}
              isActive={activeSlide === index + 1}
              slideDirection={slideDirection}
              items={items}
            />
          )
        })}
      </div>
      <GrNext
        className="next"
        role="button"
        onClick={() => {
          activeSlide < carouselItems.length && setActiveSlide(activeSlide + 1);
          activeSlide === carouselItems.length && setActiveSlide(1);
          setSlideDirection("right");
        }}
      />
    </CarouselContainer>
  );
};
