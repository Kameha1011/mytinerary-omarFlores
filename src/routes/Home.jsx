import { Hero } from "../components/Hero/Hero";
import { Carousel } from "../components/Carousel/Carousel";
import { StyledContainer } from "../globalStyles";
export const Home = () => {
  return (
    <main>
      <Hero />
      <StyledContainer as="section" className="my-5 text-center">
        <h2>Popular mytineraries</h2>
        <Carousel />
      </StyledContainer>
    </main>
  );
};
