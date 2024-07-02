import { StyledFooter } from "./StyledFooter";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub} from "react-icons/bs";
export const Footer = () => {
  return (
    <StyledFooter
      as={"footer"}
      className="d-flex align-items-center align-items-md-baseline flex-column flex-md-row"
    >
      <div className="d-flex align-items-baseline gap-2">
        <h4>Mytinerary</h4>
        <p>Copyright &copy; 2023</p>
      </div>
      <p className="ms-md-auto me-md-2">Developed by Omar Flores.</p>
      <div className="d-flex gap-3">
        <a
          href="https://www.linkedin.com/in/omar-flores2001/"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light fs-1"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Kameha1011"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light fs-1"
        >
          <BsGithub/>
        </a>
      </div>
    </StyledFooter>
  );
};
