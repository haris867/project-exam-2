import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as S from "../commonStyles/forms";
import useGetData from "../../hooks/api/getData";
import useSendData from "../../hooks/api/sendData";
import { useState, useEffect } from "react";
import { PrimaryButton } from "../commonStyles/buttons";

export default function EditForm() {
  const url = "https://api.noroff.dev/api/v1/holidaze/venues";

  let { id } = useParams();
  const { data, isLoading, isError } = useGetData(url + `/${id}`);

  const { sendData, isFetchLoading, isFetchError } = useSendData(
    url + `/${id}`
  );

  const { register, handleSubmit, watch } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);
  const [images, setImages] = useState([""]);

  useEffect(() => {
    if (data && data.media && data.media.length > 0) {
      setImages(data.media);
    }
  }, [data]);

  const watchImages = watch("media", [""]);
  console.log(watchImages);

  const addImageInput = () => {
    if (images.length < 8) {
      setImages([...images, ""]);
    }
  };

  function onSubmit(formData) {
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

    const result = sendData(convertedData, url + `/${id}`, "PUT");
    if (result.errors && result.errors.length > 0) {
      console.log(result.errors[0]);
      setErrorMessage(result.errors[0].message);
    } else {
      setErrorMessage(null);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }

  if (isLoading || isFetchLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-3">
        Loading...
      </div>
    );
  }

  if (isError || isFetchError) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-3">
        Error: {isError?.message || isFetchError?.message}
      </div>
    );
  }

  return (
    <form
      className="form-card my-login-modal d-flex flex-column mb-3 color-primary"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="message">{errorMessage}</div>
      <S.FormLabel htmlFor="name">Name</S.FormLabel>
      {data.name ? (
        <S.FormInput
          type="text"
          placeholder="Venue name"
          required={true}
          defaultValue={data.name}
          maxLength={20}
          {...register("name")}
        />
      ) : null}
      <div className="sub-label d-flex">
        <S.FormLabel htmlFor="media">
          Image <p className="d-inline">(URL)</p>
        </S.FormLabel>
      </div>
      <div className="d-flex flex-column mx-3 align-items-center">
        {images.map((image, index) => (
          <S.FormInput
            className="w-100"
            key={index}
            defaultValue={image}
            {...register(`media.${index}`)}
            type="url"
            placeholder="Image URL"
          />
        ))}
      </div>
      {data.media && images.length + data.media.length < 8 ? (
        <S.AddImageContainer
          onClick={addImageInput}
          className="add-image-icon d-flex align-items-center mx-3"
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
        </S.AddImageContainer>
      ) : null}
      <S.FormLabel className=" mb-2" htmlFor="price">
        Price
      </S.FormLabel>
      {data.price ? (
        <S.FormInput
          type="number"
          placeholder="Price per day"
          defaultValue={data.price}
          required={true}
          min={0}
          {...register("price")}
        />
      ) : null}
      <S.FormLabel className=" mb-2" htmlFor="maxGuests">
        Max guests
      </S.FormLabel>
      {data.maxGuests ? (
        <S.FormInput
          type="number"
          placeholder="Max number of guests"
          defaultValue={data.maxGuests}
          required={true}
          min={1}
          max={100}
          pattern="^[0-9]*$"
          {...register("maxGuests")}
        />
      ) : null}
      {data.meta ? (
        <div>
          <S.FormCheckboxContainer>
            <S.FormLabel htmlFor="wifi">Wifi</S.FormLabel>
            <S.FormCheckbox
              className="register-checkbox"
              type="checkbox"
              defaultChecked={data.meta.wifi}
              {...register("wifi")}
            />
          </S.FormCheckboxContainer>
          <S.FormCheckboxContainer>
            <S.FormLabel htmlFor="breakfast">Breakfast</S.FormLabel>
            <S.FormCheckbox
              className="register-checkbox"
              type="checkbox"
              defaultChecked={data.meta.breakfast}
              {...register("breakfast")}
            />
          </S.FormCheckboxContainer>
          <S.FormCheckboxContainer>
            <S.FormLabel htmlFor="parking">Parking</S.FormLabel>
            <S.FormCheckbox
              className="register-checkbox"
              type="checkbox"
              defaultChecked={data.meta.parking}
              {...register("parking")}
            />
          </S.FormCheckboxContainer>
          <S.FormCheckboxContainer>
            <S.FormLabel htmlFor="pets">Pets</S.FormLabel>
            <S.FormCheckbox
              className="register-checkbox"
              type="checkbox"
              defaultChecked={data.meta.pets}
              {...register("pets")}
            />
          </S.FormCheckboxContainer>
        </div>
      ) : null}
      <S.FormLabel className=" mb-2" htmlFor="password">
        Description
      </S.FormLabel>
      {data.description ? (
        <S.FormTextarea
          placeholder="Description"
          defaultValue={data.description}
          required={true}
          minLength="8"
          {...register("description")}
        />
      ) : null}
      <PrimaryButton type="submit" className="mt-3">
        UPDATE
      </PrimaryButton>
    </form>
  );
}
