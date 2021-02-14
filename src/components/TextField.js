import React from "react";
import FormControl from "./FormControl";

export default function TextField(props) {
  return (
    <FormControl labelText={props.labelText}>
      <input className="TextField__input" />
    </FormControl>
  );
}
