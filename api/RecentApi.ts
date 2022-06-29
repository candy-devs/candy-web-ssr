import useSWR from "swr";
import { ArticleHeaderModel } from "../models/ArticleHeaderModel";
import { ApiReturnType, fetcher } from "./ApiInterface";

export default function useRecentArticles(
  page: number
): ApiReturnType<[ArticleHeaderModel]> {
  const { data, error } = useSWR(`/api/v1/article/recent?p=${page}`, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data: data["articles"] as [ArticleHeaderModel],
    isLoading: !error && !data,
    isError: error,
  };
}

export async function getRecentArticles(page: number) {
  const url = `/api/v1/article/recent?p=${page}`;
  const data = await fetcher(url);

  return {
    [url]: data,
  };
}
