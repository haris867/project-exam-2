import { React, useState } from "react";
import { useForm } from "react-hook-form";
import useSendData from "../../hooks/api/sendData";
import { PrimaryButton } from "../commonStyles/buttons";
import * as S from "../commonStyles/forms";

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
        An error occured
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center flex-column w-100">
      <h2 className="fs-3 m-0 primary-color fw-normal mb-2">Create venue</h2>
      <div className="error-message">{errorMessage}</div>
      <form
        className="form-card my-login-modal d-flex flex-column mb-2 primary-color"
        onSubmit={handleSubmit(onSubmit)}
      >
        <S.FormLabel htmlFor="name">Name</S.FormLabel>
        <input
          type="text"
          placeholder="Venue name"
          required={true}
          maxLength={20}
          {...register("name")}
        />
        <div className="sub-label d-flex">
          <S.FormLabel htmlFor="media">
            Image <p className="d-inline">(URL)</p>
          </S.FormLabel>
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
            className="add-image-icon d-flex mx-3 cursor-pointer"
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
        <S.FormLabel className=" mb-2" htmlFor="price">
          Price
        </S.FormLabel>
        <input
          type="number"
          placeholder="Price per day"
          required={true}
          min={0}
          {...register("price")}
        />
        <S.FormLabel className=" mb-2" htmlFor="maxGuests">
          Max guests
        </S.FormLabel>
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
          <S.FormLabel htmlFor="wifi">Wifi</S.FormLabel>
          <S.FormCheckbox
            className="register-checkbox"
            type="checkbox"
            {...register("wifi")}
          />
        </div>
        <div className="d-flex justify-content-between">
          <S.FormLabel htmlFor="breakfast">Breakfast</S.FormLabel>
          <S.FormCheckbox
            className="register-checkbox"
            type="checkbox"
            {...register("breakfast")}
          />
        </div>
        <div className="d-flex justify-content-between">
          <S.FormLabel htmlFor="parking">Parking</S.FormLabel>
          <S.FormCheckbox
            className="register-checkbox"
            type="checkbox"
            {...register("parking")}
          />
        </div>
        <div className="d-flex justify-content-between">
          <S.FormLabel htmlFor="pets">Pets</S.FormLabel>
          <S.FormCheckbox
            className="register-checkbox"
            type="checkbox"
            {...register("pets")}
          />
        </div>
        <S.FormLabel className=" mb-2" htmlFor="password">
          Description
        </S.FormLabel>
        <S.FormTextarea
          placeholder="Description"
          required={true}
          minLength="8"
          {...register("description")}
        />
        <PrimaryButton type="submit" className="mt-3">
          CREATE
        </PrimaryButton>
      </form>
    </div>
  );
}
