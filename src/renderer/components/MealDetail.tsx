import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MealDetailData } from "../interfaces/MealDetailData";
import { FaHome } from "react-icons/fa";
import styles from '../css/MealDetail.module.css';
import ApiService from '../services/ApiService';

function MealDetail() {
  const {id} = useParams<{ id: string }>();
  const [meal, setMeal] = useState<MealDetailData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await ApiService.getInstance().fetchMealDetails(id);
        setMeal(response.data.meals? response.data.meals[0] : null);
      } catch (error) {
        setMeal(null); // Clear meals to avoid displaying old data
        setError("Failed to load the details of this meal. Please try again later.");
      }
    };

    fetchMeal();
  }, [id]);

  if (error) {
    return (
      <div className="container">
        <FaHome 
          onClick={goBackHome} 
          className={styles.home} 
          title="Back to Home" 
        />
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      </div>
    );
  }

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="m-5">
        <FaHome 
          onClick={goBackHome} 
          className={styles.home} 
          title="Back to Home" 
        />
        <div className="card m-5" style={{'width': '500px'}}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{meal.strMeal}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h6>Instructions:</h6>
                  {meal.strInstructions.split('. ').map((step, index) => (
                    <p key={index} className={styles.instructions}>
                      {step.trim() + (step.endsWith('.') ? '' : '.')}
                    </p>
                  ))}
                </li>
                <li className="list-group-item"><strong>Category:</strong> {meal.strCategory}</li>
                <li className="list-group-item"><strong>Origin:</strong> {meal.strArea}</li>
                {meal.strTags && (
                  <li className="list-group-item">
                    <strong>Tags:</strong> {meal.strTags}
                  </li>
                )}
              </ul>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
