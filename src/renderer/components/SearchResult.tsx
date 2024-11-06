import { Link } from "react-router-dom";

function Result ({results}){
    return (
        <div>
            <div className="row">
                {results.map((meal) => (
                    <div  className="col-4">
                        <div key={meal.idMeal} style={{ marginBottom: "20px" }}>
                        <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: "none", color: "black" }}>
                        <h2>{meal.strMeal}</h2>
                        </Link>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "200px" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;