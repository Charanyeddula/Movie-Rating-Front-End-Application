import React from "react";

const MovieItem = ({ movie }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    // Ensure the total number of stars is not negative
    if (emptyStars < 0) emptyStars = 0;

    return (
      <div className="stars">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <span key={index} className="star">
              ★
            </span>
          ))}
        {halfStar && <span className="star">☆</span>}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <span key={index} className="star-empty">
              ★
            </span>
          ))}
      </div>
    );
  };

  console.log("Rendering movie:", movie.title);

  return (
    <div className="movie-item">
      <div>
        <h3>{movie.title}</h3>
        {renderStars(movie.rating)}
      </div>
      <p>{movie.category}</p>
    </div>
  );
};

export default MovieItem;
