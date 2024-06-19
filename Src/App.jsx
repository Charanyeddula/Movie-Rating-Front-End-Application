import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const moviesData = [
  { title: 'The Matrix', rating: 7.5, category: 'Action' },
  { title: 'Focus', rating: 6.9, category: 'Comedy' },
  { title: 'The Lazarus Effect', rating: 6.4, category: 'Thriller' },
  { title: 'Everly', rating: 5.0, category: 'Action' },
  { title: 'Maps to the Stars', rating: 7.5, category: 'Drama' },
];

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    console.log('Initial movies:', moviesData);
    console.log('Initial searchQuery:', searchQuery);
    console.log('Initial selectedRatings:', selectedRatings);
    console.log('Initial selectedCategories:', selectedCategories);
  }, []);

  const filterMovies = () => {
    console.log('Filtering movies...');
    return moviesData.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(Math.round(movie.rating));
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(movie.category);
      console.log(`Movie: ${movie.title}, Matches Search: ${matchesSearch}, Matches Rating: ${matchesRating}, Matches Category: ${matchesCategory}`);
      return matchesSearch && matchesRating && matchesCategory;
    });
  };
  

  useEffect(() => {
    const filteredMovies = filterMovies();
    console.log('Filtered movies:', filteredMovies);
    setMovies(filteredMovies);
  }, [searchQuery, selectedRatings, selectedCategories]);

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRatings={selectedRatings}
        setSelectedRatings={setSelectedRatings}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
