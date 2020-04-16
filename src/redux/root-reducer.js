import { combineReducers } from "redux";
import movieReducer from "./movies/movies.reducer";


export default combineReducers({
  movies: movieReducer,
});
