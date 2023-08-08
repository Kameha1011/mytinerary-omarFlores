import { useState, useEffect } from "react";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { CarouselContainer } from "./CarouselStyles";
import { GrNext, GrPrevious } from "react-icons/gr";
import { cities } from "../../constants/cities";
import { useInterval } from "../../customHooks/useInterval";
import { makeSlides } from "../../utils/makeSlides";
export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slideDirection, setSlideDirection] = useState("right");
  const [carouselSlides, setCarouselSlides] = useState([]);

  useEffect(() => {
    const slides = makeSlides(cities, 4);
    setCarouselSlides(slides);
  }, []);
  useInterval(() => {
    if (activeSlide < carouselSlides.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(1);
    }
  }, 10000);
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
