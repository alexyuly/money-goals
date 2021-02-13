import React from "react";

export default function EventCreationForm() {
  return (
    <form className="EventCreationForm">
      <svg className="EventCreationForm__ribbon" width={50} height={50} viewBox="0 0 50 50">
        <path className="EventCreationForm__ribbon-path" d="M 25,0 L 50,0 L 0,50 L 0,25 Z" />
      </svg>
      <label className="EventCreationForm__label">
        <span className="EventCreationForm__label-text">Transfer</span>
        <input className="EventCreationForm__currency-input" />
      </label>
      <label className="EventCreationForm__label">
        <span className="EventCreationForm__label-text">From</span>
        <select className="EventCreationForm__account-select">
          <option>Income</option>
          <option>New Account...</option>
        </select>
      </label>
      <label className="EventCreationForm__label">
        <span className="EventCreationForm__label-text">Into</span>
        <select className="EventCreationForm__account-select">
          <option>Expense</option>
          <option>New Account...</option>
        </select>
      </label>
    </form>
  );
}
