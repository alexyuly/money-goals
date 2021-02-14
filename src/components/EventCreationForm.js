import React from "react";
import Button from "./Button";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function EventCreationForm() {
  return (
    <form className="EventCreationForm">
      <svg className="EventCreationForm__ribbon" viewBox="0 0 48 48">
        <path className="EventCreationForm__ribbon-path" d="M 24,0 L 48,0 L 0,48 L 0,24 Z" />
      </svg>
      <h2 className="EventCreationForm__header">
        Record a transaction
      </h2>
      <div className="EventCreationForm__body">
        <TextField labelText="Description"/>
        <TextField labelText="Amount" />
        <SelectField labelText="From">
          <option>Income</option>
          <option>Create an account...</option>
        </SelectField>
        <SelectField labelText="Into">
          <option>Expense</option>
          <option>Create an account...</option>
        </SelectField>
        <TextField labelText="Category" />
      </div>
      <div className="EventCreationForm__buttons">
        <Button className="EventCreationForm__submit-button" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
