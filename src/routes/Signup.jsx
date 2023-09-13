import { StyledMain, SignUpForm } from "./styles/SignFormsStyles";
import { StyledButton, StyledLink } from "../globalStyles";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { countries } from "../constants/forms/countryOptions";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "../store/actions/authActions";
import { GoogleSignup } from "../components/GoogleSignup";
export const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    picture: "",
    country: "",
  });
  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      dispatch(signup(formData));
      navigate(location.state?.from || "/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledMain className="d-flex align-items-center justify-content-center">
      <SignUpForm className="p-3" onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Patrick"
                onChange={handleInput}
              />
              <Form.Text className="text-light">
                Enter your first name.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="pbateman@bussiness.com"
                onChange={handleInput}
              />
              <Form.Text className="text-light">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleInput}
              />
              <Form.Text className="text-light">
                We&apos;ll never share your password with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Picture URL</Form.Label>
              <Form.Control
                type="text"
                name="picture"
                placeholder="https://..."
                onChange={handleInput}
              />
              <Form.Text className="text-light">
                Enter your photo URL.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Select
                name="country"
                onChange={handleInput}
                aria-label="Default select example"
              >
                <option disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Select>
              <Form.Text className="text-light">Enter your country.</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledButton type="submit">Sign Up</StyledButton>
          </Col>
          <Col>
            <GoogleSignup />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>
              Already have an account?{" "}
              <StyledLink to="/signin">Sign In</StyledLink>
            </h4>
          </Col>
        </Row>
      </SignUpForm>
    </StyledMain>
  );
};
