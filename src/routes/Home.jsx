import { Hero } from "../components/Hero/Hero";
import { Carousel } from "../components/Carousel/Carousel";
import { StyledContainer, StyledButton } from "../globalStyles";
import HeaderImg from "../assets/images/header.jpg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <main>
      <Hero height="90vh" bgimg={HeaderImg}>
        <h1>Cool text for engaging the user</h1>
        <p className="lead fw-bold">
          <i>
            &quot;Find your perfect trip designed by insiders who know and love
            their cities &quot;
          </i>
        </p>
        <Link to="/cities">
          <StyledButton className="cta-button">View Cities</StyledButton>
        </Link>
      </Hero>
      <StyledContainer as="section" className="my-5 text-center">
        <h2>Popular mytineraries</h2>
        <Carousel />
      </StyledContainer>
    </main>
  );
};
