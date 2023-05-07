import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutHeadingContainer = styled.div`
  width: 85%;
  margin: 30px auto 0 auto;
  font-weight: 100;
`;

const AboutHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
`;

export const BaseCard = styled(Card)`
  background: none;
  border: none;
  width: 90%;
  border-radius: 0%;
  padding: 0;
  margin-bottom: 40px;
`;

const BaseCardImg = styled(Card.Img)`
  border-radius: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HomeCardTitle = styled(Card.Title)`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  z-index: 1;
  color: white;
  position: absolute;
  top: 42%;
  width: 100%;
`;

const CardContainer = styled(Row)`
  width: 100%;
`;

const CardLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  :hover {
    color: var(--color-primary);
  }
`;

const CardImg = styled(Card.Img)`
  border-radius: 0;
  border: solid 2px var(--color-tertiary);
`;

const CardTitle = styled(Card.Title)`
  font-weight: 400;
`;

export default function About() {
  return (
    <div className="about-page">
      <AboutHeadingContainer>
        <AboutHeading>About Us</AboutHeading>
      </AboutHeadingContainer>
      <Container
        style={{ width: "85%", padding: "0" }}
        className="d-flex justify-content-center"
      >
        <Col xs={12} className="d-flex justify-content-center">
          <CardContainer className="d-flex justify-content-center">
            <Col
              xs={12}
              sm={11}
              md={9}
              lg={6}
              className="d-flex justify-content-center"
              style={{ padding: "0" }}
            >
              <BaseCard>
                <CardImg
                  src="/images/beach-resort.jpg"
                  alt=""
                  className="mb-3"
                />
                <Card.Title>Our story</Card.Title>
                <Card.Text>
                  Our story started with a simple idea - to create a platform
                  that simplifies and enhances the booking process, making it
                  easier, more enjoyable, and more personalized for travelers.
                </Card.Text>
                <Card.Text>
                  We wanted to redefine the way people travel and experience
                  their destinations. To do that in a way that connects
                  travelers with unique accommodations, we knew we had to create
                  a platform where both travelers and venues could sign up and
                  start their adventure right away.
                </Card.Text>
              </BaseCard>
            </Col>

            <Col
              xs={12}
              sm={11}
              md={9}
              lg={6}
              className="d-flex justify-content-center"
              style={{ padding: "0" }}
            >
              <BaseCard>
                <CardImg src="/images/city-suite.jpg" alt="" className="mb-3" />
                <Card.Title>Our mission</Card.Title>
                <Card.Text>
                  Holidaze was born out of a shared love for travel and a desire
                  to make a difference in the way people book accommodations.
                  Today we’re proud to present our vision to you and hope you
                  enjoy it as much as we do. We believe that travel should be
                  accessible to everyone and that finding the perfect place to
                  stay should be easy and stress-free.
                </Card.Text>
                <Card.Text>
                  At Holidaze, we understand that travel is about more than just
                  booking a place to stay. It's about experiencing new cultures,
                  trying new foods, and making unforgettable memories. That's
                  why we're dedicated to helping you create the perfect
                  itinerary for your trip. From finding the best restaurants to
                  arranging transportation, our team is here to make sure that
                  your vacation is everything you've dreamed of and more. So why
                  wait? Start planning your next adventure with Holidaze today!
                </Card.Text>
              </BaseCard>
            </Col>
          </CardContainer>
        </Col>
      </Container>
      ;
    </div>
  );
}

// <Container>
//   <div className="d-flex justify-content-center flex-wrap">
//     <Card>
// <Card.Img src="/images/beach-resort.jpg" alt="" />
// <Card.Title>Our story</Card.Title>
// <Card.Text>
//   Our story started with a simple idea - to create a platform that
//   simplifies and enhances the booking process, making it easier,
//   more enjoyable, and more personalized for travelers.
// </Card.Text>
// <Card.Text>
//   We wanted to redefine the way people travel and experience their
//   destinations. To do that in a way that connects travelers with
//   unique accommodations, we knew we had to create a platform where
//   both travelers and venues could sign up and start their adventure
//   right away.
// </Card.Text>
//     </Card>
//     <Card>
// <Card.Img src="/images/city-suite.jpg" alt="" />
// <Card.Title>Our mission</Card.Title>
// <Card.Text>
//   Holidaze was born out of a shared love for travel and a desire to
//   make a difference in the way people book accommodations. Today
//   we’re proud to present our vision to you and hope you enjoy it as
//   much as we do. We believe that travel should be accessible to
//   everyone and that finding the perfect place to stay should be easy
//   and stress-free.
// </Card.Text>
// <Card.Text>
//   At Holidaze, we understand that travel is about more than just
//   booking a place to stay. It's about experiencing new cultures,
//   trying new foods, and making unforgettable memories. That's why
//   we're dedicated to helping you create the perfect itinerary for
//   your trip. From finding the best restaurants to arranging
//   transportation, our team is here to make sure that your vacation
//   is everything you've dreamed of and more. So why wait? Start
//   planning your next adventure with Holidaze today!
// </Card.Text>
//     </Card>
//   </div>
// </Container>;
