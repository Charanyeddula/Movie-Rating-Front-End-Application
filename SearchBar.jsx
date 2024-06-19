import React, { useState } from "react";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedRatings,
  setSelectedRatings,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) => {
      if (prev.includes(rating)) {
        return prev.filter((r) => r !== rating);
      }
      return [...prev, rating];
    });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) => {
      if (prev.includes(value)) {
        return prev.filter((category) => category !== value);
      }
      return [...prev, value];
    });
  };

  const renderStarRatings = () => {
    const ratings = [1, 2, 3, 4, 5];
    return (
      <div className="filter-dropdown">
        <label>
          <input
            type="checkbox"
            value="any"
            checked={selectedRatings.length === 0}
            onChange={() => setSelectedRatings([])}
          />
          Any rating
        </label>
        {ratings.map((rating) => (
          <label key={rating}>
            <input
              type="checkbox"
              value={rating}
              checked={selectedRatings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
            />
            {[...Array(rating)].map((_, index) => (
              <span key={index} className="star">
                ★
              </span>
            ))}
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter movie name"
      />
      <div className="filters">
        <div
          className="filter-select"
          onClick={() => setShowRatingDropdown(!showRatingDropdown)}
        >
          Rating
          {showRatingDropdown && renderStarRatings()}
        </div>
        <div
          className="filter-select"
          onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
        >
          Genre
          {showCategoryDropdown && (
            <div className="filter-dropdown">
              <label>
                <input
                  type="checkbox"
                  value="any"
                  checked={selectedCategories.length === 0}
                  onChange={() => setSelectedCategories([])}
                />
                Any genre
              </label>
              {["Action", "Comedy", "Thriller", "Drama"].map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
