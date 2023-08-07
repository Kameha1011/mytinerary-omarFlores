import { StyledFooter } from "./StyledFooter";
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
    </StyledFooter>
  );
};
