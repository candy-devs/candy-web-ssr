import axios from "axios";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import AppBar from "../../components/AppBar";
import ArticleHeaderItem from "../../components/ArticleHeaderItem";
import BottomNavigation from "../../components/layouts/nav/BottomNavigation";
import Profile from "../../components/Profile";
import TabView from "../../components/TabView";
import { apiPrefix } from "../../config/ApiConfig";
import { OtherUserDataType } from "../../models/OtherUserDataType";

const User: NextPage = ({ user }: any) => {
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
        <AppBar title={user.name} />
        <Profile />
        {user.picture}
        <TabView items={["게시글", "댓글", "방명록"]} onChange={onChange} />
        {pages[index]}
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const cookie = context?.ctx?.req?.headers?.cookie;

  if (id === undefined || id === "") {
    return {
      props: {},
    };
  }

  const user = (
    await axios.get(`${apiPrefix}/api/v1/user/${id}`, {
      headers: {
        cookie: cookie!,
      },
    })
  ).data as OtherUserDataType;

  return {
    props: {
      user: user,
    },
  };
}

export default User;
