import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useFavorite = () => {
  const { isLoading, error, data, mutate } = useSWR(
    "/api/getFavorite",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );


  return { isLoading, error, data, mutate };
};

export default useFavorite;
