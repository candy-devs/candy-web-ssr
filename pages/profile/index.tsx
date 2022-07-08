import React from "react";
import { UserDataType } from "../../api/UserApi";
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

    return {
      props: {},
    };
  }
);
