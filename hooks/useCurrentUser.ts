//this is versal
import useSWR from "swr";
//this is versal devloped package that is similar react it is worked like redux and if we have already fetched data it is not fetch again same data ...and we use state managment with this , too

import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
