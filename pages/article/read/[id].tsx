import { useRouter } from "next/router";
import React from "react";
import useArticle from "../../../api/ArticleApi";

export default function ArticleRead() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useArticle(id as string);

  return <div>{id}</div>;
}
