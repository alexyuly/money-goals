import React from "react";
import FormControl from "./FormControl";

export default React.forwardRef(function TextField(props, ref) {
  function handleChange(event) {
    props.onChangeValue(event.target.value);
  }

  return (
    <FormControl labelText={props.labelText}>
      <input
        className={`TextField__input ${props.inputClassName ?? ''}`}
        onBlur={props.onBlur}
        onChange={handleChange}
        ref={ref}
        value={props.value}
      />
    </FormControl>
  );
});
