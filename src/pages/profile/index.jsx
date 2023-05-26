import { React, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as St from "../../components/commonStyles/cards";
import useGetData from "../../hooks/api/getData";
import CreateVenueForm from "../../components/createVenueForm";
import UpdateAvatarForm from "../../components/updateAvatarForm";
import { load } from "../../storage";
import { LoadingSpinner } from "../../components/commonStyles/loadingSpinner";
import * as S from "./index.styles";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const loggedInUser = load("user");

  const url = "https://api.noroff.dev/api/v1/holidaze/profiles/";

  let { name } = useParams();
  const { data, isLoading, isError } = useGetData(
    url + name + `?_bookings=true&_venues=true`,
    {
      headers: {
        Authorization: `Bearer ${loggedInUser.accessToken}`,
      },
    }
  );

  console.log(data);

  if (isLoading) {
    return (
      <LoadingSpinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </LoadingSpinner>
    );
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  console.log(data.venues);

  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ width: "85%", padding: "0" }}
    >
      <Row
        className="d-flex align-self-center justify-content-center"
        style={{ width: "100%" }}
      >
        <Col xs={12} sm={11} md={8} lg={7}>
          <Col
            className="d-flex align-items-center mb-2 mx-auto"
            style={{ width: "95%" }}
          >
            <div className="d-flex flex-column align-items-center">
              {data.avatar ? (
                <S.ProfileImage
                  src={data.avatar}
                  alt=""
                  className="rounded-circle"
                />
              ) : (
                <S.ProfileImage
                  src="/images/messi-profile.jpg"
                  alt=""
                  className="rounded-circle"
                />
              )}
              {loggedInUser.name === data.name ? (
                <p
                  className="text-center"
                  style={{
                    fontSize: "1em",
                    color: "var(--color-primary)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(!open)}
                  aria-controls="update-avatar-form"
                  aria-expanded={open}
                >
                  Update avatar
                </p>
              ) : null}
            </div>
            <h1 className="mb-5 fw-normal fs-2">{data.name}</h1>
          </Col>
          <Collapse in={open}>
            <Col id="update-avatar-form" xs={12}>
              <UpdateAvatarForm />
            </Col>
          </Collapse>
          <Col className="d-flex align-items-center flex-column">
            {data.venueManager ? (
              <div
                className="d-flex justify-content-between align-items-center mb-3"
                style={{ width: "90%" }}
              >
                <h2
                  className="fs-3 m-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  Venues
                </h2>
                {loggedInUser.name === data.name ? (
                  <S.PlusIcon
                    onClick={() => setOpenForm(!openForm)}
                    aria-controls="create-venue-form"
                    aria-expanded={open}
                  />
                ) : null}
              </div>
            ) : null}
            {loggedInUser.name === data.name ? (
              <Collapse in={openForm}>
                <div id="create-venue-form">
                  <CreateVenueForm />
                </div>
              </Collapse>
            ) : null}
            {data.venueManager && data.venues.length > 0 ? (
              data.venues
                .sort((a, b) => new Date(a.created) - new Date(b.created))
                .reverse()
                .map((venue) => (
                  <St.BaseCard className="mb-3">
                    <St.CardLink to={`/venue/${venue.id}`}>
                      <Card.Text className="fs-4 mb-1">{venue.name}</Card.Text>
                      <St.CardImg
                        src={
                          venue.media.length > 0
                            ? venue.media[0]
                            : "/images/beach-resort.jpg"
                        }
                        alt=""
                      />
                    </St.CardLink>
                  </St.BaseCard>
                ))
            ) : (
              <div>You have no venues</div>
            )}
            {loggedInUser.name === data.name ? (
              <div>
                <h2
                  className="mb-3 fs-3"
                  style={{ width: "90%", color: "var(--color-primary)" }}
                >
                  Bookings
                </h2>
                {data.bookings && data.bookings.length > 0 ? (
                  data.bookings.map((booking) => (
                    <St.BaseCard className="mb-3">
                      <St.CardLink to={`/venue/${booking.venue.id}`}>
                        <Card.Text className="fs-4 mb-1">
                          {booking.venue.name}
                        </Card.Text>
                        <St.CardImg
                          src={
                            booking.venue.media.length > 0
                              ? booking.venue.media[0]
                              : "/images/beach-resort.jpg"
                          }
                          alt=""
                        />

                        <div className="d-flex justify-content-between mt-2">
                          <Card.Text className="fs-6">
                            {new Date(booking.dateFrom).toLocaleDateString()} -
                            {new Date(booking.dateTo).toLocaleDateString()}
                          </Card.Text>
                          <Card.Text className="fs-6">
                            Number of guests: {booking.guests}
                          </Card.Text>
                        </div>
                      </St.CardLink>
                    </St.BaseCard>
                  ))
                ) : (
                  <div>You have no bookings</div>
                )}
              </div>
            ) : null}
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
