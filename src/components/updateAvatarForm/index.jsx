import { React } from "react";
import { useForm } from "react-hook-form";
import useSendData from "../../hooks/api/sendData";
import { PrimaryButton } from "../commonStyles/buttons";
import * as S from "./index.styles";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utils/constants";

export default function UpdateAvatarForm() {
  const { register, handleSubmit } = useForm();
  let { name } = useParams();
  const url = baseUrl + `profiles/${name}/media`;
  const { sendData, isLoading, isError } = useSendData(url);

  async function onUpdateSubmit(data) {
    const response = await sendData(data, url, "PUT");
    window.location.reload();
  }

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div>An error occured</div>;
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
        />
        <PrimaryButton>UPDATE</PrimaryButton>
      </form>
    </div>
  );
}
