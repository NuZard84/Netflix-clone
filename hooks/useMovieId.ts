import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovieId = (id: string) => {
  const { isLoading, error, mutate, data } = useSWR(
    `/api/movie/${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    isLoading,
    error,
    mutate,
    data,
  };
};
