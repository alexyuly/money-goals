import React from "react";
import Person from "../images/person-24px.svg";

export default function TitleBar() {
  return (
    <nav className="TitleBar">
      <div className="TitleBar__content">
        <h1 className="TitleBar__nameplate">money goals</h1>
        <button className="TitleBar__user-button">
          <img src={Person} />
          <span className="TitleBar__user-name">Alex</span>
        </button>
      </div>
    </nav>
  );
}
