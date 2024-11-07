import React, { useState, useEffect } from "react";
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import SearchBar from './components/SearchBar';
import MealDetail from "./components/MealDetail";
import SearchResult from "./components/SearchResult";
import { Meal } from "./interfaces/Meal";
import ApiService from './services/ApiService';

function Hello() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchMeals = async (query = 'a') => {
    try {
      const response = await ApiService.getInstance().fetchMeals(query);
      setMeals(response.data.meals || []);
    } catch (error) {
      setMeals([]); // Clear meals to avoid displaying old data
      setError("Failed to load meals. Please try again later.");
    }
  };
  
  useEffect(() => {
    fetchMeals(); // Fetch initial meals with default query
  }, []);
  
  const searchMeals = (query: string) => {
    fetchMeals(query); // Call fetchMeals with the search query
  };

  return (
    <div>
      <SearchBar onSearch={searchMeals}/>
      {error ? (
        <p className="errors">{error}</p>
      ) : (
        <SearchResult  meals={meals}/>
      )}
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
