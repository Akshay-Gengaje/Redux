import MovieCard from "@/components/movies/MovieCard";
import MovieCardSkeleton from "@/components/movies/MovieCardSkeleton";
import useMovies from "@/hooks/useMovies";
import React from "react";

const Movies = () => {
  const { data, loading, error } = useMovies(
    "3/movie/popular",
    "GET",
    null,
    {
      language: "en-US",
      page: 1,
    },
    []
  );
  console.log(data);
  return (
    <div className="flex justify-between flex-wrap gap-5">
      {loading
        ? // Show 20 Skeleton Cards while loading
          [...Array(20)].map((_, index) => <MovieCardSkeleton key={index} />)
        : // Show Movie Cards when data is available
          data?.results?.map((movie) => (
            <MovieCard
              key={movie.id}
              image={movie?.backdrop_path}
              title={movie.original_title}
            />
          ))}
    </div>
  );
};

export default Movies;
