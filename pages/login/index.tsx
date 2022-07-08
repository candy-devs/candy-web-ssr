import axios from "axios";
import { GetServerSideProps } from "next";
import { Context } from "next-redux-wrapper";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, SSRProvider } from "react-bootstrap";
import { useSelector } from "react-redux";
import { wrapper } from "../../store";
import * as userActions from "../../store/modules/user";
import { UserDataType } from "../../store/modules/user";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "../../components/AppBar";
import styles from "./index.module.scss";
import styled, { css } from "styled-components";
import SelectButton from "../../components/SelectButton";
import { Router, useRouter } from "next/router";
import { getSortedRoutes } from "next/dist/shared/lib/router/utils";

export default function LoginPage({ referer }: any) {
  const router = useRouter();
  const user: UserDataType = useSelector(({ user }: any) => user);
  const [isFail, setIsFail] = useState(false);
  const [redirect, setRedirect] = useState(referer);

  useEffect(() => {
    if (user.name != "") {
      router.back();
    }

    if (router.query["result"] !== undefined) {
      setIsFail(true);
      setRedirect(router.query["redirect"]);
    }
  }, [redirect, router, setIsFail, user.name]);

  return (
    <SSRProvider>
      <AppBar title={"로그인"} showUnderLine={true} />
      <div className={styles.LoginLogoBox}>
        <div className={styles.LoginLogo}>CANDY</div>
        <LoginForm action="/api/v1/auth/login" method="post">
          <input type="hidden" id="redirect" value={redirect} />
          <LoginTextBox
            type="text"
            id="id"
            name="id"
            required
            placeholder="이메일 또는 휴대전화"
          />
          <LoginTextBox
            type="password"
            id="password"
            name="pw"
            required
            isPassword
            placeholder="비밀번호"
          />
          {isFail ? <FailBox>아이디 또는 비밀번호가 다릅니다!</FailBox> : null}
          <LoginButton type="submit" value={"로그인"} />
        </LoginForm>
        <SplitBarLine>{"소셜 로그인"}</SplitBarLine>
        <SocialButtons />
      </div>
    </SSRProvider>
  );
}

const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

type LoginTextBoxProps = {
  isPassword?: boolean;
};

const LoginTextBox = styled.input<LoginTextBoxProps>`
  border: none;
  outline: none;
  width: 320px;
  height: 38px;
  border-radius: 5px;
  padding: 10px 8px 10px 10px;
  background-color: #f1f1f1;
  margin-top: ${(props) => (props.isPassword ? `12px` : `30px`)};

  ${(props) =>
    props.isPassword &&
    css`
      margin-top: 12px;
    `}/* ${media.desktop} {
    background: dodgerblue;
  }
  ${media.tablet} {
    background: mediumseagreen;
  }
  ${media.phone} {
    background: palevioletred;
  } */
`;

const LoginButton = styled.input`
  border: none;
  outline: none;
  background: none;

  width: 320px;
  height: 38px;
  /* margin: 25px 20px 30px; */
  margin-top: 25px;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #5673eb;

  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ededed;

  :hover {
    background-color: #b0bdf3;
  }
`;

const FailBox = styled.p`
  width: 320px;
  padding-top: 8px;
  font-size: 14px;
  color: red;
`;

const LoginForm = styled.form`
  width: 320px;
`;

const SplitBarLineDetail = css`
  content: "";
  flex-grow: 1;
  background: #f1f1f1;
  height: 1px;
  font-size: 0;
  line-height: 0;
`;

const SplitBarLine = styled.div`
  display: flex;
  width: 320px;
  flex-basis: 100%;
  align-items: center;
  color: #454c52;
  margin: 30px 0 20px 0;
  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: 500;

  &:before {
    ${SplitBarLineDetail}
    margin-right: 8px;
  }

  &:after {
    ${SplitBarLineDetail}
    margin-left: 8px;
  }
`;

const SocialDiv = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-around;
`;

type CircleProps = {
  bcolor?: string;
  bimage?: string;
};

const Circle = styled.a<CircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  ${(props) =>
    props.bcolor !== "" &&
    css`
      background-color: ${props.bcolor};
    `};
  ${(props) =>
    props.bimage !== "" &&
    css`
      background-image: ${props.bimage};
    `};
`;

const naverOAuth2 = "/oauth2/authorization/naver";
const kakaoOAuth2 = "/oauth2/authorization/kakao";
const facebookOAuth2 = "/oauth2/authorization/facebook";
const googleOAuth2 = "/oauth2/authorization/google";

function SocialButtons() {
  return (
    <SocialDiv>
      <Circle bcolor="#3b5998" />
      <Circle bimage="radial-gradient(circle at 22% 123%, #ffd879 9%, #fccb75 14%, #f4aa6c 24%, #e8745d 36%, #e45f58 41%, #d22a9c 62%, #6968df 91%)" />
      <Circle bcolor="#2cb1f4" />
      <Circle bcolor="#db4639" href={googleOAuth2} />
      <Circle bcolor="#f9db00" />
      <Circle bcolor="#03c75a" />
    </SocialDiv>
  );
}

export async function getServerSideProps(context: any) {
  if (context.query["result"] !== undefined) {
    if (parseInt(context.query["result"] as string) === 0) {
      return {
        redirect: {
          permanent: false,
          destination:
            context.query["redirect"] !== undefined &&
            context.query["redirect"] != ""
              ? context.query["redirect"]
              : "/",
        },
        props: {},
      };
    }
  }

  return {
    props: {
      referer:
        context.req.headers.referer !== undefined
          ? context.req.headers.referer
          : "",
    },
  };
}
