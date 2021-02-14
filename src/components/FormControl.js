import React from "react";

export default function FormControl(props) {
  return (
    <label className="FormControl">
      <span className="FormControl__label-text">
        {props.labelText}
      </span>
      {props.children}
    </label>
  );
}
