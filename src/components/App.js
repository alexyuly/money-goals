import React from "react";
import EventTimeline from "./EventTimeline";
import Navigation from "./Navigation";

export default function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Navigation />
        <EventTimeline />
      </div>
    </div>
  );
}
