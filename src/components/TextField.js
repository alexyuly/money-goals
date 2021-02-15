import React from "react";
import FormControl from "./FormControl";

export default function TextField(props) {
  function handleChange(event) {
    props.onChangeValue(event.target.value);
  }

  return (
    <FormControl labelText={props.labelText}>
      <input
        className={`TextField__input ${props.inputClassName ?? ''}`}
        onBlur={props.onBlur}
        onChange={handleChange}
        value={props.value}
      />
    </FormControl>
  );
};
