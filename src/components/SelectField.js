import React from "react";
import FormControl from "./FormControl";

export default function SelectField(props) {
  return (
    <FormControl labelText={props.labelText}>
      <select className="SelectField__select">
        {props.children}
      </select>
    </FormControl>
  );
}
