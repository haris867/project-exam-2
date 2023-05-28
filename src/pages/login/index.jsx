import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/loginForm";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <Container className="d-flex flex-column justify-content-center w-85 p-0">
      <Helmet>
        <title>Holidaze | Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
}
