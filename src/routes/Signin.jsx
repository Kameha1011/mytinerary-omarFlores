import {
  StyledMain,
  SignUpForm,
  SignUpWithButton,
} from "./styles/SignFormsStyles";
import { StyledButton, StyledLink } from "../globalStyles";
import { FcGoogle } from "react-icons/fc";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Signin = () => {
  return (
    <StyledMain className="d-flex align-items-center justify-content-center">
      <SignUpForm className="p-3">
        <h1>Sign In</h1>
        <Row>
          <Col xl="12">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="pbateman@bussiness.com" />
              <Form.Text className="text-light">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xl="12">
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
            <StyledButton>Sign In</StyledButton>
          </Col>

          <Col>
            <SignUpWithButton>
              <FcGoogle className="me-2" />
              Sign in with Google
            </SignUpWithButton>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h4>
              Don&apos;t have an account?{" "}
              <StyledLink to="/signup">Sign Up</StyledLink>
            </h4>
          </Col>
        </Row>
      </SignUpForm>
    </StyledMain>
  );
};
