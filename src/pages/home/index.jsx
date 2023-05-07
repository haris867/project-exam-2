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

export const BaseCard = styled(Card)`
  background: none;
  border: none;
  width: 90%;
  border-radius: 0%;
  padding: 0;
  gap: 40px;
  margin-bottom: 40px;
`;

const BaseCardImg = styled(Card.Img)`
  border-radius: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HomeCardImg = styled(BaseCardImg)`
  filter: brightness(40%);
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

export const CardContainer = styled(Row)`
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

export default function Home() {
  return (
    <div>
      <HomeHeadingContainer>
        <HomeHeading>Find a place to stay.</HomeHeading>{" "}
        <HomeSubHeading>For your next adventure.</HomeSubHeading>
      </HomeHeadingContainer>
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
                <Link to={`/venues`}>
                  <HomeCardTitle className="fs-1">Venues</HomeCardTitle>
                  <HomeCardImg src="/images/beach-resort.jpg" alt="" />
                </Link>
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
                <Link to={`/register`}>
                  <HomeCardTitle className="fs-1">Sign up</HomeCardTitle>
                  <HomeCardImg src="/images/city-suite.jpg" alt="" />
                </Link>
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
                <Link to={`/register`}>
                  <HomeCardTitle className="fs-1">
                    Register your venue
                  </HomeCardTitle>
                  <HomeCardImg src="/images/private-mansion.jpg" alt="" />
                </Link>
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
                <Link to={`/about`}>
                  <HomeCardTitle className="fs-1">About Us</HomeCardTitle>
                  <HomeCardImg src="/images/city-suite.jpg" alt="" />
                </Link>
              </BaseCard>
            </Col>
          </CardContainer>
        </Col>
      </Container>
      ;
    </div>
  );
}

//

// <Container className="d-flex justify-content-center">
//   <Col xs={11} className="d-flex justify-content-center">
//     <CardContainer className="d-flex justify-content-center">
// <Col
//   xs={12}
//   sm={10}
//   md={8}
//   lg={5}
//   className="d-flex justify-content-center"
// >
// <BaseCard>
//   <Link to={`/venues`}>
//     <HomeCardTitle className="fs-1">Venues</HomeCardTitle>
//     <HomeCardImg src="/images/beach-resort.jpg" alt="" />
//   </Link>
// </BaseCard>
//       </Col>
//       <Col
//         xs={12}
//         sm={10}
//         md={8}
//         lg={5}
//         className="d-flex justify-content-center"
//       >
// <BaseCard>
//   <Link to={`/register`}>
//     <HomeCardTitle className="fs-1">Sign up</HomeCardTitle>
//     <HomeCardImg src="/images/city-suite.jpg" alt="" />
//   </Link>
// </BaseCard>
//       </Col>
//       <Col
//         xs={12}
//         sm={10}
//         md={8}
//         lg={5}
//         className="d-flex justify-content-center"
//       >
// <BaseCard>
//   <Link to={`/register`}>
//     <HomeCardTitle className="fs-1">
//       Register your venue
//     </HomeCardTitle>
//     <HomeCardImg src="/images/private-mansion.jpg" alt="" />
//   </Link>
// </BaseCard>
//       </Col>
//       <Col
//         xs={12}
//         sm={10}
//         md={8}
//         lg={5}
//         className="d-flex justify-content-center"
//       >
// <BaseCard>
//   <Link to={`/about`}>
//     <HomeCardTitle className="fs-1">About Us</HomeCardTitle>
//     <HomeCardImg src="/images/city-suite.jpg" alt="" />
//   </Link>
// </BaseCard>
//       </Col>
//     </CardContainer>
//   </Col>
// </Container>;
