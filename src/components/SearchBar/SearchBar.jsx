import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Please enter a movie title.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
