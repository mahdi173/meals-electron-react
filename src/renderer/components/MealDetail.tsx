import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import { MealDetailData } from "../interfaces/MealDetailData"; // Import the interface here
import { FaHome } from "react-icons/fa";

function MealDetail() {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<MealDetailData | null>(null);
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const { data } = await axios.get(`${config.API_DETAIL_URL}?i=${id}`);
        setMeal(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMeal();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="m-5">
        <FaHome 
          onClick={goBackHome} 
          style={{ fontSize: "24px", cursor: "pointer" }} 
          title="Back to Home" 
        />
        <div className="card m-5" style={{'width': '500px'}}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{meal.strMeal}</h5>
            <p className="card-text"> {meal.strInstructions}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Category:</strong> {meal.strCategory}</li>
            <li className="list-group-item"><strong>Origin:</strong> {meal.strArea}</li>
            <li className="list-group-item"><strong>Tags:</strong> {meal.strTags}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
