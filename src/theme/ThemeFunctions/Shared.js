import { css } from "styled-components";

export const setShape = (type) => {
  let styles = "";

  switch (type) {
    case "round":
      styles = css`
        border-radius: 50%;
      `;
      break;
    default:
      styles = css`
        border-radius: 4px;
      `;
  }
  return styles;
};

export const setVariant = (type, theme) => {
  let styles = "";

  switch (type) {
    case "primary":
      styles = css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      `;
      break;
    case "primary-light":
      styles = css`
        color: ${theme.colors.primary};
        background-color: ${theme.colors.primaryLight};
      `;
      break;
    case "secondary-light":
      styles = css`
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.secondaryLight};
      `;
      break;
    case "white":
      styles = css`
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
      `;
      break;
    case "text":
      styles = css`
        color: ${theme.colors.white};
        background-color: transparent;
      `;
      break;

    default:
      styles = css`
        color: ${theme.fontClr.default};
        background-color: ${theme.colors.white};
      `;
      break;
  }

  return styles;
};
