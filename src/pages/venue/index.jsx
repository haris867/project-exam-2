import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogInButton } from "../../components/nav";
import { BaseCard, CardImg, CardTitle } from "../home";
import BookingCalendar from "../../components/calendar";
import "react-datepicker/dist/react-datepicker.css";

export const LoginHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 40px;
`;

const FacilityThumbnail = styled.div`
  display: inline-block;
  padding: 10px;
  border: 3px solid var(--color-primary);
  width: calc(40% + 2vw);
  text-align: center;
  background-color: white;
  color: var(--color-primary);
  font-weight: 700;
`;

export default function VenuePage() {
  // const { register, handleSubmit } = useForm();

  // function onSubmit(data) {
  //   console.log(data);
  // }
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ width: "85%", padding: "0" }}
    >
      <Row
        className="d-flex align-content-center align-self-center flex-column justify-content-center"
        style={{ width: "100%" }}
      >
        <Col xs={12} sm={8} md={6} lg={6} xl={5} className="p-0">
          <LoginHeading className="mb-3 fs-3">Beach Resort</LoginHeading>
        </Col>
        <Col
          className="d-flex justify-content-center p-0 mx-auto"
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={5}
        >
          <BaseCard>
            <CardImg src="/images/beach-resort.jpg" alt="" />
            <div
              className="d-flex justify-content-between mt-2"
              style={{ alignItems: "baseline" }}
            >
              <Card.Text
                className="fs-4"
                style={{ color: "var(--color-primary)" }}
              >
                Price
              </Card.Text>
              <Card.Text
                className="fs-5"
                style={{ color: "var(--color-primary)" }}
              >
                120$ <span className="fs-6">/day</span>
              </Card.Text>
            </div>
            <div className="calendar-container d-flex justify-content-center align-self-center">
              <BookingCalendar />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <LogInButton>BOOK NOW</LogInButton>
            </div>
            <div className="mt-4">
              <CardTitle
                className="fs-4"
                style={{ color: "var(--color-primary)" }}
              >
                Description
              </CardTitle>
              <Card.Text style={{ color: "var(--color-primary)" }}>
                This resort is out of this world. You won't want to leave once
                you get used to the pristine beaches, the wonderful weather and
                the beautiful beaches.
              </Card.Text>
              <Card.Text style={{ color: "var(--color-primary)" }}>
                We have everything you need and much more. Welcome to our Beach
                Resort.
              </Card.Text>
            </div>

            <div className="mt-4">
              <CardTitle
                className="fs-3"
                style={{ color: "var(--color-primary)" }}
              >
                Facilities
              </CardTitle>
              <div
                className="d-flex justify-content-between flex-wrap"
                style={{ gap: "15px" }}
              >
                <FacilityThumbnail>WiFi</FacilityThumbnail>
                <FacilityThumbnail>Breakfast</FacilityThumbnail>
                <FacilityThumbnail className="disabled">
                  Parking
                </FacilityThumbnail>
                <FacilityThumbnail>Pets</FacilityThumbnail>
              </div>
              <div>
                <Card.Text
                  className="fw-semibold mt-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  Max number of guests: 5
                </Card.Text>
              </div>
              <div className="mt-4 d-flex justify-content-center align-items-center">
                <Card.Text
                  className="fs-3 mx-2 mb-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  Host:
                </Card.Text>
                <Link
                  to="/profile"
                  className="d-flex align-items-center text-decoration-none"
                  style={{}}
                >
                  <img
                    src="/images/messi-profile.jpg"
                    alt=""
                    className="rounded-circle me-2"
                    style={{
                      maxWidth: "50px",
                      border: "2px solid var(--color-tertiary)",
                    }}
                  />
                  <Card.Text
                    className="fs-5"
                    style={{
                      color: "var(--color-primary)",
                    }}
                  >
                    Lionel Messi
                  </Card.Text>
                </Link>
              </div>
            </div>
          </BaseCard>
        </Col>
      </Row>
    </Container>
  );
}
