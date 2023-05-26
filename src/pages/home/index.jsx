import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { load } from "../../storage";
import { BaseCard } from "../../components/commonStyles/cards";
import * as S from "./index.styles.js";
import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";

export default function Home() {
  const isLoggedIn = load("user");
  return (
    <div>
      <MainHeadingContainer>
        <MainHeading className="mb-0">Find a place to stay.</MainHeading>{" "}
        <S.HomeSubHeading>For your next adventure.</S.HomeSubHeading>
      </MainHeadingContainer>
      <Container
        style={{ width: "85%", padding: "0" }}
        className="d-flex justify-content-center"
      >
        <Col xs={12} className="d-flex justify-content-center">
          <Row className="d-flex justify-content-center w-100">
            <Col
              xs={12}
              sm={11}
              md={6}
              lg={5}
              className="d-flex justify-content-center"
              style={{ padding: "0" }}
            >
              <BaseCard>
                <Link to={`/venues`}>
                  <S.HomeCardTitle className="fs-1">Venues</S.HomeCardTitle>
                  <S.HomeCardImg src="/images/beach-resort.jpg" alt="" />
                </Link>
              </BaseCard>
            </Col>
            {!isLoggedIn ? (
              <Col
                xs={12}
                sm={11}
                md={6}
                lg={5}
                className="d-flex justify-content-center"
                style={{ padding: "0" }}
              >
                <BaseCard>
                  <Link to={`/login`}>
                    <S.HomeCardTitle className="fs-1">Log in</S.HomeCardTitle>
                    <S.HomeCardImg src="/images/city-suite.jpg" alt="" />
                  </Link>
                </BaseCard>
              </Col>
            ) : null}
            {!isLoggedIn ? (
              <Col
                xs={12}
                sm={11}
                md={6}
                lg={5}
                className="d-flex justify-content-center"
                style={{ padding: "0" }}
              >
                <BaseCard>
                  <Link to={`/register`}>
                    <S.HomeCardTitle className="fs-1">Sign up</S.HomeCardTitle>
                    <S.HomeCardImg src="/images/private-mansion.jpg" alt="" />
                  </Link>
                </BaseCard>
              </Col>
            ) : null}
            <Col
              xs={12}
              sm={11}
              md={6}
              lg={5}
              className="d-flex justify-content-center"
              style={{ padding: "0" }}
            >
              <BaseCard>
                <Link to={`/about`}>
                  <S.HomeCardTitle className="fs-1">About Us</S.HomeCardTitle>
                  <S.HomeCardImg src="/images/city-suite.jpg" alt="" />
                </Link>
              </BaseCard>
            </Col>
          </Row>
        </Col>
      </Container>
      ;
    </div>
  );
}
