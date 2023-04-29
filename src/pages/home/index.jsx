import React from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeHeadingContainer = styled.div`
  width: 85%;
  margin: 30px auto 0 auto;
  font-weight: 100;
`;

const HomeHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
`;
const HomeSubHeading = styled.h2`
  color: var(--color-primary);
  font-weight: 300;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 0;
`;

export default function Home() {
  return (
    <div>
      <HomeHeadingContainer>
        <HomeHeading>Find a place to stay.</HomeHeading>{" "}
        <HomeSubHeading>For your next adventure.</HomeSubHeading>
      </HomeHeadingContainer>
      <Container>
        <Col xs={12} md={12} lg={12}>
          <Row className="d-flex justify-content-center">
            <Card>
              <Link to={`/venues`}>
                <Card.Title>Venues</Card.Title>
                <Card.Img src="/images/beach-resort.jpg" alt="" />
              </Link>
            </Card>

            <Card>
              <Link to={`/`}>
                <Card.Title>Sign up</Card.Title>
                <Card.Img src="/images/city-suite.jpg" alt="" />
              </Link>
            </Card>

            <Card>
              <Link to={`/`}>
                <Card.Title>Register your venue</Card.Title>
                <Card.Img src="/images/urban-home.jpg" alt="" />
              </Link>
            </Card>
            <Card>
              <Link to={`/about`}>
                <Card.Title>About Us</Card.Title>
                <Card.Img src="/images/private-mansion.jpg" alt="" />
              </Link>
            </Card>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
