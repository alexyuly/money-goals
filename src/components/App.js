import React from "react";
import EventCreationForm from "./EventCreationForm";
import TitleBar from "./TitleBar";

export default function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="App__content">
        <EventCreationForm />
      </div>
    </div>
  );
}
