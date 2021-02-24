import React from "react";
import Button from "./Button";
import CurrencyField from "./CurrencyField";
import SelectField from "./SelectField";
import TextField from "./TextField";
import useEventCreationForm from "../hooks/useEventCreationForm";

export default function EventCreationForm() {
  const {
    amount,
    category,
    description,
    handleSubmit,
    setAmount,
    setCategory,
    setDescription,
  } = useEventCreationForm();

  return (
    <form
      className="EventCreationForm"
      onSubmit={handleSubmit}
    >
      <div className="EventCreationForm__section">
        <TextField
          inputClassName="EventCreationForm__description-input"
          labelText="Description"
          setValue={setDescription}
          value={description}
        />
        <TextField
          inputClassName="EventCreationForm__category-input"
          labelText="Category"
          setValue={setCategory}
          value={category}
        />
        <CurrencyField
          inputClassName="EventCreationForm__amount-input"
          labelText="Amount"
          onChangeValue={setAmount}
          value={amount}
        />
        <SelectField labelText="From">
          <option>Income</option>
          <option>Create an account...</option>
        </SelectField>
        <SelectField labelText="Into">
          <option>Expense</option>
          <option>Create an account...</option>
        </SelectField>
      </div>
      {/* <div className="EventCreationForm__buttons">
        <Button
          className="EventCreationForm__submit-button"
          type="submit"
        >
          Save
        </Button>
      </div> */}
    </form>
  );
}
