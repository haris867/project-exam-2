import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LogInButton } from "../../components/nav";

const RegisterHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 40px;
`;

export default function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ width: "85%", padding: "0" }}
    >
      <RegisterHeading>Register</RegisterHeading>
      <Row
        className="d-flex align-self-center justify-content-center"
        style={{ width: "100%" }}
      >
        <Col
          className="form-card d-flex justify-content-center"
          xs={12}
          sm={8}
          md={6}
        >
          <div
            className="d-flex justify-content-center"
            style={{ width: "100%" }}
          >
            <form
              className="my-login-modal d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                {...register("full-name")}
                style={{ height: "calc(2.5em + 0.7vw)" }}
              />
              <div className="sub-label d-flex">
                <label htmlFor="" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
                  Avatar <p className="d-inline">(image URL)</p>
                </label>
              </div>
              <input
                type="url"
                placeholder="Avatar image URL"
                {...register("avatar-url")}
                style={{ height: "calc(2.5em + 0.7vw)" }}
              />{" "}
              <label
                className=" mb-2"
                htmlFor=""
                style={{ fontSize: "calc(1.2rem + 0.5vw)" }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                {...register("email")}
                style={{ height: "calc(2.5em + 0.7vw)" }}
              />
              <label
                className=" mb-2"
                htmlFor=""
                style={{ fontSize: "calc(1.2rem + 0.5vw)" }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                {...register("password")}
                style={{ height: "calc(2.5em + 0.7vw)" }}
              />
              <LogInButton type="submit" className="mt-3">
                REGISTER
              </LogInButton>
              <NavLink
                to="/login"
                className="form-link1 align-self-center text-center"
              >
                <div>
                  <p className="mt-3 mb-0">Already registered?</p>
                  <p className="fw-bold">LOG IN HERE</p>
                </div>
              </NavLink>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
