import React from "react";
import Button from "./Button";
import MaterialIcon from "./MaterialIcon";

const IconButton = (props) => {
  return (
    <Button variant={props.variant}>
      <MaterialIcon icon={props.icon} color={props.color} />
    </Button>
  );
};

export default IconButton;
