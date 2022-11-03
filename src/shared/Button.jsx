import React from "react";
import styled, { css } from "styled-components";
import MaterialIcon from "./MaterialIcon";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text ? (
        props.text
      ) : (
        <MaterialIcon
          icon={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      )}
    </button>
  );
};

export default styled(Button)`
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};

  ${(props) => {
    let styles = "";

    if (props.variant) {
      return {
        primary: css`
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.primary};
        `,
      }[props.variant];
    }

    return css`
      color: ${props.theme.colors.white};
      background-color: ${props.theme.colors.primary};
    `;

    switch (props.variant) {
      case "primary":
        styles = css`
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.primary};
        `;
        break;
      default:
        styles = css`
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.primary};
        `;
    }

    switch (props.size) {
      case "small":
        styles = css`
          padding: 3px 9px;
          min-width: 54px;
          min-height: 54px;
        `;
        break;
      default:
        styles = css`
          padding: 5px 15px;
          min-width: 150px;
          min-height: 60px;
        `;
    }

    switch (props.shape) {
      case "round":
        styles = css`
          border-radius: 50%;
        `;
        break;
      default:
    }

    return styles;
  }}
`;
