import { StyledHero } from "./HeroStyles";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HeaderImg from "../../assets/images/header.jpg";
export const Hero = () => {
  return (
    <StyledHero>
      <Container fluid className="h-100">
        <Row className="align-items-center justify-content-center h-100">
          <Col md="5">
            <h1 className="display-6">Cool text for engaging the user</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nobis eaque debitis qui illo amet quae, ex numquam! Quas nihil
              eligendi quis tempore excepturi odio voluptatem et ipsa veritatis
              neque.
            </p>
            <Button>View More</Button>
          </Col>
          <Col md="5">
            <img src={HeaderImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};
