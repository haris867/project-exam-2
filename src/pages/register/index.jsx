import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const LoginHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
`;

const FormButton = styled.input`
  color: white;
  background: var(--color-primary);
  border: none;
  border-radius: 3px;
  width: 70%;
  align-self: center;
`;

const registerLink = styled.a`
  color: var(--color-primary);
`;

export default function Register() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="about-page">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col
            className="form-card d-flex justify-content-center"
            xs={8}
            md={5}
          >
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <form
                className="my-login-modal d-flex flex-column"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  {...register("full-name")}
                />
                <div className="sub-label d-flex">
                  <label htmlFor="">
                    Avatar <p className="d-inline">(image URL)</p>
                  </label>
                </div>
                <input
                  type="url"
                  placeholder="Avatar image URL"
                  {...register("avatar-url")}
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                />
                <label htmlFor="">Password</label>

                <input
                  type="password"
                  placeholder="Your password"
                  {...register("password")}
                />
                <FormButton className="mt-3" type="submit" value={"REGISTER"} />
                <div>
                  <p className="mt-3">Not registered?</p>
                  <p>SIGN UP NOW!</p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
