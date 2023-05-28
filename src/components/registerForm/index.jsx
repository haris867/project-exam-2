import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import * as S from "../commonStyles/forms";
import useSendData from "../../hooks/api/sendData";
import { useState } from "react";
import { PrimaryButton } from "../commonStyles/buttons";
import { MainHeading } from "../commonStyles/headings";
import { baseUrl } from "../../utils/constants";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const url = baseUrl + `auth/register`;

  const { sendData, isLoading, isError } = useSendData(url);
  const [errorMessage, setErrorMessage] = useState(null);

  async function onSubmit(data) {
    const result = sendData(data, url, "POST");

    if (result.errors && result.errors.length > 0) {
      setErrorMessage(result.errors[0].message);
    } else {
      setErrorMessage(null);
      // setTimeout(() => {
      //   window.location.href = "/login";
      // }, 2000);
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
    <Row className="d-flex align-content-center align-self-center flex-column justify-content-center w-100">
      <Col xs={12} sm={8} md={6} className="p-0">
        <MainHeading>Register</MainHeading>
      </Col>
      <div className="error-message">{errorMessage}</div>
      <Col
        className="form-card d-flex justify-content-center"
        xs={12}
        sm={8}
        md={6}
      >
        <div className="d-flex justify-content-center w-100">
          <form
            className="my-login-modal d-flex flex-column primary-color w-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <S.FormLabel htmlFor="name">Name</S.FormLabel>
            <S.FormInput
              type="text"
              placeholder="Your full name"
              required={true}
              maxLength={20}
              pattern="^[\w]+$"
              {...register("name")}
            />
            <div className="sub-label d-flex">
              <S.FormLabel htmlFor="avatar">
                Avatar <p className="d-inline">(image URL)</p>
              </S.FormLabel>
            </div>
            <S.FormInput
              type="url"
              placeholder="Avatar image URL"
              {...register("avatar")}
            />{" "}
            <S.FormLabel className=" mb-2" htmlFor="email">
              Email
            </S.FormLabel>
            <S.FormInput
              type="email"
              placeholder="Your email"
              required={true}
              pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
              {...register("email")}
            />
            <S.FormLabel className=" mb-2" htmlFor="password">
              Password
            </S.FormLabel>
            <S.FormInput
              type="password"
              placeholder="Your password"
              required={true}
              minLength="8"
              {...register("password")}
            />
            <S.FormCheckboxContainer>
              <S.FormLabel htmlFor="venueManager">
                Are you a venue manager?
              </S.FormLabel>
              <S.FormCheckbox
                className="register-checkbox"
                type="checkbox"
                id="venueManager"
                {...register("venueManager")}
              />
            </S.FormCheckboxContainer>
            <PrimaryButton type="submit" className="mt-3">
              REGISTER
            </PrimaryButton>
            <NavLink
              to="/login"
              className="login-text text-decoration-none primary-color align-self-center text-center"
            >
              <div>
                <p className="mt-3 mb-0">Already registered?</p>
                <p className="fw-bold">LOG IN HERE</p>
              </div>
            </NavLink>
          </form>
        </div>
      </Col>
    </Row>
  );
}
