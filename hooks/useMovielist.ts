import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovielist =  () => {
  const { data, error, isLoading } = useSWR("/api/movie", fetcher, {
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    revalidateOnFocus: false,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useMovielist;
