import React from "react";

export default function Button(props) {
  return (
    <button {...props} className={`Button ${props.className ?? ''}`}>
      {props.children}
    </button>
  );
}
