import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import AppBar from "../../components/AppBar";
import ArticleHeaderItem from "../../components/ArticleHeaderItem";
import BottomNavigation from "../../components/layouts/nav/BottomNavigation";
import Profile from "../../components/Profile";
import TabView from "../../components/TabView";

const User: NextPage = () => {
  const [index, setIndex] = useState(0);

  const onChange = useCallback((index: number) => {
    setIndex(index);
  }, []);

  const pages = [
    <div key={0} style={{ padding: "16px" }}>
      <ArticleHeaderItem />
      <ArticleHeaderItem />
      <ArticleHeaderItem />
    </div>,
    <div key={1}></div>,
    <div key={2}></div>,
  ];

  return (
    <>
      <BottomNavigation selected={4} />
      <div className="user-tab">
        <AppBar />
        <Profile />
        <TabView items={["게시글", "댓글", "방명록"]} onChange={onChange} />
        {pages[index]}
      </div>
    </>
  );
};

export default User;
