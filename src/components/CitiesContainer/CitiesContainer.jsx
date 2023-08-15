import { cities } from "../../constants/cities";
import { StyledCityCard } from "./CitiesContainerStyles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const CitiesContainer = () => {
  return (
    <Container fluid className="p-0 my-5">
      <Row className="g-4">
        {cities.map((city, index) => (
          <Col xs={6} md={4} lg={4} xl={3} key={index}>
            <StyledCityCard className="bg-dark text-white">
              <StyledCityCard.Img src={city.src} alt={city.alt} />
              <StyledCityCard.ImgOverlay>
                <StyledCityCard.Title>{city.alt}</StyledCityCard.Title>
                <StyledCityCard.Text>
                  Last updated 3 mins ago
                </StyledCityCard.Text>
              </StyledCityCard.ImgOverlay>
            </StyledCityCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
