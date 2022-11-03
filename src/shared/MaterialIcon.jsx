import styled from "styled-components";
import classnames from "classnames";

const MaterialIcon = (props) => {
  //   const classNames = "material-icons material-icons-outlined";
  //   {
  //     "material-icons": props.type,
  //     [material-icons-${props.type}]: !!props.type,
  // },
  //   const classNames = classnames(
  //     {
  //       "material-icons": !props.type,
  //       [`material-icons-${props.type}`]: !!props.type,
  //     },
  //     props.className
  //   );

  const classNames =
    (props.type ? `material-icons-${props.type}` : "material-icons") +
    " " +
    props.className;

  console.log("classNames", classNames);

  return (
    <span className={classNames} onClick={props.onClick}>
      {props.icon}
    </span>
  );
};

export default styled(MaterialIcon)`
  color: ${(props) => (props.color ? props.color : "")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "")};

  width: ${(props) => props.width ?? ""};
  height: ${(props) => props.height ?? ""};
`;
