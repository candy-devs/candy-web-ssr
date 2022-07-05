import useSWR from "swr";
import { apiPrefix } from "../config/ApiConfig";
import { ArticleHeaderModel } from "../models/ArticleHeaderModel";
import { ApiReturnType, fetcher } from "./ApiInterface";

export default function useRecentArticles(
  page: number
): ApiReturnType<[ArticleHeaderModel]> {
  const { data, error } = useSWR(`/api/v1/article/recent?p=${page}`, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data: data != null ? (data["articles"] as [ArticleHeaderModel]) : null,
    isLoading: !error && !data,
    isError: error,
  };
}

export async function getRecentArticles(page: number) {
  const postfix = `/api/v1/article/recent?p=${page}`;
  const data = await fetcher(`${apiPrefix}${postfix}`);

  return {
    [postfix]: data,
  };
}
