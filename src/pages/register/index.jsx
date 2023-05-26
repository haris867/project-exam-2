import React from "react";
import { Container } from "react-bootstrap";
import RegisterForm from "../../components/registerForm";

export default function Register() {
  return (
    <Container className="d-flex flex-column justify-content-center p-0 w-85">
      <RegisterForm />
    </Container>
  );
}
