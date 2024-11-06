import { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './SearchResult';
import styles from '../css/SearchBar.module.css';
import config from "../config";
import { MealSummary } from "../interfaces/MealSummary";

const SearchBar = () => {
  const [value, setValue] = useState(''); //store the value of the search bar's text input
  const [results, setResults] = useState<MealSummary | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${config.API_SEARCH_URL}?s=${value}`
        );
        setResults(data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [value]);


  return (
    <div className='container'>
      <div className={`${styles.container} form-inline`}>
        <input
          type="text"
          className={`${styles.textbox} form-control`}
          placeholder="Search meal..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <Result results={results} />
    </div>
  );
};

export default SearchBar;