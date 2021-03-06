import React from "react";
import styled, { css } from "styled-components";
import styles from "./AppBar.module.scss";
import { BackIcon } from "./Icons";

const iconArrowLeft = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
  </svg>
);

type AppBarProps = {
  title: String;
  showUnderLine?: boolean;
  alignCenter?: boolean;
};

export default function AppBar({
  title,
  showUnderLine,
  alignCenter,
}: AppBarProps) {
  return (
    <>
      <div className={styles.AppBar}>
        <div className={styles.AppBarLeading}>
          <BackIcon />
        </div>

        <AppBarTitle alignCenter={alignCenter !== undefined && alignCenter}>
          {title}
        </AppBarTitle>

        <div className={styles.AppBarTailing}>&#8942;</div>
      </div>

      {showUnderLine ? <div className={styles.AppBarUnderLine}></div> : null}
    </>
  );
}

type AppBarTitleProps = {
  alignCenter: boolean;
};

const AppBarTitle = styled.div<AppBarTitleProps>`
  flex: 1;
  color: #454c52;
  font: normal normal bold 14px Noto Sans KR;
  padding: 0 0 0 ${(props) => (props.alignCenter ? "" : "")};

  ${(props) =>
    props.alignCenter &&
    css`
      text-align: center;
    `};
`;
