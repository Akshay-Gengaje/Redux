import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const MovieCard = ({ image, title }) => {
  return (
    <div className="relative mt-5 w-56  p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
      {/* Movie Poster */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${image}`}
          alt={title}
          className="rounded-2xl h-80 object-cover w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title and Add to Cart */}
      <div className="flex items-center justify-between my-3 px-2">
        {/* Movie Title */}
        <h1 className="w-[70%] font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          {title}
        </h1>

        {/* Cart Button */}
        <button className="w-10 h-10 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-800 dark:hover:bg-gray-300">
          <FaCartShopping className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
