
interface Config {
    API_SEARCH_URL: string;
    API_DETAIL_URL: string;
}

const config: Config = {
    API_SEARCH_URL: "https://www.themealdb.com/api/json/v1/1/search.php",
    API_DETAIL_URL: "https:/www.themealdb.com/api/json/v1/1/lookup.php",
};

export default config;
  