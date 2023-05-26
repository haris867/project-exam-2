import { React, useState } from "react";
import { useForm } from "react-hook-form";
import useSendData from "../../hooks/api/sendData";
import { PrimaryButton } from "../commonStyles/buttons";

export default function CreateVenueForm() {
  const { register, handleSubmit, watch } = useForm();
  const url = "https://api.noroff.dev/api/v1/holidaze/venues";

  const { sendData, isLoading, isError } = useSendData(url);
  const [errorMessage, setErrorMessage] = useState(null);

  const [images, setImages] = useState([""]);

  console.log(images);

  const addImageInput = () => {
    if (images.length < 8) {
      setImages([...images, ""]);
    }
  };

  const watchImages = watch("media", [""]);
  console.log(watchImages);

  async function onSubmit(formData) {
    const filteredImages = watchImages.filter((url) => url && url !== "");

    console.log(filteredImages);
    const convertedData = {
      ...formData,
      price: parseInt(formData.price),
      maxGuests: parseInt(formData.maxGuests),
      media: filteredImages,
      meta: {
        wifi: formData.wifi,
        breakfast: formData.breakfast,
        parking: formData.parking,
        pets: formData.pets,
      },
    };

    delete convertedData.wifi;
    delete convertedData.breakfast;
    delete convertedData.parking;
    delete convertedData.pets;

    console.log(convertedData);
    const result = await sendData(convertedData, url, "POST");

    console.log(result);

    if (result.errors && result.errors.length > 0) {
      setErrorMessage(result.errors[0].message);
    } else {
      setTimeout(() => {
        setErrorMessage(null);
        window.location.reload();
      }, 2000);
    }
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-3">
        Creating venue...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-3">
        Error: {isError.message}
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ width: "100%" }}
    >
      <h1>Create venue</h1>
      <div className="error-message">{errorMessage}</div>
      <form
        className="form-card my-login-modal d-flex flex-column mb-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
          Name
        </label>
        <input
          type="text"
          placeholder="Venue name"
          required={true}
          maxLength={20}
          {...register("name")}
        />
        <div className="sub-label d-flex">
          <label htmlFor="media" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
            Image <p className="d-inline">(URL)</p>
          </label>
        </div>
        {images.map((image, index) => (
          <input
            key={index}
            type="url"
            placeholder="Image URL"
            {...register(`media.${index}`)}
          />
        ))}
        {images.length < 8 ? (
          <div
            onClick={addImageInput}
            className="add-image-icon d-flex mx-3"
            style={{ cursor: "pointer" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-plus-circle fw-bold mb-3"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <p className="mx-2">Add image</p>
          </div>
        ) : null}
        <label
          className=" mb-2"
          htmlFor="price"
          style={{ fontSize: "calc(1.2rem + 0.5vw)" }}
        >
          Price
        </label>
        <input
          type="number"
          placeholder="Price per day"
          required={true}
          min={0}
          {...register("price")}
        />
        <label
          className=" mb-2"
          htmlFor="maxGuests"
          style={{ fontSize: "calc(1.2rem + 0.5vw)" }}
        >
          Max guests
        </label>
        <input
          type="number"
          placeholder="Max number of guests"
          required={true}
          min={1}
          max={100}
          pattern="^[0-9]*$"
          {...register("maxGuests")}
        />
        <div className="d-flex justify-content-between">
          <label htmlFor="wifi" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
            Wifi
          </label>
          <input
            className="register-checkbox"
            type="checkbox"
            {...register("wifi")}
            style={{ width: "calc(1.5em + 0.7vw)" }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label
            htmlFor="breakfast"
            style={{ fontSize: "calc(1.2rem + 0.5vw)" }}
          >
            Breakfast
          </label>
          <input
            className="register-checkbox"
            type="checkbox"
            {...register("breakfast")}
            style={{ width: "calc(1.5em + 0.7vw)" }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="parking" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
            Parking
          </label>
          <input
            className="register-checkbox"
            type="checkbox"
            {...register("parking")}
            style={{ width: "calc(1.5em + 0.7vw)" }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="pets" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
            Pets
          </label>
          <input
            className="register-checkbox"
            type="checkbox"
            {...register("pets")}
            style={{ width: "calc(1.5em + 0.7vw)" }}
          />
        </div>
        <label
          className=" mb-2"
          htmlFor="password"
          style={{ fontSize: "calc(1.2rem + 0.5vw)" }}
        >
          Description
        </label>
        <textarea
          placeholder="Description"
          required={true}
          minLength="8"
          {...register("description")}
          style={{ height: "calc(4.5em + 0.7vw)" }}
        />
        <PrimaryButton type="submit" className="mt-3">
          CREATE
        </PrimaryButton>
      </form>
    </div>
  );
}
