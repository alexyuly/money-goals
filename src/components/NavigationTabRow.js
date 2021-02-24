import React from "react";
import NavigationTab from "./NavigationTab";

export default function NavigationTabRow(props) {
  return (
    <div className={`NavigationTabRow ${props.className ?? ''}`}>
      {props.tabs.map((tab) => {
        return (
          <NavigationTab
            isSelected={tab === props.selectedTab}
            key={tab}
            label={tab}
            onClick={() => {
              props.setSelectedTab(tab);
            }}
          />
        );
      })}
    </div>
  );
}
