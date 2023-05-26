import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import useSendData from "../../hooks/api/sendData";
import useGetData from "../../hooks/api/getData";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../commonStyles/buttons";
import * as S from "../commonStyles/forms";
import { CalendarForm } from "./index.styles";

export default function BookingCalendar() {
  const url = "https://api.noroff.dev/api/v1/holidaze/venues";
  const { register, handleSubmit } = useForm();

  let { id } = useParams();
  const { data, isLoading, isError } = useGetData(
    url + `/${id}?_owner=true&_bookings=true`
  );

  const { sendData } = useSendData(url);
  const [errorMessage, setErrorMessage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [dateTo, setDateTo] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setErrorMessage(null);

    if (start) {
      setDateFrom(`From: ${start.toLocaleDateString()}`);
    }
    if (end) {
      setDateTo(`To: ${end.toLocaleDateString()}`);
    }
    const isOverlappingOrAfterBooking = data.bookings.some((booking) => {
      const bookingStartDate = new Date(booking.dateFrom);
      const bookingEndDate = new Date(booking.dateTo);

      return (
        (start >= bookingStartDate && start <= bookingEndDate) ||
        (end >= bookingStartDate && end <= bookingEndDate) ||
        (start <= bookingStartDate && end >= bookingEndDate)
      );
    });
    if (!end) {
      setDateTo(null);
    }
    if (isOverlappingOrAfterBooking) {
      setErrorMessage(
        "Please select a date range that doesn't overlap with unavailable dates."
      );
      setDateFrom(null);
      setDateTo(null);
      setStartDate(null);
      setEndDate(null);

      return;
    } else {
      setErrorMessage(null);
    }
    setStartDate(start);
  };

  async function onSubmit(data) {
    console.log(data);
    const convertedData = {
      ...data,
      dateFrom: startDate,
      dateTo: endDate,
      guests: parseInt(data.guests),
      venueId: id,
    };
    console.log(convertedData);

    const url = "https://api.noroff.dev/api/v1/holidaze/bookings";

    const result = await sendData(convertedData, url, "POST");

    if (result.errors && result.errors.length > 0) {
      console.log(result.errors[0]);
      setErrorMessage(result.errors[0].message);
    } else {
      setErrorMessage(null);
      window.location.reload();
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-3">
        Error: {isError?.message}
      </div>
    );
  }

  return (
    <div>
      <div className="error-message mb-2">{errorMessage}</div>
      <div className="calendar-container d-flex justify-content-center align-self-center">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          minDate={new Date()}
          endDate={endDate}
          selectsRange
          inline
          filterDate={(date) => {
            if (data && data.bookings) {
              for (let i = 0; i < data.bookings.length; i++) {
                const startDate = new Date(data.bookings[i].dateFrom);
                const endDate = new Date(data.bookings[i].dateTo);
                if (date >= startDate && date <= endDate) {
                  return false;
                }
              }
            }
            return true;
          }}
        />
      </div>
      <div className="form-container d-flex justify-content-center mt-3">
        <CalendarForm
          className="form-card my-login-modal d-flex flex-column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="selected-dates px-3">
            <div className="date-from">{dateFrom}</div>
            <div className="date-to">{dateTo}</div>
          </div>
          <div className="d-flex align-items-center flex-column px-3">
            <S.FormLabel
              className="align-self-start mb-2 mx-0"
              htmlFor="guests"
            >
              Number of guests
            </S.FormLabel>
            <S.FormInput
              className="w-100"
              type="number"
              placeholder="Number of guests"
              required={true}
              min={1}
              max={100}
              pattern="^[0-9]*$"
              {...register("guests")}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <PrimaryButton>BOOK NOW</PrimaryButton>
          </div>
        </CalendarForm>
      </div>
    </div>
  );
}
