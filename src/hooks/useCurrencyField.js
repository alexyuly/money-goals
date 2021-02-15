import React from "react";

function formatValue(value) {
  return `$ ${value.toFixed(2)}`;
}

export default function useCurrencyField(props) {
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

  return {
    handleBlur,
    setTempValue,
    tempValue,
  };
}
