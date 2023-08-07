import { useState, useEffect, useRef } from "react";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { CarouselContainer } from "./CarouselStyles";
import { GrNext, GrPrevious } from "react-icons/gr";
import { carouselSlides } from "../../constants/CarouselSlides";

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slideDirection, setSlideDirection] = useState("right");
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      if (activeSlide < carouselSlides.length) {
        setActiveSlide(activeSlide + 1);
      } else {
        setActiveSlide(1);
      }
    }, 10000);
  });
  return (
    <CarouselContainer className="position-absolute">
      <GrPrevious
        className="previous z-index-1"
        role="button"
        onClick={() => {
          activeSlide > 1 && setActiveSlide(activeSlide - 1);
          activeSlide === 1 && setActiveSlide(carouselSlides.length);
          setSlideDirection("left");
        }}
      />
      <div className="carousel-items-container position-relative">
        {carouselSlides.map((items, index) => {
          return (
            <CarouselItem
              key={index}
              isActive={activeSlide === index + 1}
              slideDirection={slideDirection}
              items={items}
            />
          );
        })}
      </div>
      <GrNext
        className="next"
        role="button"
        onClick={() => {
          activeSlide < carouselSlides.length &&
            setActiveSlide(activeSlide + 1);
          activeSlide === carouselSlides.length && setActiveSlide(1);
          setSlideDirection("right");
        }}
      />
    </CarouselContainer>
  );
};
