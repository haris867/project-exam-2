import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { CgSearch } from "react-icons/cg";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as S from "../../components/commonStyles/cards";
import useGetData from "../../hooks/api/getData";
import SearchBar from "../../components/searchBar";
import { LoadingSpinner } from "../../components/commonStyles/loadingSpinner";
import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";

export default function Venues() {
  const [open, setOpen] = useState(false);

  const url = "https://api.noroff.dev/api/v1/holidaze/venues";

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
      </MainHeadingContainer>
      <Container
        style={{ width: "85%" }}
        className="d-flex justify-content-center mt-3 p-0"
      >
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
                    <S.CardImg
                      src={
                        venue.media.length > 0
                          ? venue.media[0]
                          : "/images/beach-resort.jpg"
                      }
                      alt=""
                      style={{
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div
                      className="d-flex justify-content-between mt-2"
                      style={{ alignItems: "baseline", maxHeight: "32px" }}
                    >
                      <Card.Title className="fs-5">{venue.name}</Card.Title>
                      <Card.Text className="fs-6 ms-2 fw-bold d-flex">
                        {venue.price}${" "}
                        <span className="fs-6 fw-normal">/day</span>
                      </Card.Text>
                    </div>
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
