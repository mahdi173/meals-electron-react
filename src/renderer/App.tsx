import React, { useState, useEffect } from "react";
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import SearchBar from './components/SearchBar';
import MealDetail from "./components/MealDetail";
import SearchResult from "./components/SearchResult";
import config from "./config";
import { Meal } from "./interfaces/Meal";

function Hello() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [defaultMeals, setDefaultMeals] = useState<Meal[]>([]);

  // Fetch default meals only once when the component mounts
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`${config.API_SEARCH_URL}?s=a`);
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, []); // Empty dependency array ensures it runs only once
 
  const searchMeals = async (query: string) => {
    try {
      const response = await fetch(`${config.API_SEARCH_URL}?s=${query}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchMeals}/>
      <SearchResult  meals={meals}/>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </Router>
  );
}
