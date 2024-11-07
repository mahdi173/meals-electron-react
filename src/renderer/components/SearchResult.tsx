import { Link } from "react-router-dom";
import { Meal } from "../interfaces/Meal";
import styles from '../css/SearchResult.module.css';

interface ResultsProps {
    meals: Meal[];
}

const SearchResult: React.FC<ResultsProps> = ({ meals }) => {

    if (meals.length == 0) {
        return(
            <div className="container">
                <p className={styles.nodata}>Sorry this meal doesn't exist :(</p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                {meals.map((meal) => (
                    <div  key={meal.idMeal} className="col-4">
                        <Link to={`/meal/${meal.idMeal}`} className={styles.link}>
                            <h2>{meal.strMeal}</h2>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResult;