import useSWR from "swr";
import { ArticleModel } from "../models/Article";
import { ApiReturnType, fetcher } from "./ApiInterface";

export type ArticleDataType = {
  name: string;
  email: string;
  picture: string;
};

export default function useArticle(id: number): ApiReturnType<ArticleModel> {
  const { data, error } = useSWR(`/api/article/read/${id}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  return {
    data: ArticleModel.factory(data),
    isLoading: !error && !data,
    isError: error,
  };
}
