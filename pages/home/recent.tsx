import { NextPage } from "next";
import React from "react";
import { useQuery } from "react-query";
import useBoardArticles from "../../api/BoardApi";
import useRecentArticles from "../../api/RecentApi";
import ArticleHeaderItem from "../../components/ArticleHeaderItem";
import Divide from "../../components/Divide";
import NavigationLayout from "../../components/layouts/NavigationLayout";
import SelectButton from "../../components/SelectButton";
import { ArticleModel } from "../../models/Article";
import { ArticleHeaderModel } from "../../models/ArticleHeaderModel";

type ArticlesProps = {
  articles: [ArticleModel];
};

const Recent = () => {
  const { data, isLoading, isError } = useRecentArticles(0);

  return (
    <NavigationLayout page={1}>
      <Divide />
      <div style={{ padding: "16px", width: "108px" }}>
        <SelectButton content="게시판 · 태그 선택" />
      </div>
      <div style={{ padding: "0 16px 16px 16px" }}>
        {data.map((article, index) => (
          <ArticleHeaderItem key={index} article={article} />
        ))}
      </div>
    </NavigationLayout>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:8080/api/board/articles?id=test&p=0`)
//   const data = await res.json();
//   const articles = data['articles'] as [ArticleModel];

//   // Pass data to the page via props
//   return { props: { articles } }
// }

export default Recent;
