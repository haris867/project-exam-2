import React from "react";
import { Container } from "react-bootstrap";
import RegisterForm from "../../components/registerForm";
import { Helmet } from "react-helmet";

export default function Register() {
  return (
    <Container className="d-flex flex-column justify-content-center p-0 w-85">
      <Helmet>
        <title>Holidaze | Register</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
}
