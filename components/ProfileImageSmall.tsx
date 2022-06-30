import React from "react";
import { useSelector } from "react-redux";
import { UserDataType } from "../api/UserApi";
import styled from "styled-components";

const ProfileImage = styled.img`
  border-radius: 5px;
`;

const ProfileNullImage = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #a2a5a9;
`;

export default function ProfileImageSmall() {
  const user: UserDataType = useSelector(({ user }: any) => user);

  if (user == null || user.picture == null || user.picture == "") {
    return <ProfileNullImage />;
  } else {
    return (
      <ProfileImage src={user.picture} alt={"profile"} width={24} height={24} />
    );
  }
}
