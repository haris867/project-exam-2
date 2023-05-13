import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { CgSearch } from "react-icons/cg";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { BaseCard, CardContainer } from "../home";
import Login from "../login";
import { LogInButton } from "../../components/nav";

const venues = [
  {
    name: "Beach Resort",
    image: "/images/beach-resort.jpg",
    price: 120,
    id: 1,
  },
  {
    name: "City Suite",
    image: "/images/city-suite.jpg",
    price: 121,
    id: 2,
  },
  {
    name: "Private Mansion",
    image: "/images/private-mansion.jpg",
    price: 122,
    id: 3,
  },
  {
    name: "Urban Home",
    image: "/images/city-suite.jpg",
    price: 124,
    id: 4,
  },
];

const AboutHeadingContainer = styled.div`
  width: 85%;
  margin: 30px auto 0 auto;
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutHeading = styled.h1`
  font-weight: 500;
  margin-bottom: 0;
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

export default function Venues() {
  const [open, setOpen] = useState(false);
  console.log(venues);
  return (
    <div>
      <AboutHeadingContainer>
        <AboutHeading className="fs-2">Venues</AboutHeading>
        <CgSearch
          onClick={() => setOpen(!open)}
          aria-controls="search-form"
          aria-expanded={open}
          style={{
            fontSize: "calc(1.5em + 1vw)",
            color: "var(--color-primary)",
            cursor: "pointer",
          }}
        />
      </AboutHeadingContainer>
      <Container
        style={{ width: "85%", padding: "0" }}
        className="d-flex justify-content-center mt-3"
      >
        <Col xs={12} className="d-flex justify-content-center">
          <CardContainer className="d-flex justify-content-center">
            <Collapse in={open}>
              <Col xs={12} md={9} lg={9} className="mb-4">
                <div
                  className="d-flex justify-content-center flex-wrap"
                  style={{ gap: "10px" }}
                >
                  <input
                    className="m-2"
                    type="text"
                    placeholder="Search"
                    style={{
                      height: "calc(2.5em + 0.7vw)",
                      flex: "1 0 100px",
                      width: "calc(18rem + 9vw)",
                      maxWidth: "350px",
                    }}
                  />
                  <LogInButton>SEARCH</LogInButton>
                </div>
              </Col>
            </Collapse>
            {venues.map((venue) => (
              <Col
                id="search-form"
                xs={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center"
                style={{ padding: "0" }}
                data-id={venue.id}
              >
                <BaseCard>
                  <CardLink to={`/venue`}>
                    <CardImg src={venue.image} alt="" />
                    <div
                      className="d-flex justify-content-between mt-2"
                      style={{ alignItems: "baseline" }}
                    >
                      <CardTitle className="fs-5">{venue.name}</CardTitle>
                      <Card.Text className="fs-6 fw-bold d-flex">
                        {venue.price}${" "}
                        <span className="fs-6 fw-normal">/day</span>
                      </Card.Text>
                    </div>
                  </CardLink>
                </BaseCard>
              </Col>
            ))}
          </CardContainer>
        </Col>
      </Container>
    </div>
  );
}

// <Col
//   xs={12}
//   sm={11}
//   md={9}
//   lg={6}
//   className="d-flex justify-content-center"
//   style={{ padding: "0" }}
// >
// <BaseCard>
//   <CardLink to={`/register`}>
//     <CardImg src="/images/city-suite.jpg" alt="" />
//     <div
//       className="d-flex justify-content-between mt-2"
//       style={{ alignItems: "baseline" }}
//     >
//       <CardTitle className="fs-3">City Suite</CardTitle>
//       <Card.Text className="fs-4">
//         120$ <span className="fs-6">per night</span>
//       </Card.Text>
//     </div>
//   </CardLink>
// </BaseCard>
// </Col>
// <Col
//   xs={12}
//   sm={11}
//   md={9}
//   lg={6}
//   className="d-flex justify-content-center"
//   style={{ padding: "0" }}
// >
// <BaseCard>
//   <CardLink to={`/register`}>
//     <CardImg src="/images/private-mansion.jpg" alt="" />
//     <div
//       className="d-flex justify-content-between mt-2"
//       style={{ alignItems: "baseline" }}
//     >
//       <CardTitle className="fs-3">Private Mansion</CardTitle>
//       <Card.Text className="fs-4">
//         120$ <span className="fs-6">per night</span>
//       </Card.Text>
//     </div>
//   </CardLink>
// </BaseCard>
// </Col>
// <Col
//   xs={12}
//   sm={11}
//   md={9}
//   lg={6}
//   className="d-flex justify-content-center"
//   style={{ padding: "0" }}
// >
//   <BaseCard>
//     <CardLink to={`/about`}>
//       <CardImg src="/images/city-suite.jpg" alt="" />
//       <div
//         className="d-flex justify-content-between mt-2"
//         style={{ alignItems: "baseline" }}
//       >
//         <CardTitle className="fs-3">Urban Home</CardTitle>
//         <Card.Text className="fs-4">
//           120$ <span className="fs-6">per night</span>
//         </Card.Text>
//       </div>
//     </CardLink>
//   </BaseCard>
// </Col>

/*  */
// <div
//   style={{
//     display: "grid",
//     gridTemplateColumns: "repeat(autofit, minmax(300px, 1fr))",
//     gap: "1rem",
//   }}
// ></div>;
