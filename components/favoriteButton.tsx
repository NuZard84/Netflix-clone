import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorite from "@/hooks/useFavorite";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck} from "react-icons/ai";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorite();
  const { data: currentuser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const lists = currentuser?.favoriteIds || [];

    return lists.includes(movieId);
  }, [currentuser, movieId]);

  const toggleFavorite = useCallback(async () => {
    let res;
    if (isFavorite) {
      res = await axios.delete("/api/favorite", {
        data: {
          movieId,
        },
      });
    } else {
      res = await axios.post("/api/favorite", {movieId});
    }

    const updatedFavorites = res?.data?.favoriteIds || [];

    mutate({
      ...currentuser,
      updatedFavorites,
    });

    mutateFavorites();
  }, [isFavorite, movieId, currentuser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div onClick={toggleFavorite} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 rounded-full border-2 border-white transition flex items-center justify-center hover:bg-neutral-300">
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
