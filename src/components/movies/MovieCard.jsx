import { addToCart } from "@/store/movies/actions";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie, image, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative mt-5 w-56 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${image}`}
        alt={title}
        className="rounded-2xl h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
      />

      {/* Title, Price, and Add to Cart */}
      <div className="flex flex-col mt-3 px-2 space-y-2">
        {/* Movie Title */}
        <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text truncate">
          {title}
        </h1>

        <div className="flex justify-between">
          {/* Price */}
          <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
            ${price.toFixed(2)}
          </p>

          {/* Cart Button */}
          <button
            className="w-10 h-10 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black rounded-full
           transition-transform duration-300 hover:scale-110 hover:bg-gray-800 dark:hover:bg-gray-300"
            onClick={() => dispatch(addToCart(movie))}
          >
            <FaCartShopping className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
