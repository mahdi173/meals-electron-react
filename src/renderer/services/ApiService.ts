import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from "../config";

class ApiService {
  private static instance: ApiService;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: 'https://www.themealdb.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public async fetchMeals(query: string){
    return this.api.get(`/${config.API_SEARCH_URL}?s=${query}`);
  }

  public async fetchMealDetails(id: number){
    return this.api.get(`/${config.API_DETAIL_URL}?i=${id}`);
  }
}

export default ApiService;