import { StyledButton } from "../../globalStyles";
import { StyledHero } from "./HeroStyles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import HeaderImg from "../../assets/images/header.jpg";
export const Hero = () => {
  return (
    <StyledHero>
      <Container fluid className="h-100">
        <Row className="align-items-center justify-content-center h-100">
          <Col md="5">
            <h1 className="display-6">Cool text for engaging the user</h1>
            <p>
              <i>
                &quot;Find your perfect trip designed by insiders who know and
                love their cities &quot;
              </i>
            </p>
            <StyledButton>View More</StyledButton>
          </Col>
          <Col md="5">
            <Image src={HeaderImg} alt="header image" fluid />
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};
