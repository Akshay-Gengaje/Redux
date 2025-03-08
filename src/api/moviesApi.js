import axios from "axios";

const MOVIEDB_API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY; // Store API key in environment variables
export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/", // Replace with actual API URL
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${MOVIEDB_API_KEY}`, // Use API key securely
  },
  timeout: 10000, // Set timeout for better error handling
});
