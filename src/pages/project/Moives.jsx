import React, { useMemo, useCallback } from "react";
import MovieCard from "@/components/movies/MovieCard";
import MovieCardSkeleton from "@/components/movies/MovieCardSkeleton";
import useMovies from "@/hooks/useMovies";

const Movies = () => {
  const { data, loading, error } = useMovies("3/movie/popular", "GET", null, {
    language: "en-US",
    page: 1,
  });

  // Memoize movie list processing
  const movies = useMemo(() => data?.results || [], [data]);
  // Memoize skeleton placeholders
  const skeletons = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => (
        <MovieCardSkeleton key={index} />
      )),
    []
  );

  // Memoized function to render movie cards
  const renderMovieCard = useCallback(
    (movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        image={movie.backdrop_path || movie.poster_path} // Fallback to poster_path
        title={movie.original_title}
        price={movie.popularity}
      />
    ),
    []
  );

  if (error) {
    return (
      <p className="text-red-500 text-center w-full">
        Failed to load movies. Please try again.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-5">
      {loading ? skeletons : movies.map(renderMovieCard)}
    </div>
  );
};

export default Movies;
