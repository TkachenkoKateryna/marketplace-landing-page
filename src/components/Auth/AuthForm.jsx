import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import AuthContext from "../../store/auth-context";
import Button from "../shared/Button";
import {
  emailErrorMessage,
  passwordErrorMessage,
} from "../shared/constants/ErrorMessages";
import Input from "../shared/Input";
import useInput from './../../hooks/use-input/use-input';

const AuthForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueOnBlurHandler: emailBlurHandler,
    resetValueHandler: resetEmail,
  } = useInput((value) => value.includes("@") && value?.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueOnBlurHandler: passwordBlurHandler,
    resetValueHandler: resetPassword,
  } = useInput((value) => value.length > 5 && value?.trim() !== "");

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }

    setIsLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGe6Uobc67LRmY76Hl4dqhqvfH9qCJKbo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGe6Uobc67LRmY76Hl4dqhqvfH9qCJKbo";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          response.json().then((data) => {
            let errorMessage = "Authentication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        console.log("expirationTime", expirationTime);
        authCtx.login(data.idToken, expirationTime.toDateString());
        history.replace("/");
        console.log("success :>> ");
      })
      .catch((err) => {
        alert(err.message);
      });

    resetPassword("");
    resetEmail("");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Input
          type="email"
          label="Your Email"
          hasError={emailInputHasError}
          errorText={emailErrorMessage}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          startIcon="person"
          placeholder="EMAIL"
        />
        <Input
          type="password"
          label="Your Password"
          hasError={passwordInputHasError}
          errorText={passwordErrorMessage}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          startIcon="lock"
          placeholder="PASSWORD"
        />
        <Actions>
          {!isLoading && (
            <Button
              text={!isLogin ? "Submit" : "Login"}
              size="large"
              variant="white"
              isUp
              isShadow
            />
          )}
          {isLoading && <p>Loading...</p>}

          <Button
            variant="text"
            onClick={switchAuthModeHandler}
            text={
              isLogin ? "Create new account" : "Login with existing account"
            }
          ></Button>
        </Actions>
      </Form>
    </>
  );
};

export default AuthForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
