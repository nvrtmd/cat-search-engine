import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
export default class App {
  constructor($app) {
    const searchEngine = new SearchEngine({
      $app,
      onSearch: () => {},
      onRandomSearch: async () => {
        const response = await api.fetchRandomCatsList();
        console.log(response);
        if (!response.isError) {
          return response;
        } else {
          console.log(response.data);
          return;
        }
      },
    });
  }
}
