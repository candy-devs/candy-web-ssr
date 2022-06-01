import React, { ReactNode } from "react";
import BottomNavigation from "./nav/BottomNavigation";
import Navigation from "./nav/Navigation";

type NavigationLayoutProps = { page: number; children: ReactNode };

export default function NavigationLayout({
  page,
  children,
}: NavigationLayoutProps) {
  return (
    <>
      <Navigation selectedPage={page} />
      <BottomNavigation selected={0} />
      <div style={{ paddingTop: "90px", paddingBottom: "43px" }}>
        {children}
      </div>
    </>
  );
}
