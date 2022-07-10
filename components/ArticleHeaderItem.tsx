import styles from "./ArticleHeaderItem.module.scss";
import React from "react";
import { ChatIcon, HeartIcon, ThumbUpIcon } from "./Icons";
import { ArticleHeaderModel } from "../models/ArticleHeaderModel";
import Moment from "react-moment";
import "moment-timezone";

type ArticleHeaderItemType = {
  article?: Required<ArticleHeaderModel>;
};

export default function ArticleHeaderItem({ article }: ArticleHeaderItemType) {
  return (
    <article className={styles.ArticleHeaderItem}>
      <a
        href={`/article/${article?.id}`}
        className={styles.ArticleHeaderItemLinker}
      >
        {" "}
      </a>
      <div className={styles.ArticleHeaderItemOuterUp}>
        <div className={styles.ArticleHeaderItemProfileImg} />
        <div className={styles.ArticleHeaderItemProfileName}>
          {article?.author}
        </div>
        <div className={styles.ArticleHeaderItemTag}>#설거지론</div>
      </div>
      <div className={styles.ArticleHeaderItemOuterMid}>
        <div className={styles.ArticleHeaderItemInnerLeft}>
          <div className={styles.ArticleHeaderTitle}>{article?.title}</div>
          <div className={styles.ArticleHeaderBody}>
            <div className={styles.ArticleHeaderBodyText}>
              {article?.summary}
            </div>
          </div>
        </div>
        <div className={styles.ArticleHeaderItemInnerRight}>
          <div className={styles.ArticleHeaderBodyThumb}>
            {article?.thumbnail}
          </div>
        </div>
      </div>
      <div className={styles.ArticleHeaderItemInnerBottom}>
        <p>
          {article?.board}
          <span>&#183;</span>
          <Moment locale="ko" fromNow>
            {article?.writeTime}
          </Moment>
        </p>
        <div className={styles.ArticleHeaderItemStatus}>
          <div className={styles.ArticleHeaderItemStat}>
            <div className={styles.ArticleHeaderItemStatIcon}>
              <ThumbUpIcon />
            </div>
            <p>{article?.up}</p>
            <div className={styles.ArticleHeaderItemStatIcon}>
              <ChatIcon />
            </div>
            <p>{article?.comments}</p>
            <div className={styles.ArticleHeaderItemStatIcon}>
              <HeartIcon />
            </div>
            <p>{article?.bookmark}</p>
          </div>
          <div className={styles.ArticleHeaderItemMenu}>&#8942;</div>
        </div>
      </div>
    </article>
  );
}
