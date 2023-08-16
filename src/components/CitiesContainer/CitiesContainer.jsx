// import { cities } from "../../constants/cities";
import { StyledCityCard } from "./CitiesContainerStyles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import { getCities } from "../../../api/citiesService";
import { useEffect, useState } from "react";
export const CitiesContainer = () => {
    const [cities, setCities] = useState();
    useEffect( () => {
        const fetch = async () => {
            const data = await getCities();
            setCities(data);
        }
        fetch();
    }, [])
  return (
    <Container fluid className="p-0 my-5">
      <Row className="g-4">
         {cities?.map((city, index) => (
          <Col xs={6} md={4} lg={4} xl={3} key={index}>
            <StyledCityCard className="bg-dark text-white">
              <StyledCityCard.Img src={city.picture} alt={city.city} />
              <StyledCityCard.ImgOverlay>
                <div className="card-text">
                  <StyledCityCard.Title>{city.name}</StyledCityCard.Title>
                  <StyledCityCard.Text>
                    {city.country}, {city.continent}
                  </StyledCityCard.Text>
                </div>
                  <Button>
                    View City
                  </Button>
              </StyledCityCard.ImgOverlay>
            </StyledCityCard>
          </Col>
        ))} 
      </Row>
    </Container>
  );
};
