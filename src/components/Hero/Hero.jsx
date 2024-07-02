import { StyledHero } from "./HeroStyles";
export const Hero = ({ height, bgimg, children }) => {
  return (
    <StyledHero
      className="container-fluid d-flex flex-column align-items-center justify-content-center position-relative"
      bgimg={bgimg}
      height={height}
    >
      <div className="heroContent position-relative text-center pt-4">
        {children}
      </div>
    </StyledHero>
  );
};
