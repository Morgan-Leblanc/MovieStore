import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCard from "../components/DisplayCard";
import "./MoviesAll.css";
import FilterCategoryMovie from "../components/FilterCategoryMovie";
export default function MoviesAll() {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div>
      <div>
        <FilterCategoryMovie />
      </div>
      <div className="directory">
        {movies.map((movie) => (
          <div>
            <DisplayCard key={movie.id} {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
