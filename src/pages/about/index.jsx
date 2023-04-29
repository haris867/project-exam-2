import React from "react";
import { Container, Card } from "react-bootstrap";
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

export default function About() {
  return (
    <div className="about-page">
      <AboutHeadingContainer>
        <AboutHeading>About Us</AboutHeading>
      </AboutHeadingContainer>
      <Container>
        <div className="d-flex justify-content-center flex-wrap">
          <Card>
            <Card.Img src="/images/beach-resort.jpg" alt="" />
            <Card.Title>Our story</Card.Title>
            <Card.Text>
              Our story started with a simple idea - to create a platform that
              simplifies and enhances the booking process, making it easier,
              more enjoyable, and more personalized for travelers.
            </Card.Text>
            <Card.Text>
              We wanted to redefine the way people travel and experience their
              destinations. To do that in a way that connects travelers with
              unique accommodations, we knew we had to create a platform where
              both travelers and venues could sign up and start their adventure
              right away.
            </Card.Text>
          </Card>
          <Card>
            <Card.Img src="/images/city-suite.jpg" alt="" />
            <Card.Title>Our mission</Card.Title>
            <Card.Text>
              Holidaze was born out of a shared love for travel and a desire to
              make a difference in the way people book accommodations. Today
              we’re proud to present our vision to you and hope you enjoy it as
              much as we do. We believe that travel should be accessible to
              everyone and that finding the perfect place to stay should be easy
              and stress-free.
            </Card.Text>
            <Card.Text>
              At Holidaze, we understand that travel is about more than just
              booking a place to stay. It's about experiencing new cultures,
              trying new foods, and making unforgettable memories. That's why
              we're dedicated to helping you create the perfect itinerary for
              your trip. From finding the best restaurants to arranging
              transportation, our team is here to make sure that your vacation
              is everything you've dreamed of and more. So why wait? Start
              planning your next adventure with Holidaze today!
            </Card.Text>
          </Card>
        </div>
      </Container>
    </div>
  );
}
