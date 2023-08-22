// import { cities } from "../../constants/cities";
import { useEffect, useState } from "react";
import { TbFaceIdError }from 'react-icons/tb'
import { StyledCityCard } from "./CitiesContainerStyles";
import { StyledButton } from "../../globalStyles";
import { SearchBar } from "../SearchBar/SearchBar";
import { SelectFilter } from '../SelectFilter/SelectFilter';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { getCities } from "../../../api/citiesService";
import { continents } from "../../constants/forms/continentOptions";
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
  const [continent, setContinent] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSelect = (e) => {
    setContinent(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetch = async () => {
      const data = await getCities(searchInput, continent);
      setCities(data);
      setSearchInput("");
    };
    fetch();
  };
  return (
    <Container fluid className="p-0 my-5">
      <Row className="justify-content-center" as={'form'} onSubmit={handleSubmit}>
        <Col xs="4">
          <SearchBar
            handleSearch={handleSearch}
            searchInput={searchInput}
          />
        </Col>
        <Col xs="4" className='d-flex align-items-end gap-3'>
          <SelectFilter options={continents} handleSelect={handleSelect}/>
        </Col>
        <Col xs="2" className='d-flex align-items-end'>
          <StyledButton type="submit">Search</StyledButton>
        </Col>
      </Row>
      <Row className="justify-content-center">
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
