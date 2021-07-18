import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

const useFetchData = (urlParam) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_ENDPOINT}&${url}`);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData(urlParam);
  }, [urlParam]);

  return { isLoading, error, data };
};

export default useFetchData;
