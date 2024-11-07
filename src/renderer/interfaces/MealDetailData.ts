import {Meal} from './Meal';

export interface MealDetailData  extends Meal  {
    strCategory: string;
    strArea: string;
    strTags: string;
    strInstructions: string;
}