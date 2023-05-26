import { React } from "react";
import { useForm } from "react-hook-form";
import useSendData from "../../hooks/api/sendData";
import { PrimaryButton } from "../commonStyles/buttons";
import * as S from "./index.styles";

export default function UpdateAvatarForm() {
  const { register, handleSubmit } = useForm();
  const url =
    "https://api.noroff.dev/api/v1/holidaze/profiles/TestingBoss/media";
  const { sendData, isLoading, isError } = useSendData(url);

  async function onUpdateSubmit(data) {
    const response = await sendData(data, url, "PUT");
    console.log(response);
    window.location.reload();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <div className="d-flex justify-content-center flex-column p-2 mb-3">
      <form
        className="form-card text-center"
        onSubmit={handleSubmit(onUpdateSubmit)}
      >
        <S.UpdateFormLabel htmlFor="avatar">
          Avatar <p className="d-inline">(image URL)</p>
        </S.UpdateFormLabel>
        <S.UpdateFormInput
          className="m-2"
          type="url"
          placeholder="Image URL"
          required={true}
          {...register("avatar")}
          style={{
            height: "calc(2.5em + 0.7vw)",
          }}
        />
        <PrimaryButton>UPDATE</PrimaryButton>
      </form>
    </div>
  );
}
