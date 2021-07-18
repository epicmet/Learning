import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "./context";
import useFetchData from "./useFetchData";
import { useParams, Link } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetchData(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
};

export default Movie;
