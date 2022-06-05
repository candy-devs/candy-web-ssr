import styles from "./tag.module.scss";

import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { CloseIcon, SearchIcon } from "../../../components/Icons";
import IosSegmentedControl from "../../../components/IosSegmentedControl";
import { NextPage } from "next";

interface TagSelectItemType {
  name: string;
}

function TagSelectItem({ name }: TagSelectItemType) {
  return (
    <div className={styles.TagSelectItem}>
      <div className={styles.TagSelectItemBody}>
        <div className={styles.TagSelectItemName}>{name}</div>
        <div className={styles.TagSelectItemCheck}></div>
      </div>
      <div className={styles.TagSelectItemDivider} />
    </div>
  );
}

interface TagSelectGroupType {
  title: string;
}

function TagSelectGroup({ title }: TagSelectGroupType) {
  return (
    <div className={styles.TagSelectGroup}>
      <div className={styles.TagSelectTitle}>{title}</div>
      <div className={styles.TagSelectItemsArea}>
        <TagSelectItem name="정치 · 사회" />
        <TagSelectItem name="정치 · 사회" />
        <TagSelectItem name="정치 · 사회" />
      </div>
    </div>
  );
}

const SelectArticleTagPage: NextPage = () => {
  const router = useRouter()
  const [searchType, setSearchType] = useState(0);

  return (
    <div className={styles.SelectArticleTag} style={{ zIndex: 30 }}>
      <div className={styles.Body}>
        <div className={styles.TitleBar}>
          <span>게시판 · 태그 선택</span>
          <div onClick={() => router.back()}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.SearchArea}>
          <IosSegmentedControl
            name="selectArticleTag"
            callback={(val: number, index: number) => setSearchType(val)}
            controlRef={useRef()}
            defaultIndex={0}
            minWitdh={50}
            segments={[
              {
                label: "게시판",
                value: 0,
                ref: useRef(),
              },
              {
                label: "태그",
                value: 1,
                ref: useRef(),
              },
            ]}
          />
          <div className={styles.SearchBar}>
            <SearchIcon />
            <input />
          </div>
        </div>
        <div className={styles.TagSelectArea}>
          <TagSelectGroup title="엔터테인먼트 · 예술" />
          <TagSelectGroup title="생활 · 노하우 · 쇼핑" />
          <TagSelectGroup title="취미 · 여가 · 여행" />
          <TagSelectGroup title="지식 · 동향" />
        </div>
      </div>
    </div>
  );
}

export default SelectArticleTagPage;