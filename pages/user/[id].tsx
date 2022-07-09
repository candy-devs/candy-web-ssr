import axios from "axios";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
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

  if (user === undefined || user === null) {
    return <UserNotFound />;
  }

  return (
    <>
      <AppBar title={user.name} />
      <BottomNavigation selected={4} />
      <UserTab>
        <Profile user={user} />
        <TabView items={["게시글", "댓글", "방명록"]} onChange={onChange} />
        {pages[index]}
      </UserTab>
    </>
  );
};

function UserNotFound() {
  return (
    <CenterText>
      <div>사용자를 찾을 수 없습니다!</div>
    </CenterText>
  );
}

const UserTab = styled.div`
  padding-top: 51px;
`;

const CenterText = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export async function getServerSideProps(context: any) {
  const id = context.query.id;

  if (id === undefined || id === "") {
    return {
      props: {},
    };
  }

  const user = (await axios.get(`${apiPrefix}/api/v1/user/${id}`))
    .data as OtherUserDataType;

  return {
    props: {
      user: user,
    },
  };
}

export default User;
