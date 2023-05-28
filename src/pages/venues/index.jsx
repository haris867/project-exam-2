import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as S from "../../components/commonStyles/cards";
import * as St from "./index.styles";
import useGetData from "../../hooks/api/getData";
import SearchBar from "../../components/searchBar";
import { LoadingSpinner } from "../../components/commonStyles/loadingSpinner";
import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";
import { baseUrl } from "../../utils/constants";
import { Helmet } from "react-helmet";

export default function Venues() {
  const [open, setOpen] = useState(false);

  const url = baseUrl + `venues`;

  const { data, isLoading, isError } = useGetData(url);

  if (isLoading) {
    return (
      <div className="mt-3 d-flex justify-content-center">
        <LoadingSpinner animation="border" size="lg" role="status">
          <span className="visually-hidden">Loading...</span>
        </LoadingSpinner>
      </div>
    );
  }

  if (isError) {
    return <div>An error occured</div>;
  }

  return (
    <div>
      <MainHeadingContainer className="d-flex justify-content-between align-items-center">
        <MainHeading className="fs-2 mb-0">Venues</MainHeading>

        <St.SearchIcon
          onClick={() => setOpen(!open)}
          aria-controls="search-form"
          aria-expanded={open}
          className="cursor-pointer primary-color fs-2"
        />
      </MainHeadingContainer>
      <Helmet>
        <title>Holidaze | Venues</title>
      </Helmet>
      <Container className="d-flex justify-content-center mt-3 p-0 w-85">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Row className="d-flex justify-content-center w-100">
            <Collapse in={open}>
              <Col id="search-form" xs={12} className="p-0">
                <SearchBar />
              </Col>
            </Collapse>
            {data.map((venue) => (
              <Col
                xs={12}
                sm={10}
                md={6}
                lg={4}
                className="d-flex justify-content-center p-0"
                data-id={venue.id}
              >
                <S.BaseCard>
                  <S.CardLink to={`/venue/${venue.id}`}>
                    {venue.media && venue.media.length > 0 ? (
                      <S.CardImg src={venue.media[0]} alt={venue.name} />
                    ) : (
                      <S.CardImg
                        className="object-fit-contain"
                        src="/images/holidaze-logo.png"
                        alt="Holidaze logo"
                      />
                    )}
                    <St.CardTextContainer className="d-flex justify-content-between mt-2 align-items-baseline">
                      <Card.Title className="fs-5">{venue.name}</Card.Title>
                      <Card.Text className="fs-6 ms-2 fw-bold d-flex">
                        {venue.price}${" "}
                        <span className="fs-6 fw-normal">/day</span>
                      </Card.Text>
                    </St.CardTextContainer>
                  </S.CardLink>
                </S.BaseCard>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
