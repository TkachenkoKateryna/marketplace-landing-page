import React from "react";
import styled from "styled-components";
import { setVariant } from "../../theme/ThemeFunctions/Shared";

const Tag = (props) => {
  return <p className={props.className}>{props.text}</p>;
};

export default styled(Tag)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes["x-small"]};
  border-radius: 5px;
  height: 40px;
  padding: 0 10px;
  width: fit-content;
  font-weight: bold;

  ${(props) => {
    return setVariant(props.type, props.theme);
  }}
`;
