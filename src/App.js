import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
import ResultSection from "./components/ResultSection.js";
import Modal from "./components/Modal.js";
import Loading from "./components/Loading.js";
import Error from "./components/Error.js";
export default class App {
  constructor($app) {
    const data = [];
    let isError = false;
    const searchEngine = new SearchEngine({
      $app,
      onSearch: async (keyword) => {
        loading.toggleLoading();
        const response = await api.fetchCatsListByKeyword(keyword);
        isError = response.isError;
        if (!response.isError) {
          resultSection.setCatsList(response.data);
        } else {
          loading.toggleLoading();
          console.log(response.data);
          return;
        }
        loading.toggleLoading();
      },

      onRandomSearch: async () => {
        loading.toggleLoading();
        const response = await api.fetchRandomCatsList();
        isError = response.isError;
        if (!response.isError) {
          resultSection.setCatsList(response.data);
        } else {
          loading.toggleLoading();
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
    const error = new Error({
      isError,
    });
  }
}
