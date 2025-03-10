import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "./actionTypes";

const initialState = {
  movies: [],
  total: 0,
};

export const moviesReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART: {
      const existingMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
      );

      if (existingMovie) {
        // Increase quantity if movie exist in cart
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie.id === action.payload.id
              ? { ...movie, quantity: movie.quantity + 1 }
              : movie
          ),
          total: state.total + action.payload.popularity,
        };
      } else {
        // If movie doesn't exist, add to cart
        return {
          ...state,
          movies: [...state.movies, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.popularity,
        };
      }
    }

    case INCREASE_QUANTITY: {
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, quantity: movie.quantity + 1 }
            : movie
        ),
        total:
          state.total +
          (state.movies.find((movie) => movie.id === action.payload)
            ?.popularity || 0),
      };
    }

    case DECREASE_QUANTITY: {
      const movie = state.movies.find((movie) => movie.id === action.payload);

      if (!movie) return state; // If movie doesn't exist, return current state

      const updatedMovies = state.movies
        .map((movie) =>
          movie.id === action.payload
            ? { ...movie, quantity: movie.quantity - 1 }
            : movie
        )
        .filter((movie) => movie.quantity > 0); // Remove movies with quantity 0

      return {
        ...state,
        movies: updatedMovies,
        total: state.total - movie.popularity,
      };
    }

    default:
      return state;
  }
};
