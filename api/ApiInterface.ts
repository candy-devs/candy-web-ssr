import axios from "axios";

export type ApiReturnType<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

export const fetcher = (url: string) =>
  axios.get(url).then((res) => {
    console.log(res);
    return res.data;
  });
