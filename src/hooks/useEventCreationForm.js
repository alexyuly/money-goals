import React from "react";

export default function useEventCreationForm() {
  const [amount, setAmount] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // TODO...
  }

  return {
    amount,
    category,
    description,
    handleSubmit,
    setAmount,
    setCategory,
    setDescription,
  };
}
