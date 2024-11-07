import React, { useEffect, useState } from 'react';
import styles from '../css/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(''); //store the value of the search bar's text input

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='container'>
      <h1 className="d-flex justify-content-center">Meals Finder</h1>
      <div className={`${styles.container} form-inline`}>
        <input
          type="text"
          className={`${styles.textbox} form-control`}
          placeholder="Search meal..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchBar;