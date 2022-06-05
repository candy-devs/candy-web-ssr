import React, { useCallback, useState } from "react";
import styles from "./NavigationTab.module.scss";

type TabViewProps = {
  items: string[];
  onChange: (index: number) => void;
  initialPage?: number;
};

export default function TabView({
  items,
  initialPage,
  onChange,
}: TabViewProps) {
  const [selected, setSelected] = useState(initialPage ?? 0);

  const onClick = function (index: number) {
    setSelected(index);
    onChange(index);
  };

  return (
    <nav className={styles.NavBoxTab + " noselect"}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.NavBoxTabItem} ${
            selected === index
              ? styles.NavBoxTabItemSelected
              : styles.NavBoxTabItemUnSelected
          }`}
          onClick={() => onClick(index)}
        >
          {item}
        </div>
      ))}
    </nav>
    // <nav className="nav-box-tab">
    //   {items.map((item, index) => (
    //     <div key={index}
    //     className={`nav-box-tab-item ${
    //         selected === index ? "nav-box-tab-selected" : "nav-box-tab-unselected"
    //       }`}
    //       onClick={() => onClick(index)}
    //     >
    //       {item}
    //     </div>
    //   ))}
    // </nav>
  );
}
