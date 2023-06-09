import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../commonStyles/loadingSpinner";
import { save } from "../../storage";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import * as S from "../commonStyles/forms";
import useSendData from "../../hooks/api/sendData";
import { useState } from "react";
import { PrimaryButton } from "../commonStyles/buttons";
import { MainHeading } from "../commonStyles/headings";
import { baseUrl } from "../../utils/constants";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const url = baseUrl + `auth/login`;
  const { sendData, isLoading, isError } = useSendData(url);
  const [errorMessage, setErrorMessage] = useState(null);

  async function onSubmit(formData) {
    const result = await sendData(formData, url, "POST");

    if (result && result.errors && result.errors.length > 0) {
      setErrorMessage(result.errors[0].message);
    } else if (result && !result.errors) {
      setErrorMessage(null);
      save("user", result);
      setTimeout(() => {
        window.location.href = `/profile/${result.name}`;
      }, 2000);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
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
        <MainHeading>Log in</MainHeading>
      </Col>
      <div className="mb-2 error-message">{errorMessage}</div>
      <Col
        className="form-card d-flex justify-content-center"
        xs={12}
        sm={8}
        md={6}
      >
        <div className="d-flex justify-content-center w-100">
          <form
            className="my-login-modal d-flex flex-column primary-color"
            onSubmit={handleSubmit(onSubmit)}
          >
            {" "}
            <S.FormLabel className=" mb-2" htmlFor="email">
              Email
            </S.FormLabel>
            <S.FormInput
              type="email"
              placeholder="Your email"
              {...register("email")}
              required={true}
              pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
              title="The email value must be a valid stud.noroff.no or noroff.no email address and belong to a registered user"
            />
            <S.FormLabel className=" mb-2" htmlFor="">
              Password
            </S.FormLabel>
            <S.FormInput
              type="password"
              placeholder="Your password"
              {...register("password")}
              required={true}
              minLength="8"
            />
            <PrimaryButton type="submit" className="mt-3">
              LOG IN
            </PrimaryButton>
            <NavLink
              to="/register"
              className="login-text primary-color align-self-center"
            >
              <div>
                <p className="mt-3 mb-0">Not registered?</p>
                <p className="fw-bold">SIGN UP NOW!</p>
              </div>
            </NavLink>
          </form>
        </div>
      </Col>
    </Row>
  );
}
