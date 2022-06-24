import useSWR from "swr";
import { ArticleModel } from "../models/Article";
import { ApiReturnType, fetcher } from "./ApiInterface";

export default function useArticle(
  boardKey: string,
  page: number
): ApiReturnType<[ArticleModel]> {
  const { data, error } = useSWR(
    `/api/board/articles?id=${boardKey}&p=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
    }
  );

  return {
    data: data["articles"] as [ArticleModel],
    isLoading: !error && !data,
    isError: error,
  };
}
