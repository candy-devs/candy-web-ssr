import styles from "./ArticleHeaderItem.module.scss";
import React from "react";
import { ArticleAttributes } from "../models/Article";
import { ChatIcon, HeartIcon, ThumbUpIcon } from "./Icons";

type ArticleHeaderItemType = {
  article?: Required<ArticleAttributes>;
};

export default function ArticleHeaderItem({ article }: ArticleHeaderItemType) {
  return (
    <article className={styles.ArticleHeaderItem}>
      <a
        href="https://gall.dcinside.com/"
        className={styles.ArticleHeaderItemLinker}
      >
        {" "}
      </a>
      <div className={styles.ArticleHeaderItemOuterUp}>
        <div className={styles.ArticleHeaderItemProfileImg} />
        <div className={styles.ArticleHeaderItemProfileName}>박근혜</div>
        <div className={styles.ArticleHeaderItemTag}>#설거지론</div>
      </div>
      <div className={styles.ArticleHeaderItemOuterMid}>
        <div className={styles.ArticleHeaderItemInnerLeft}>
          <div className={styles.ArticleHeaderTitle}>
            배팅자리만 알면 뭐하나
          </div>
          <div className={styles.ArticleHeaderBody}>
            <div className={styles.ArticleHeaderBodyText}>
              역방향인데... 이번 3월말 트레이딩 자리잡을곳을 알고도 방향 잡기
              정말 어렵네요. 그나마 오전에 시그널 떠줘서 고배포지션 익절해놔서
              다행입
            </div>
          </div>
        </div>
        <div className={styles.ArticleHeaderItemInnerRight}>
          <div className={styles.ArticleHeaderBodyThumb}></div>
        </div>
      </div>
      <div className={styles.ArticleHeaderItemInnerBottom}>
        <p>
          정치사회
          <span>&#183;</span>
          2시간 전
        </p>
        <div className={styles.ArticleHeaderItemStatus}>
          <div className={styles.ArticleHeaderItemStat}>
            <div className={styles.ArticleHeaderItemStatIcon}>
              <ThumbUpIcon />
            </div>
            <p>13K</p>
            <div className={styles.ArticleHeaderItemStatIcon}>
              <ChatIcon />
            </div>
            <p>498</p>
            <div className={styles.ArticleHeaderItemStatIcon}>
              <HeartIcon />
            </div>
            <p>128</p>
          </div>
          <div className={styles.ArticleHeaderItemMenu}>&#8942;</div>
        </div>
      </div>
    </article>
  );
}
