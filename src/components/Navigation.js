import React from "react";
import Button from "./Button";
import NavigationTabRow from "./NavigationTabRow";
import Person from "../images/person-24px.svg";

const tabs = ["Timeline", "Planning"];

export default function Navigation() {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);

  return (
    <>
      <div className="Navigation">
        <div className="Navigation__left-group">
          <h1 className="Navigation__nameplate">
            money goals
          </h1>
          <NavigationTabRow
            className="Navigation__desktop-tab-row"
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={tabs}
          />
        </div>
        <Button className="Navigation__user-button">
          <img src={Person} />
        </Button>
      </div>
      <NavigationTabRow
        className="Navigation__mobile-tab-row"
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={tabs}
      />
    </>
  );
}
