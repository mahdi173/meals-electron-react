import { Link } from "react-router-dom";
import { Meal } from "../interfaces/Meal";

interface ResultsProps {
    meals: Meal[];
}

const SearchResult: React.FC<ResultsProps> = ({ meals }) => {
    return (
        <div className="container">
            <div className="row">
                {meals.map((meal) => (
                    <div  key={meal.idMeal} className="col-4">
                        <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: "none", color: "black" }}>
                            <h2>{meal.strMeal}</h2>
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "200px" }} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResult;