import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get(url).then((res) => {
    console.log(res);
    return res.data;
  });

export type UserDataType = {
  name: string;
  email: string;
  picture: string;
};

export type ApiReturnType<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

export default function useUser(): ApiReturnType<UserDataType> {
  const { data, error } = useSWR(`/api/user/mysinfo`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  console.log(data);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
