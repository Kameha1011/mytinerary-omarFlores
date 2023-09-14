import { StyledMain, SignUpForm } from "./styles/SignFormsStyles";
import { StyledButton, StyledLink } from "../globalStyles";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { signin } from "../store/actions/authActions";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleSignin } from "../components/GoogleSignin";
export const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSignin = async (e) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        setValidated(true);
        return;
      }
      dispatch(signin(formData));
      navigate(location.state?.from || "/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledMain className="d-flex align-items-center justify-content-center">
      <SignUpForm
        className="p-3"
        onSubmit={handleSignin}
        validated={validated}
        noValidate
      >
        <h1>Sign In</h1>
        <Row>
          <Col xl="12">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="pbateman@bussiness.com"
                onChange={handleInput}
                required
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
              <Form.Text className="text-light">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xl="12">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleInput}
                required
              />
              <Form.Control.Feedback type="valid">
                Looks good
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
              <Form.Text className="text-light">
                We&apos;ll never share your password with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <StyledButton type="submit">Sign In</StyledButton>
          </Col>
          <Col>
            <GoogleSignin />
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
