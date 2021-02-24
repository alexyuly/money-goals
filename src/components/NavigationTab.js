import React from "react";

export default function NavigationTab(props) {
  return (
    <div
      className={`NavigationTab ${props.isSelected ? 'NavigationTab--selected' : ''}`}
      onClick={props.onClick}
    >
      <div className={`NavigationTab__label ${props.isSelected ? 'NavigationTab__label--selected' : ''}`}>
        {props.label}
      </div>
    </div>
  );
}
