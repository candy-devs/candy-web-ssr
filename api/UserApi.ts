import useSWR from "swr";
import { ApiReturnType, fetcher } from "./ApiInterface";

export type UserDataType = {
  name: string;
  email: string;
  picture: string;
};

export default function useUser(): ApiReturnType<UserDataType> {
  const { data, error } = useSWR(`/api/v1/user/info`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
