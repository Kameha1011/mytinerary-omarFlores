import {
  StyledMain,
  SignUpForm,
  SignUpWithButton,
} from "./styles/SignupStyles";
import { StyledButton, StyledLink } from "../globalStyles";
import { FcGoogle } from "react-icons/fc";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { countries } from "../constants/forms/countryOptions";
export const Signup = () => {
  return (
    <StyledMain className="d-flex align-items-center justify-content-center">
      <SignUpForm className="p-3">
        <h1>Sign Up</h1>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Patrick" />
              <Form.Text className="text-light">
                Enter your first name.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" placeholder="Bateman" />
              <Form.Text className="text-light">
                Enter your last name.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="pbateman@bussiness.com" />
              <Form.Text className="text-light">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
              <Form.Text className="text-light">
                We&apos;ll never share your password with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control type="text" placeholder="https://..." />
              <Form.Text className="text-light">
                Enter your photo URL.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Select aria-label="Default select example">
                <option disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </Form.Select>
              <Form.Text className="text-light">
                Enter your last name.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledButton>Sign Up</StyledButton>
          </Col>

          <Col>
            <SignUpWithButton>
              <FcGoogle className="me-2"/>
              Sign up with Google
            </SignUpWithButton>
          </Col>
        </Row>
        <Row className="mt-5">
            <Col>
            <h4>Already have an account? <StyledLink to="/signin">Sign In</StyledLink></h4>
            </Col>
        </Row>
      </SignUpForm>
    </StyledMain>
  );
};
