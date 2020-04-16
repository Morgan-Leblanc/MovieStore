const INITIAL_STATE = {
  movies: [],
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case "FILTER_MOVIE_CATEGORY":
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.category == action.payload
        ),
      };
    case "MOVIE_LENGTH":
      return {
        ...state,
        movies : state.movies.filter((movie) => movie.id <= action.payload)
      };
    default:
      return state;
  }
};
export default movieReducer;
