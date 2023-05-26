import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/loginForm";

export default function Login() {
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ width: "85%", padding: "0" }}
    >
      <LoginForm />
    </Container>
  );
}
