import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "./actionTypes";

const initialState = {
  movies: {}, // Object with movie.id as keys
  totalCost: 0, // Total cost of cart
  totalItems: 0, // Total number of items including quantities
  distinctItems: 0, // Total number of distinct movies
};

export const moviesReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ADD_TO_CART: {
      const { id, popularity } = action.payload;
      const existingMovie = state.movies[id];

      const updatedMovies = {
        ...state.movies,
        [id]: existingMovie
          ? { ...existingMovie, quantity: existingMovie.quantity + 1 }
          : { ...action.payload, quantity: 1 },
      };

      return {
        ...state,
        movies: updatedMovies,
        totalCost: state.totalCost + popularity,
        totalItems: state.totalItems + 1,
        distinctItems: Object.keys(updatedMovies).length, // Count unique movies
      };
    }

    case INCREASE_QUANTITY: {
      const movie = state.movies[action.payload];

      if (!movie) return state;

      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload]: { ...movie, quantity: movie.quantity + 1 },
        },
        totalCost: state.totalCost + movie.popularity,
        totalItems: state.totalItems + 1, // Increase total item count
      };
    }

    case DECREASE_QUANTITY: {
      const movie = state.movies[action.payload];

      if (!movie) return state;

      const updatedMovies = { ...state.movies };
      if (movie.quantity === 1) {
        delete updatedMovies[action.payload];
      } else {
        updatedMovies[action.payload] = { ...movie, quantity: movie.quantity - 1 };
      }

      return {
        ...state,
        movies: updatedMovies,
        totalCost: state.totalCost - movie.popularity,
        totalItems: state.totalItems - 1, // Decrease total item count
        distinctItems: Object.keys(updatedMovies).length, // Recalculate distinct items
      };
    }

    case REMOVE_ITEM: {
      const movie = state.movies[action.payload];
      if (!movie) return state;

      const updatedMovies = { ...state.movies };
      delete updatedMovies[action.payload];

      return {
        ...state,
        movies: updatedMovies,
        totalCost: state.totalCost - movie.popularity * movie.quantity, // Reduce total based on quantity
        totalItems: state.totalItems - movie.quantity, // Remove all instances of that movie
        distinctItems: Object.keys(updatedMovies).length, // Update distinct count
      };
    }

    default:
      return state;
  }
};
