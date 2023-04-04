import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./movieCard";

interface MovieListProps {
  data: Record<string,any>[];
  title: string;
}

const MovieLists: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 mt-4 space-y-8 md:px-12">
      <div className="font-semibold text-white text-md md:text-xl lg:text-2xl">
        {title}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {data.map((movie) => {
          return (
            <MovieCard key={movie.id} sample={movie} />
          );
        })}
      </div>
    </div>
  );
};

export default MovieLists;
