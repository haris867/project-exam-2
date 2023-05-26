import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";
import * as S from "../../components/commonStyles/cards";

export default function About() {
  return (
    <div className="about-page">
      <MainHeadingContainer>
        <MainHeading>About Us</MainHeading>
      </MainHeadingContainer>
      <Container
        style={{ width: "85%" }}
        className="d-flex justify-content-center p-0"
      >
        <Col xs={12} className="d-flex justify-content-center">
          <Row className="d-flex justify-content-center w-100">
            <Col
              xs={12}
              sm={11}
              md={9}
              lg={6}
              xl={5}
              className="d-flex justify-content-center p-0"
            >
              <S.BaseCard>
                <S.CardImg
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
              </S.BaseCard>
            </Col>

            <Col
              xs={12}
              sm={11}
              md={9}
              lg={6}
              xl={5}
              className="d-flex justify-content-center p-0"
            >
              <S.BaseCard>
                <S.CardImg
                  src="/images/city-suite.jpg"
                  alt=""
                  className="mb-3"
                />
                <Card.Title>Our mission</Card.Title>
                <Card.Text>
                  Holidaze was born out of a shared love for travel and a desire
                  to make a difference in the way people book accommodations.
                  Today we're proud to present our vision to you and hope you
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
              </S.BaseCard>
            </Col>
          </Row>
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
