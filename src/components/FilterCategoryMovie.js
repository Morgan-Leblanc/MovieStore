import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import dataMovies from "../data/dataMovies";

export default function FilterNumberMovie() {
  const [movies, setMovies] = useState(dataMovies.movies);
  const dispatch = useDispatch();

  const filterCategory = () => {
    dispatch({ type: "SET_MOVIES", payload: movies });
    let selectBox = document.getElementById("category");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    dispatch({ type: "FILTER_MOVIE_CATEGORY", payload: selectedValue });
  };

  const resetStateAndDispatch = (number) => {
    dispatch({ type: "SET_MOVIES", payload: movies });
    dispatch({ type: "MOVIE_LENGTH", payload: number });
    return number
  };

  return (
    <div>
      <select className="form-control" id="category" onChange={filterCategory}>
        <option>--Please choose a category--</option>
        <option value="Comedy">Comedy</option>
        <option value="Animation">Animation</option>
        <option value="Thriller">Thriller</option>
        <option value="Drame">Drame</option>
      </select>
      <button onClick={() => resetStateAndDispatch(4)} className="btn btn-dark">
        4 films par page
      </button>
      <button onClick={() => resetStateAndDispatch(8)} className="btn btn-dark">
        {" "}
        8 films par page
      </button>
      <button
        onClick={() => resetStateAndDispatch(12)}
        className="btn btn-dark"
      >
        {" "}
        12 films par page
      </button>
    </div>
  );
}
