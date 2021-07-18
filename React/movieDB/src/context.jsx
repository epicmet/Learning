import React, { useState, useContext, useEffect } from "react";
import useFetchData from "./useFetchData";

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetchData(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
