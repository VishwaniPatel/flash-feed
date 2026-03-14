// import axios from "axios";
//  "https://api.allorigins.win/raw?url=https://inshorts.com/api/en/news?category=";
// // to get all news
// export const getAllNewsData = async (category) => {
//   const newsData = `${baseUrl}${category}&max_limit=100&include_card_data=true`;
//   return await axios.get(`${newsData}`);
// };
import axios from "axios";

export const getAllNewsData = async (category) => {
  return await axios.get(`/api/news?category=${category}`);
};