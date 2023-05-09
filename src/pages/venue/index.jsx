import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LogInButton } from "../../components/nav";
import { BaseCard, CardLink, CardImg, CardTitle } from "../home";

export const LoginHeading = styled.h1`
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
      <Row
        className="d-flex align-content-center align-self-center flex-column justify-content-center"
        style={{ width: "100%" }}
      >
        <Col xs={12} sm={8} md={6} className="p-0">
          <LoginHeading className="mb-3">Beach Resort</LoginHeading>
        </Col>
        <Col
          className="d-flex justify-content-center p-0"
          xs={12}
          sm={10}
          md={8}
          lg={6}
        >
          <BaseCard className="w-100">
            <CardImg src="/images/beach-resort.jpg" alt="" />
            <div
              className="d-flex justify-content-between mt-2"
              style={{ alignItems: "baseline" }}
            >
              <CardTitle
                className="fs-3"
                style={{ color: "var(--color-primary)" }}
              >
                Price
              </CardTitle>
              <Card.Text
                className="fs-4"
                style={{ color: "var(--color-primary)" }}
              >
                120$ <span className="fs-6">per night</span>
              </Card.Text>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <LogInButton>BOOK NOW</LogInButton>
            </div>
            <div className="mt-4">
              <CardTitle
                className="fs-3"
                style={{ color: "var(--color-primary)" }}
              >
                Description
              </CardTitle>
              <Card.Text style={{ color: "var(--color-primary)" }}>
                This resort is out of this world. You won’t want to leave once
                you get used to the pristine beaches, the wonderful weather and
                the beautiful beaches.
              </Card.Text>
              <Card.Text style={{ color: "var(--color-primary)" }}>
                We have everything you need and much more. Welcome to our Beach
                Resort.
              </Card.Text>
            </div>
          </BaseCard>
        </Col>
      </Row>
    </Container>
  );
}
