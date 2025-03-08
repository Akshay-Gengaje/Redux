import { useState, useEffect } from "react";
import { movieApi } from "../api/moviesApi"; // Import Axios instance

const useMovies = (
  url,
  method = "GET",
  body = null,
  params = {},
  dependencies = []
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await movieApi({
          method,
          url,
          data: body,
          params, // Attach query parameters here
        });

        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useMovies;
