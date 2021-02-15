import React from "react";
import EventCreationForm from "./EventCreationForm";
import EventTimeline from "./EventTimeline";
import TitleBar from "./TitleBar";

export default function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="App__content">
        <EventCreationForm />
        <EventTimeline />
      </div>
    </div>
  );
}
