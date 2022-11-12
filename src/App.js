import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
import ResultSection from "./components/ResultSection.js";
import Modal from "./components/Modal.js";
export default class App {
  constructor($app) {
    const data = [];
    const searchEngine = new SearchEngine({
      $app,
      onSearch: async (keyword) => {
        const response = await api.fetchCatsListByKeyword(keyword);
        if (!response.isError) {
          resultSection.setCatsList(response.data);
        } else {
          console.log(response.data);
          return;
        }
      },

      onRandomSearch: async () => {
        const response = await api.fetchRandomCatsList();
        if (!response.isError) {
          resultSection.setCatsList(response.data);
        } else {
          console.log(response.data);
          return;
        }
      },
    });

    const resultSection = new ResultSection({
      $app,
      catsList: data,
      onClick: (catId) => {
        console.log(catId);
      },
    });

    const modal = new Modal({
      $app,
    });
  }
}
