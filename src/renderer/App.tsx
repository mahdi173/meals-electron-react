import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import SearchBar from './components/SearchBar';
import MealDetail from "./components/MealDetail";

function Hello() {
  return (
    <div>
      <SearchBar/>
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
