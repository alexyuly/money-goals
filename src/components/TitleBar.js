import React from "react";
import Button from "./Button";
import Person from "../images/person-24px.svg";

export default function TitleBar() {
  return (
    <nav className="TitleBar">
      <div className="TitleBar__content">
        <h1 className="TitleBar__nameplate">money goals</h1>
        <Button className="TitleBar__user-button">
          <img src={Person} />
          <span className="TitleBar__user-name">Alex</span>
        </Button>
      </div>
    </nav>
  );
}
