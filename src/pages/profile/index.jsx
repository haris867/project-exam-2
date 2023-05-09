import { React, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LogInButton } from "../../components/nav";
import { BaseCard, CardLink, CardImg, CardTitle } from "../home";

const LoginHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 40px;
`;

export default function Profile() {
  const [open, setOpen] = useState(false);

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ width: "85%", padding: "0" }}
    >
      <Row
        className="d-flex align-self-center justify-content-center"
        style={{ width: "100%" }}
      >
        <Col xs={12} sm={11} md={8} lg={7}>
          <Col className="d-flex align-items-center mb-2">
            <div>
              <img
                src="/images/messi-profile.jpg"
                alt=""
                className="rounded-circle"
                style={{ maxWidth: "100px" }}
              />
              <p
                className="text-center"
                style={{
                  fontSize: "1em",
                  color: "var(--color-primary)",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(!open)}
                aria-controls="update-avatar-form"
                aria-expanded={open}
              >
                Update avatar
              </p>
            </div>
            <h1 className="mb-5 ms-3 fw-normal fs-2">Lionel Messi</h1>
          </Col>
          <Collapse in={open}>
            <Col id="update-avatar-form" xs={12}>
              <div className="form-card d-flex justify-content-center flex-wrap p-2 mb-3">
                <input
                  className="m-2"
                  type="text"
                  placeholder="Image URL"
                  style={{
                    height: "calc(2.5em + 0.7vw)",
                    flex: "1 0 100px",
                  }}
                />
                <LogInButton>UPDATE</LogInButton>
              </div>
            </Col>
          </Collapse>
          <Col className="d-flex align-items-center flex-column">
            <h2
              className="mb-3 fs-3"
              style={{ width: "100%", color: "var(--color-primary)" }}
            >
              My bookings
            </h2>

            <BaseCard className="mb-3 w-100">
              <CardLink to={`/register`}>
                <Card.Text className="fs-4 mb-1">Beach Resort</Card.Text>
                <CardImg src="/images/beach-resort.jpg" alt="" />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ alignItems: "baseline" }}
                >
                  <Card.Text className="fs-6">23.05.23-30.05.23</Card.Text>
                </div>
              </CardLink>
            </BaseCard>
            <BaseCard className="mb-3 w-100">
              <CardLink to={`/register`}>
                <Card.Text className="fs-4 mb-1">City Suite</Card.Text>
                <CardImg src="/images/city-suite.jpg" alt="" />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ alignItems: "baseline" }}
                >
                  <Card.Text className="fs-6">23.05.23-30.05.23</Card.Text>
                </div>
              </CardLink>
            </BaseCard>
            <BaseCard className="mb-3 w-100">
              <CardLink to={`/register`}>
                <Card.Text className="fs-4 mb-1">Beach Resort</Card.Text>
                <CardImg src="/images/beach-resort.jpg" alt="" />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ alignItems: "baseline" }}
                >
                  <Card.Text className="fs-6">23.05.23-30.05.23</Card.Text>
                </div>
              </CardLink>
            </BaseCard>
            <BaseCard className="mb-3 w-100">
              <CardLink to={`/register`}>
                <Card.Text className="fs-4 mb-1">City Suite</Card.Text>
                <CardImg src="/images/city-suite.jpg" alt="" />
                <div
                  className="d-flex justify-content-between mt-2"
                  style={{ alignItems: "baseline" }}
                >
                  <Card.Text className="fs-6">23.05.23-30.05.23</Card.Text>
                </div>
              </CardLink>
            </BaseCard>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
