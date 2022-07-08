import axios from "axios";
import React from "react";
import { UserDataType } from "../../api/UserApi";
import { apiPrefix } from "../../config/ApiConfig";
import { wrapper } from "../../store";

export default function ProfilePage() {
  return <div>ProfilePage</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx: any) => {
    const user: UserDataType = store.getState()["user"];

    if (user.name === null || user.name === "") {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
        props: {},
      };
    }

    const specific = (await axios.get(`${apiPrefix}/api/v1/user/specific`))
      .data;

    return {
      redirect: {
        permanent: false,
        destination: `/user/${specific}`,
      },
      props: {},
    };
  }
);
