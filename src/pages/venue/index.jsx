import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { Link, useParams } from "react-router-dom";
import { BaseCard, CardImg } from "../../components/commonStyles/cards";
import BookingCalendar from "../../components/calendar";
import "react-datepicker/dist/react-datepicker.css";
import useGetData from "../../hooks/api/getData";
import useSendData from "../../hooks/api/sendData";
import EditForm from "../../components/editForm";
import Carousel from "react-bootstrap/Carousel";
import { load } from "../../storage";
import { LoadingSpinner } from "../../components/commonStyles/loadingSpinner";
import { PrimaryButton } from "../../components/commonStyles/buttons";
import { SecondaryButton } from "../../components/commonStyles/buttons";
import { MainHeading } from "../../components/commonStyles/headings";
import { Helmet } from "react-helmet";
import * as S from "./index.styles";
import { baseUrl } from "../../utils/constants";

export default function VenuePage() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openBookings, setOpenBookings] = useState(false);

  const url = baseUrl + `venues`;

  let { id } = useParams();
  const { data, isFetchLoading, isFetchError } = useGetData(
    url + `/${id}?_owner=true&_bookings=true`
  );

  const { sendData, isLoading, isError } = useSendData();

  const loggedInUser = load("user");

  function deleteVenue() {
    const url = baseUrl + `venues/${id}`;
    sendData("", url, "DELETE");
    setTimeout(() => {
      window.location.href = `/profile/${loggedInUser.name}`;
    }, 1500);
  }

  if (isLoading || isFetchLoading) {
    return (
      <div className="mt-3 d-flex justify-content-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (isError || isFetchError) {
    return <div>An error occured</div>;
  }

  return (
    <Container className="d-flex flex-column justify-content-center p-0 w-85">
      <Helmet>
        <title>
          {data && data.name ? `Holidaze | ${data.name}` : "Holidaze"}
        </title>
      </Helmet>
      <Row className="d-flex align-content-center align-self-center flex-column justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={6} xl={5} className="p-0">
          <MainHeading className="mb-3 fs-3">{data.name}</MainHeading>
        </Col>
        <Col
          className="d-flex justify-content-center p-0 mx-auto"
          xs={12}
          sm={9}
          md={8}
          lg={6}
        >
          <BaseCard>
            {data.media && data.media.length > 0 ? (
              <Carousel>
                {data.media.map((image, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <CardImg src={image} alt={`Image of ${data.name}`} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <CardImg
                className="object-fit-contain"
                src="/images/holidaze-logo.png"
                alt="Holidaze logo"
              />
            )}
            <div className="d-flex justify-content-between mt-2 align-items-baseline">
              <Card.Text className="fs-4 primary-color">Price</Card.Text>
              <Card.Text className="fs-5 primary-color">
                {data.price}$ <span className="fs-6">/day</span>
              </Card.Text>
            </div>
            {loggedInUser && data.owner ? (
              loggedInUser.name !== data.owner.name ? (
                <BookingCalendar />
              ) : null
            ) : (
              <div className="text-center">
                <Link to="/login">
                  <PrimaryButton>LOG IN TO BOOK</PrimaryButton>
                </Link>
              </div>
            )}
            {loggedInUser &&
            data.owner &&
            loggedInUser.name === data.owner.name ? (
              <div className="d-flex flex-column align-items-center">
                <PrimaryButton
                  className="mb-3"
                  onClick={() => setOpenBookings(!openBookings)}
                  aria-controls="bookings-list"
                  aria-expanded={open}
                >
                  VIEW BOOKINGS
                </PrimaryButton>
                <Collapse in={openBookings}>
                  <Col id="bookings-list" xs={12} className="p-0">
                    {data.bookings && data.bookings.length > 0 ? (
                      <div>
                        {data.bookings.map((booking, index) => {
                          return (
                            <S.SingleBooking
                              key={booking.id}
                              className="d-flex justify-content-between align-items-center mb-2"
                            >
                              <div className="fs-2 ms-2">{index + 1} </div>
                              <div className="text-center">
                                <div className="fs-5 me-2">
                                  {new Date(
                                    booking.dateFrom
                                  ).toLocaleDateString()}{" "}
                                  -{" "}
                                  {new Date(
                                    booking.dateTo
                                  ).toLocaleDateString()}
                                </div>
                                <div>Number of guests: {booking.guests}</div>
                              </div>
                            </S.SingleBooking>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center">
                        You have no bookings for this venue.
                      </div>
                    )}
                  </Col>
                </Collapse>
              </div>
            ) : null}
            <div className="mt-4">
              <Card.Title className="fs-4 primary-color">
                Description
              </Card.Title>
              <Card.Text className="primary-color">
                {data.description}
              </Card.Text>
            </div>
            {data.maxGuests ? (
              <div>
                <Card.Text className="fw-semibold mt-3 text-center primary-color">
                  Max number of guests: {data.maxGuests}
                </Card.Text>
              </div>
            ) : null}
            <div className="mt-4">
              <Card.Title className="fs-3 primary-color">Facilities</Card.Title>
              <S.FacilityContainer className="d-flex justify-content-between flex-wrap">
                <S.FacilityThumbnail
                  className={data.meta && data.meta.wifi ? " " : "disabled"}
                >
                  WiFi
                </S.FacilityThumbnail>
                <S.FacilityThumbnail
                  className={
                    data.meta && data.meta.breakfast ? " " : "disabled"
                  }
                >
                  Breakfast
                </S.FacilityThumbnail>
                <S.FacilityThumbnail
                  className={data.meta && data.meta.parking ? " " : "disabled"}
                >
                  Parking
                </S.FacilityThumbnail>
                <S.FacilityThumbnail
                  className={data.meta && data.meta.pets ? " " : "disabled"}
                >
                  Pets
                </S.FacilityThumbnail>
              </S.FacilityContainer>

              <div className="mt-4 d-flex justify-content-center align-items-center">
                <Card.Text className="fs-3 mx-2 mb-0 primary-color">
                  Host:
                </Card.Text>
                <Link
                  to={
                    data.owner && data.owner.name
                      ? `/profile/${data.owner.name}`
                      : null
                  }
                  className="d-flex align-items-center text-decoration-none"
                >
                  {data.owner && data.owner.avatar ? (
                    <S.HostImage
                      src={data.owner.avatar}
                      alt=""
                      className="rounded-circle me-2"
                    />
                  ) : (
                    <S.HostImage
                      src="/images/holidaze-logo.png"
                      alt=""
                      className="rounded-circle me-2 object-fit-contain"
                    />
                  )}
                  {data.owner && data.owner.name ? (
                    <Card.Text className="fs-5 primary-color">
                      {data.owner.name}
                    </Card.Text>
                  ) : null}
                </Link>
              </div>
              {data.owner &&
              loggedInUser &&
              loggedInUser.name === data.owner.name ? (
                <div className="d-flex flex-column justify-content-center mt-3">
                  <SecondaryButton
                    className="mb-3"
                    onClick={() => setOpen(!open)}
                    aria-controls="edit-form"
                    aria-expanded={open}
                  >
                    EDIT
                  </SecondaryButton>
                  <Collapse in={open}>
                    <Col id="edit-form" xs={12} className="p-0">
                      <EditForm />
                    </Col>
                  </Collapse>
                  <SecondaryButton
                    className="mb-3"
                    onClick={() => setOpenDelete(!openDelete)}
                    aria-controls="delete-form"
                    aria-expanded={openDelete}
                  >
                    DELETE
                  </SecondaryButton>
                  <div className="d-flex justify-content-center">
                    <Collapse in={openDelete}>
                      <S.DeleteFormContainer id="delete-form" className="p-0">
                        <S.DeleteForm className="form-card text-center">
                          <h4>Are you sure?</h4>
                          <SecondaryButton onClick={deleteVenue}>
                            YES
                          </SecondaryButton>
                        </S.DeleteForm>
                      </S.DeleteFormContainer>
                    </Collapse>
                  </div>
                </div>
              ) : null}
            </div>
          </BaseCard>
        </Col>
      </Row>
    </Container>
  );
}
