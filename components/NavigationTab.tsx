import Link from "next/link";
import React, { useState } from "react";
import styles from "./NavigationTab.module.scss";

type NavigationTabProps = {
  items: string[];
  selectedPage?: number;
};

export default function NavigationTab({
  items,
  selectedPage,
}: NavigationTabProps) {
  const routes = [
    "/home/board",
    "/home/recent",
    "/home",
    "/home/my",
    "/home/ad",
  ];

  return (
    <nav className={styles.NavBoxTab + ' noselect'}>
      {items.map((item, index) => (
        <Link key={index} href={routes[index]}>
          <div
            className={`${styles.NavBoxTabItem} ${
              selectedPage === index
                ? styles.NavBoxTabItemSelected
                : styles.NavBoxTabItemUnSelected
            }`}
          >
            {item}
          </div>
        </Link>
      ))}
    </nav>
  );
}
