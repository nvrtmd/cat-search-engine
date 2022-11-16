import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
import ResultSection from "./components/ResultSection.js";
import Modal from "./components/Modal.js";
import Loading from "./components/Loading.js";
export default class App {
  constructor($app) {
    const data = [];
    const searchEngine = new SearchEngine({
      $app,
      onSearch: async (keyword) => {
        loading.toggleLoading();
        const response = await api.fetchCatsListByKeyword(keyword);
        if (!response.isError) {
          resultSection.setCatsList(response.data);
        } else {
          console.log(response.data);
        }
        loading.toggleLoading();
      },

      onRandomSearch: async () => {
        loading.toggleLoading();
        const response = await api.fetchRandomCatsList();
        if (!response.isError) {
          resultSection.setCatsList(response.data);
        } else {
          console.log(response.data);
          return;
        }
        loading.toggleLoading();
      },
    });

    const resultSection = new ResultSection({
      $app,
      catsList: data,
      onClick: async (catId) => {
        loading.toggleLoading();
        const response = await api.fetchCatInfoById(catId);
        if (!response.isError) {
          modal.setCatInfo(response.data);
        } else {
          console.log(response.data);
          return;
        }
        loading.toggleLoading();
      },
    });

    const modal = new Modal({
      $app,
    });
    const loading = new Loading({
      $app,
    });
  }
}
