import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovieId = (id? : string) => {
  const { isLoading, error, mutate, data } = useSWR( id ? 
    `/api/movie/${id}` : null,
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

export default useMovieId