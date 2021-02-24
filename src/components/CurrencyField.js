import React from "react";
import TextField from "./TextField";
import useCurrencyField from "../hooks/useCurrencyField";

export default function CurrencyField(props) {
  const {
    handleBlur,
    setTempValue,
    tempValue,
  } = useCurrencyField(props);

  return (
    <TextField
      inputClassName={props.inputClassName}
      labelText={props.labelText}
      onBlur={handleBlur}
      setValue={setTempValue}
      value={tempValue}
    />
  );
}
