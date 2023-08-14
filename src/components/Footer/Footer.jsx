import { StyledFooter } from "./StyledFooter";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export const Footer = () => {
  return (
    <StyledFooter
      as={"footer"}
      className="d-flex p-3 align-items-center flex-column flex-md-row"
    >
      <div className="d-flex align-items-baseline gap-2">
        <h4>Mytinerary</h4>
        <p>Copyright &copy; 2023</p>
      </div>
      <p className="ms-md-auto">Developed by Omar Flores.</p>
      <div className="d-flex gap-3">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light fs-1"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-light fs-1"
        >
          <BsInstagram />
        </a>
      </div>
    </StyledFooter>
  );
};
