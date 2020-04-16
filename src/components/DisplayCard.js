import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./DisplayCard.css";

export default function DisplayCard({ ...movie }) {
  const [like, setLike] = useState(movie.likes);
  const [dislike, setDislike] = useState(movie.dislikes);
  const dispatch = useDispatch();

  const deleteMovie = (id) => {
    dispatch({ type: "DELETE_MOVIE", payload: id });
  };

  return (
    <div className="collection-item">
      <h3 className="name" style={{ fontWeight: "bold" }}>
        {movie.title}
      </h3>
      <h5 className="name" style={{ color: "grey", fontWeight: "bold" }}>
        {movie.category}
      </h5>
      <img
        className="image"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      />
      <div className="LikeDislike">
        <p>
          <button
            onClick={() => setLike(like + 1)}
            className="btn btn-success mx-1"
          >
            {" "}
            +{" "}
          </button>{" "}
          {like} Likes || {dislike} Dislikes{" "}
          <button
            onClick={() => setDislike(dislike + 1)}
            className="btn btn-danger mx-1"
          >
            {" "}
            -{" "}
          </button>
        </p>
      </div>
      <button
        onClick={() => deleteMovie(movie.id)}
        className="btn btn-dark  w-50"
      >
        X
      </button>
    </div>
  );
}
