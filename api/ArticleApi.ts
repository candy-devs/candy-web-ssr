import useSWR from "swr";
import { apiPrefix } from "../config/ApiConfig";
import { ArticleModel } from "../models/Article";
import { ApiReturnType, fetcher } from "./ApiInterface";

export default function useArticle(id: string): ApiReturnType<ArticleModel> {
  const { data, error } = useSWR(`/api/v1/article?id=${id}`, fetcher, {
    // revalidateOnFocus: false,
    // revalidateOnMount: false,
  });

  return {
    data: data as ArticleModel,
    isLoading: !error && !data,
    isError: error,
  };
}

export async function getArticle(id: string) {
  const postfix = `/api/v1/article?id=${id}`;
  const data = await fetcher(`${apiPrefix}${postfix}`);

  return {
    [postfix]: data,
  };
}
