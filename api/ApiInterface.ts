import axios from "axios";
import { SWRPrefix } from "../config/ApiConfig";

export type ApiReturnType<T> = {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
};

export const fetcher = (url: string) =>
  axios.get(`${SWRPrefix}${url}`).then((res) => res.data);
