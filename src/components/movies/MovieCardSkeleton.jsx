import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="relative mt-5 w-56 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg">
      {/* Movie Poster Skeleton */}
      <Skeleton className="w-full h-80 rounded-2xl" />

      {/* Title and Add to Cart Skeleton */}
      <div className="flex items-center justify-between my-3 px-2">
        {/* Title Skeleton */}
        <Skeleton className="w-3/4 h-6 rounded-md" />

        {/* Cart Button Skeleton */}
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
