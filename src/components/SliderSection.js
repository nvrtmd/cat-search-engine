import { api } from "../api/api.js";
import Card from "./Card.js";

export default class SliderSection {
  constructor({ $app }) {
    this.page = 0;
    this.sliderSection = document.createElement("section");
    this.sliderSection.className = "slider-section";
    $app.appendChild(this.sliderSection);
    this.fetchData();
  }

  fetchData = async () => {
    const response = await api.fetchRandomCatsList();
    if (!response.isError) {
      this.setCatsList(response.data);
    } else {
      this.fetchData();
    }
  };

  setCatsList(data) {
    this.catsList = data;
    console.log(this.catsList);
    this.render();
  }

  render() {
    if (!this.catsList.data) {
      return;
    }

    const sliderWrapper = document.createElement("div");
    sliderWrapper.className = "slider-wrapper";

    this.catsList.data.slice(this.page, this.page + 5).map((cat) => {
      const catImage = document.createElement("img");
      catImage.className = "cat-image";
      catImage.src = cat.url;
      sliderWrapper.appendChild(catImage);
    });

    this.sliderSection.appendChild(sliderWrapper);
  }
}
