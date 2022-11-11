import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
export default class App {
  constructor($app) {
    const searchEngine = new SearchEngine({
      $app,
      onSearch: () => {},
      onRandomSearch: () => {},
    });
  }
}
