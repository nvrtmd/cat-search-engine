import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
export default class App {
  constructor($app) {
    const searchEngine = new SearchEngine({
      $app,
      onSearch: async (keyword) => {
        const response = await api.fetchCatsListByKeyword(keyword);
        console.log(response);
        if (!response.isError) {
          return response.data;
        } else {
          console.log(response.data);
          return;
        }
      },

      onRandomSearch: async () => {
        const response = await api.fetchRandomCatsList();
        console.log(response.data);
        if (!response.isError) {
          return response.data;
        } else {
          console.log(response.data);
          return;
        }
      },
    });
  }
}
