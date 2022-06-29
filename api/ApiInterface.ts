import axios from "axios";
import { apiPrefix } from "../config/ApiConfig";

export type ApiReturnType<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

export const fetcher = (url: string) =>
  axios.get(`${apiPrefix}${url}`).then((res) => res.data);
