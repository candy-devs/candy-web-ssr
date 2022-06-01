import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { HomeIcon, SearchIcon, PencilIcon, HeartBreakIcon } from "../../Icons";
import styles from "./BottomNavigation.module.scss";

type BottomNavigationProps = {
  selected: number;
  onChange?: (index: number) => void;
};

export default function BottomNavigationLayout({
  selected,
  onChange,
}: BottomNavigationProps) {
  const icons = [
    <HomeIcon key={0} />,
    <SearchIcon key={1} />,
    <PencilIcon key={2} />,
    <HeartBreakIcon key={3} />,
    <HomeIcon key={4} />,
  ];

  const route = ["/", "/search", "/write", "/bookmark", "/profile"];

  return (
    <nav className={styles.BottomNavBox}>
      <div className={styles.BottomNavBoxDivider} />
      <div className={styles.BottomNavBoxIcons}>
        {icons.map((icon, index) => (
          <Link key={index} href={`${route[index]}`}>
            <a
              className={`${styles.BottomNavBoxIcon} ${
                index === selected ? styles.Selected : ""
              }`}
            >
              {icon}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

// BottomNavigationLayout.getLayout = function  getLayout() {
//   return (
//     <BottomNavigationLayout selected={0}/>
//   )
// }
