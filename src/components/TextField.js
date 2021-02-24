import React from "react";
import FormControl from "./FormControl";

export default function TextField(props) {
  function handleChange(event) {
    props.setValue(event.target.value);
  }

  function handleFocus(event) {
    event.target.select();
  }

  return (
    <FormControl labelText={props.labelText}>
      <input
        className={`TextField__input ${props.inputClassName ?? ''}`}
        onBlur={props.onBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        type="text"
        value={props.value}
      />
    </FormControl>
  );
};
