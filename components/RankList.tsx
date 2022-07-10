import React, {
  LegacyRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useState } from "react";
import styled from "styled-components";
import styles from "./RankList.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type RankListItemProps = {
  rank: string;
  name: string;
  variance: number;
};

function RankListItem({ rank, name, variance }: RankListItemProps) {
  return (
    <div>
      <div className={styles.RankListItem}>
        <div className={styles.RankListLeading}>
          {rank}
          <div className={styles.RankListLeadingName}>{name}</div>
        </div>
        <div className={styles.RankListVariance}>
          {Math.abs(variance)}
          {variance === 0 ? null : (
            <div
              className={`${styles.RankListVarianceTriangle} ${
                variance > 0
                  ? styles.RankListVarianceTriangleUp
                  : styles.RankListVarianceTriangleDown
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function RankListPage() {
  // const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  // ref.current.style.setProperty("--rank-list-page-width", `100px`);

  return (
    // <div>
    <div className={styles.RankListPage} style={{ padding: "0" }}>
      <RankListItem rank="1" name="정치 사회" variance={20} />
      <RankListItem rank="2" name="코인" variance={30} />
      <RankListItem rank="3" name="주식" variance={6} />
      <RankListItem rank="4" name="여행" variance={-12} />
      <RankListItem rank="5" name="축구" variance={-12} />
      {/* <RankListItem rank="6" name="비지니스 경제" variance={-12} /> */}
    </div>
  );
}

export default function RankList() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer className={styles.RankListPage}>
      <Slider {...settings}>
        <RankListPage />
        <RankListPage />
        <RankListPage />
        <RankListPage />
      </Slider>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  .slick-dots li {
    margin: 0px;
    button:before {
      transition-duration: 300ms;
    }
  }
  padding: 0;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  height: 150px;
`;

// export default function RankList() {
//   const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
//   const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
//   const [width, setWidth] = useState(0);
//   const [pageIndex, setPageIndex] = useState(0);

//   var onScrollTimer = -1;
//   var onMouse = false;
//   var onScrolling = false;
//   var onScrollLeft = 0;

//   useEffect(() => {
//     if (ref.current.getBoundingClientRect().width !== 0) {
//       const { style } = ref.current;
//       setWidth(ref.current.getBoundingClientRect().width);
//       style.setProperty(
//         "--rank-list-page-width",
//         `${ref.current.getBoundingClientRect().width}px`
//       );
//       if (scrollRef.current != null)
//         scrollRef.current.scrollLeft = Math.round(onScrollLeft / width) * width;
//       setPageIndex(Math.round(onScrollLeft / width));
//     }
//   }, [ref, scrollRef, onScrollLeft, width]);

//   const resize = () => {
//     const { style, clientWidth } = ref.current;
//     if (clientWidth !== 0) {
//       setWidth(clientWidth);
//       style.setProperty("--rank-list-page-width", `${clientWidth}px`);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", resize);
//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, [ref]);

//   const onScroll = function (event: SyntheticEvent<HTMLDivElement>) {
//     onScrolling = true;
//     if (onScrollTimer !== -1) clearTimeout(onScrollTimer);
//     onScrollTimer = window.setTimeout(onScrollEnd, 100);
//     onScrollLeft = event.currentTarget.scrollLeft;
//   };

//   const onScrollEnd = () => {
//     if (onMouse === false && onScrolling) {
//       onScrolling = false;
//       scrollRef.current.scrollLeft = Math.round(onScrollLeft / width) * width;
//       setPageIndex(Math.round(onScrollLeft / width));
//     }
//   };

//   const onMouseDown = () => {
//     onMouse = true;
//     if (onScrollTimer !== -1) clearTimeout(onScrollTimer);
//   };

//   const onMouseUp = () => {
//     onMouse = false;
//     if (onScrollTimer !== -1) clearTimeout(onScrollTimer);
//     onScrollTimer = window.setTimeout(onScrollEnd, 100);
//   };

//   return (
//     <div ref={ref} className={styles.RankListWrapper}>
//       <div
//         ref={scrollRef}
//         className={styles.RankList}
//         onScroll={onScroll}
//         onMouseDown={onMouseDown}
//         onMouseUp={onMouseUp}
//       >
//         <RankListPage />
//         <RankListPage />
//         <RankListPage />
//         <RankListPage />
//       </div>
//       <div className={styles.RankListDots}>
//         {[...Array(4).keys()].map((_, index) => (
//           <div
//             key={index}
//             className={`${styles.RankListDot} ${
//               index === pageIndex ? styles.Selected : styles.UnSelected
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
