import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
interface PlayButtonProps {
  movieId: string;
}

const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {

  const router = useRouter();

  return <div className="flex flex-row items-center justify-center group/item">
    <div onClick={() => router.push(`/watch/${movieId}`)} className="flex flex-row items-center px-2 text-sm transition bg-white rounded-md cursor-pointer lg:py-1 py-1w-auto sm bg-opacity-90 md:py-2 md:px-4 lg:text-lg hover:bg-neutral-300">
    <BsFillPlayFill size={20} className="mr-1" />
    <span className="sm:text-s">Play</span>
    </div>
  </div>;
};

export default PlayButton;
