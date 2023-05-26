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
    return <div>An error occured</div>;
  }

  console.log(data.venues);

  return (
    <Container className="d-flex flex-column justify-content-center p-0 w-85">
      <Row className="d-flex align-self-center justify-content-center w-100">
        <Col xs={12} sm={11} md={8} lg={7}>
          <Col className="d-flex align-items-center mb-2 mx-auto w-100">
            <div className="d-flex flex-column align-items-center">
              {data.avatar ? (
                <S.ProfileImage
                  src={data.avatar}
                  alt=""
                  className="rounded-circle"
                />
              ) : (
                <S.ProfileImage
                  src="/images/holidaze-logo.png"
                  alt=""
                  className="rounded-circle object-fit-contain"
                />
              )}
              {loggedInUser.name === data.name ? (
                <S.UpdateAvatarButton
                  className="text-center cursor-pointer text-decoration-underline primary-color"
                  onClick={() => setOpen(!open)}
                  aria-controls="update-avatar-form"
                  aria-expanded={open}
                >
                  Update avatar
                </S.UpdateAvatarButton>
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
              <div className="d-flex justify-content-between align-items-center mb-3 w-90">
                <h2 className="fs-3 m-0 primary-color">Venues</h2>
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
            {data.venueManager ? (
              data.venues && data.venues.length > 0 ? (
                data.venues
                  .sort((a, b) => new Date(a.created) - new Date(b.created))
                  .reverse()
                  .map((venue) => (
                    <St.BaseCard className="mb-3">
                      <St.CardLink to={`/venue/${venue.id}`}>
                        <Card.Text className="fs-4 mb-1">
                          {venue.name}
                        </Card.Text>
                        {venue.media && venue.media.length > 0 ? (
                          <St.CardImg src={venue.media[0]} alt={venue.name} />
                        ) : (
                          <St.CardImg
                            className="object-fit-contain"
                            src="/images/holidaze-logo.png"
                            alt="Holidaze logo"
                          />
                        )}
                      </St.CardLink>
                    </St.BaseCard>
                  ))
              ) : isLoading ? (
                <LoadingSpinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </LoadingSpinner>
              ) : (
                <div>You have no venues</div>
              )
            ) : null}
            {loggedInUser.name === data.name ? (
              <div className="w-90">
                <h2 className="mb-3 fs-3 primary-color">Bookings</h2>
                {data.bookings && data.bookings.length > 0 ? (
                  data.bookings.map((booking) => (
                    <St.BaseCard className="mb-3 w-100">
                      <St.CardLink to={`/venue/${booking.venue.id}`}>
                        <Card.Text className="fs-4 mb-1">
                          {booking.venue.name}
                        </Card.Text>
                        {booking.venue.media &&
                        booking.venue.media.length > 0 ? (
                          <St.CardImg
                            src={booking.venue.media[0]}
                            alt={booking.venue.name}
                          />
                        ) : (
                          <St.CardImg
                            className="object-fit-contain"
                            src="/images/holidaze-logo.png"
                            alt="Holidaze logo"
                          />
                        )}
                        <div className="d-flex justify-content-between mt-2">
                          <Card.Text className="fs-6">
                            {new Date(booking.dateFrom).toLocaleDateString()} -
                            {new Date(booking.dateTo).toLocaleDateString()}
                          </Card.Text>
                          <Card.Text className="fs-6">
                            Guests: {booking.guests}
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
