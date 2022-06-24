import styles from "./ArticleHeaderItem.module.scss";
import React from "react";
import { ArticleAttributes } from "../models/Article";
import { ChatIcon, HeartIcon, ThumbUpIcon } from "./Icons";
import { ArticleHeaderAttributes } from "../models/ArticleHeaderModel";

type ArticleHeaderItemType = {
  article?: Required<ArticleHeaderAttributes>;
};

export default function ArticleHeaderItem({ article }: ArticleHeaderItemType) {
  return (
    <article className={styles.ArticleHeaderItem}>
      <a
        href={`/article/read?id=${article?.id}`}
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
          2시간 전
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
