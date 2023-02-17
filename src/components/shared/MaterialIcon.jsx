import styled, { css } from "styled-components";

const MaterialIcon = (props) => {
  const classNames =
    (props.type ? `material-icons-${props.type}` : "material-icons") +
    " " +
    props.className;

  return (
    <span className={classNames} onClick={props.onClick}>
      {props.icon}
    </span>
  );
};

export default styled(MaterialIcon)`
  color: ${(props) => (props.color ? props.color : "")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};

  ${({ styles }) =>
    styles
      ? css`
          ${styles}
        `
      : ""}
`;
