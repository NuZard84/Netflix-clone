import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
interface PlayButtonProps {
  movieId: string;
}

const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {
  return <div className="flex flex-row items-center justify-center group/item">
    <div className="flex items-center justify-center w-6 h-6 transition bg-white rounded-md cursor-pointer py- px- group/item lg:w-32 lg:h-11 hover:bg-neutral-300 hover:bg-opacity-40 hover:text-white">
    <BsFillPlayFill size={30} className="mr-1" />
    <span className="">Play Now</span>
    </div>
  </div>;
};

export default PlayButton;
