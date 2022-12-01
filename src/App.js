import { api } from "./api/api.js";
import SearchEngine from "./components/SearchEngine.js";
import ResultSection from "./components/ResultSection.js";
import Modal from "./components/Modal.js";
import Loading from "./components/Loading.js";
import Error from "./components/Error.js";
import { getItem, setItem } from "./utils/localStorage.js";

export default class App {
  constructor($app) {
    const data = getItem("prevData");

    const searchEngine = new SearchEngine({
      $app,
      onSearch: async (keyword) => {
        loading.toggleLoading();
        const response = await api.fetchCatsListByKeyword(keyword);

        if (!response.isError) {
          error.setState("");
          resultSection.setCatsList(response.data);
          setItem("prevData", response.data);
        } else {
          error.setState(response.data);
        }
        loading.toggleLoading();
      },
      onRandomSearch: async () => {
        loading.toggleLoading();
        const response = await api.fetchRandomCatsList();
        if (!response.isError) {
          error.setState("");
          resultSection.setCatsList(response.data);
          setItem("prevData", response.data);
        } else {
          error.setState(response.data);
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
      onScroll: async () => {
        loading.toggleLoading();
        const response = await api.fetchRandomCatsList();
        if (!response.isError) {
          const concatenatedData = {
            data: [...getItem("prevData").data, ...response.data.data],
          };
          resultSection.setCatsList(concatenatedData);
          setItem("prevData", concatenatedData);
        } else {
          error.setState(response.data);
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
    const error = new Error({});
  }
}
