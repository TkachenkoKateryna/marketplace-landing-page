import React from "react";
import styled, { css } from "styled-components";
import { setShape } from "../../theme/ThemeFunctions/Shared";
import MaterialIcon from "./MaterialIcon";

const Input = (props) => {
  const inputClasses = props.hasError ? +" invalid" : "";

  return (
    <Root>
      <InputComponent className={props.className + inputClasses}>
        {props.startIcon && (
          <StartIcon
            icon={props.startIcon}
            color="white"
            className="startIcon"
          />
        )}
        <InputField
          type={props.type}
          id={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
        />
      </InputComponent>
      {props.hasError && <Error>{props.errorText}</Error>}
    </Root>
  );
};

export default Input;

const Root = styled.div`
  width: 100%;
`;
const InputComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background: transparent;
  border: white 1px solid;
  width: 100%;
  margin-bottom: 10px;
  min-height: 45px;
  padding: 10px;

  ${(props) => {
    return setShape(props.shape, props.theme);
  }}

  ${(props) => {
    if (props.hasError) {
      return css`
        border: 1px solid #b40e0e;
        background-color: #fddddd;
      `;
    }
  }}
`;

const InputField = styled.input`
  background: transparent;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StartIcon = styled(MaterialIcon)`
  margin-right: 20px;
`;

const Error = styled.p`
  color: #c88080;
`;
