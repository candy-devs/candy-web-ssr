import React from "react";
import styled from "styled-components";
import { OtherUserDataType } from "../models/OtherUserDataType";
import styles from "./Profile.module.scss";
import SelectButton from "./SelectButton";

type ProfileProps = {
  user: OtherUserDataType;
};

export default function Profile({ user }: ProfileProps) {
  return (
    <div className={styles.Profile}>
      <ProfileImage src={user.picture} alt="profile" />
      <div className={styles.ProfileStatus}>
        <div className={styles.ProfileStatusUnit}>
          3천
          <div className={styles.ProfileStatusFigure}>게시물</div>
        </div>
        <div className={styles.ProfileStatusUnit}>
          2만
          <div className={styles.ProfileStatusFigure}>구독자</div>
        </div>
        <div className={styles.ProfileStatusUnit}>
          4만
          <div className={styles.ProfileStatusFigure}>설탕 </div>
        </div>
      </div>
      <div className={styles.ProfileDescription}>
        자기 소개_동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
        만세 무궁화삼천리 화려강산 자기 소개_동해물과 백두산이 마르고 닳도록
        하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람
      </div>

      <div className={styles.ProfileFunctions}>
        <div className={styles.ProfileFunctionButton}>
          <SelectButton content="구독 중" />
        </div>
        <div className={styles.ProfileFunctionDivider} />
        <div className={styles.ProfileFunctionButton}>
          <SelectButton content="채팅" />
        </div>
        <div className={styles.ProfileFunctionDivider} />
        <div className={styles.ProfileFunctionButton}>
          <SelectButton content="선물하기" />
        </div>
      </div>
    </div>
  );
}

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin: 16px 29px;
  border-radius: 6px;
`;
