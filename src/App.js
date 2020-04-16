import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import dataMovies from "./data/dataMovies";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesAll from "./screens/MoviesAll";

function App() {
  const [movies, setMovies] = useState(dataMovies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_MOVIES", payload: movies });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MoviesAll}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
