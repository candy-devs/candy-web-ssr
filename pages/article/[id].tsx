import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";
import useArticle, { getArticle } from "../../api/ArticleApi";

export default function ArticleRead({ fallback, id }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <ArticleBody id={id} />
    </SWRConfig>
  );
}

function ArticleBody({ id }: any) {
  const { data, isLoading } = useArticle(id as string);

  return <div>{JSON.stringify(data)}</div>;
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const fallback = await getArticle(id);

  return {
    props: {
      fallback,
      id,
    },
  };
}
