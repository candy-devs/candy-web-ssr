import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import ArticleHeaderItem from "../../components/ArticleHeaderItem";
import DivideSlim from "../../components/DivideSlim";
import HorizontalScroll from "../../components/HorizontalScroll";
import { DownIcon } from "../../components/Icons";
import IosSegmentedControl from "../../components/IosSegmentedControl";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import SelectButton from "../../components/SelectButton";
import styles from "./my.module.scss";

const My: NextPage = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [type, setType] = useState(0);
  const [panelDown, setPanelDown] = useState(false);

  useEffect(() => {
    const { style } = ref.current;
    // TODO: https://stackoverflow.com/a/31030214/3355656
    // style.setProperty("--my-setting-panel-down-height", `${ref.current.getBoundingClientRect().height}px`);
    style.setProperty(
      "--my-setting-panel-height",
      `${panelDown ? 150 : 100}px`
    );
    style.setProperty(
      "--my-setting-panel-down-rotate",
      panelDown ? "0.5turn" : "0"
    );
  }, [ref, panelDown]);

  const panelDownClick = function () {
    setPanelDown(!panelDown);
  };

  return (
    <NavigationLayout page={3}>
      <div ref={ref} className={styles.MySettingPanel}>
        <div className={styles.MySettingPanelUp}>
          <IosSegmentedControl
            name="hotPageRank"
            callback={(val: number, index: number) => setType(val)}
            controlRef={useRef()}
            defaultIndex={0}
            segments={[
              {
                label: "구독 글쓴이",
                value: 0,
                ref: useRef(),
              },
              {
                label: "즐찾 게시판",
                value: 1,
                ref: useRef(),
              },
            ]}
          />
          <div
            className={styles.MySettingPanelDown}
            onClick={panelDownClick}
            style={{ padding: "0 0 0 16px" }}
          >
            <DownIcon />
          </div>
        </div>
        <div className="asdf"></div>
        <div style={{ height: "40px" }}>
          <HorizontalScroll>
            {["박근혜", "드라큘라", "정치 · 사회", ...Array(8).keys()].map(
              (content, index) => (
                <div
                  key={index}
                  style={{ minWidth: "72px", padding: "0 4px 0 0" }}
                >
                  <SelectButton
                    content={
                      typeof content === "string" ? content : index.toString()
                    }
                  />
                </div>
              )
            )}
          </HorizontalScroll>
        </div>
      </div>
      <DivideSlim/>
      <div style={{ padding: "16px" }}>
        <ArticleHeaderItem />
        <ArticleHeaderItem />
        <ArticleHeaderItem />
      </div>
    </NavigationLayout>
  );
};

export default My;
