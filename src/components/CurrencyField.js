import React from "react";
import TextField from "./TextField";

function formatValue(value) {
  return `$ ${value.toFixed(2)}`;
}

export default function CurrencyField(props) {
  const inputRef = React.useRef(null);
  const [tempValue, setTempValue] = React.useState(formatValue(props.value));

  function handleBlur() {
    let value = String(tempValue);
    if (value.startsWith("$")) {
      value = value.slice(1);
    }
    value = Number(value) || 0;
    props.onChangeValue(value);
    setTempValue(formatValue(value));
  }

  return (
    <TextField
      inputClassName={props.inputClassName}
      labelText={props.labelText}
      onBlur={handleBlur}
      onChangeValue={setTempValue}
      ref={inputRef}
      value={tempValue}
    />
  );
}
