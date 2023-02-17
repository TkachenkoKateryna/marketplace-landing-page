import { css } from "styled-components";

export const setBtnSize = (type) => {
  let styles = "";

  switch (type) {
    case "x-small":
      styles = css`
        padding: 1px 3px;
        min-width: 40px;
        min-height: 40px;
      `;
      break;
    case "small":
      styles = css`
        padding: 3px 9px;
        min-width: 54px;
        min-height: 54px;
      `;
      break;
    case "large":
      styles = css`
        padding: 5px 15px;
        min-width: 300px;
        min-height: 45px;
      `;
      break;
    default:
      styles = css`
        padding: 5px 15px;
        min-width: 150px;
        min-height: 60px;
      `;
      break;
  }
  return styles;
};
