import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface MovieCarProp {
  sample: Record<string, any>;
}

const MovieCard: React.FC<MovieCarProp> = ({ sample }) => {
  return (
    <div className="relative group bg-zinc-900 col-span h-[12vw]">
      <img
        className="object-cover transition delay-300 rounded-md shadow-xl cursor-pointer duration group-hover:opacity-90 sm:group-hover:opacity-0 w-full h-[12vw]"
        src={sample.thumbnailUrl}
        alt="thumbnail"
      />
      <div className="absolute top-0 z-10 invisible w-full transition delay-300 scale-0 opacity-0 duration sm:visible group-hover:scale-110 group:hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          className="object-cover w-full transition shadow-xl cursor-pointer duration rounded-t-md h-[12vw]"
          src={sample.thumbnailUrl}
          alt="thumbnail"
        />
        <div className="absolute z-10 w-full p-2 transition shadow-md bg-zinc-800 lg:p-4 rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300">
              <BsFillPlayFill size={30} />
            </div>
          </div>
          <p className="mt-4 font-semibold text-green-400">
            New <span className="ml-2 text-white">2023</span>
          </p>
          <div className="flex flex-row items-center">
            <p className="mt-2 text-white text-[10px] lg:text-sm">
              {sample.duration}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="mt-2 text-white text-[10px] lg:text-sm">
              {sample.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
