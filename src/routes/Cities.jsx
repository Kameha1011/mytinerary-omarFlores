import { Hero } from "../components/Hero/Hero";
import HeaderImg from "../assets/images/cities-bg.jpg";

export const Cities = () => {
  return (
    <Hero height="70vh" bgimg={HeaderImg}>
      <h1>Explore Cities</h1>
      <p className="lead fw-bold">
        Collection of the most beautiful places and experiences around the globe
      </p>
    </Hero>
  );
};
