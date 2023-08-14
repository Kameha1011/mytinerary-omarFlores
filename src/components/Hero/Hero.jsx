import { Link } from "react-router-dom";
import { StyledButton } from "../../globalStyles";
import { StyledHero } from "./HeroStyles";
export const Hero = () => {
  return (
    <StyledHero className="container-fluid d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="heroContent position-relative text-center pt-4">
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
      </div>
    </StyledHero>
  );
};
