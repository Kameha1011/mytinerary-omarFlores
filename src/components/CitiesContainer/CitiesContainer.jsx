// import { cities } from "../../constants/cities";
import { TbFaceIdError }from 'react-icons/tb'
import { StyledCityCard } from "./CitiesContainerStyles";
import { SearchBar } from "../SearchBar/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getCities } from "../../../api/citiesService";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
export const CitiesContainer = () => {
  //TODO: crear customHook useAxios
  const [cities, setCities] = useState();
  useEffect(() => {
    const fetch = async () => {
      const data = await getCities();
      setCities(data);
    };
    fetch();
  }, []);
  const [searchInput, setSearchInput] = useState('');
  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetch = async () => {
      const data = await getCities(searchInput);
      setCities(data);
      setSearchInput("");
    };
    fetch();
  };
  return (
    <Container fluid className="p-0 my-5">
      <Row className="justify-content-center">
        <Col xs="10">
          <SearchBar
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            searchInput={searchInput}
          />
        </Col>
      </Row>
      <Row className="g-4 mt-4">
        {cities?.length > 0 ? (
          cities?.map((city, index) => (
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
                  <Link to={`/cities/${city._id}`} className='text-decoration-none'>
                    <Button>View City</Button>
                  </Link>
                </StyledCityCard.ImgOverlay>
              </StyledCityCard>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <h3>There are no matching cities...</h3>
            <TbFaceIdError className='fs-1'/>
          </Col>
        )}
      </Row>
    </Container>
  );
};
