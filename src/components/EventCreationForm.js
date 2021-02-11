export default function EventCreationForm() {
  return (
    <form className="EventCreationForm">
      <label className="EventCreationForm__label">
        <span className="EventCreationForm__label-text">
          Transfer
        </span>
        <input className="EventCreationForm__currency-input" />
      </label>
      <label className="EventCreationForm__label">
        <span className="EventCreationForm__label-text">
          From
        </span>
        <select className="EventCreationForm__account-select">
          <option>Income</option>
          <option>New Account...</option>
        </select>
      </label>
      <label className="EventCreationForm__label">
        <span className="EventCreationForm__label-text">
          Into
        </span>
        <select className="EventCreationForm__account-select">
          <option>Expense</option>
          <option>New Account...</option>
        </select>
      </label>
    </form>
  );
}
