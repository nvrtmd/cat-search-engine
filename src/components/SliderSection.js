import { api } from "../api/api.js";
import Card from "./Card.js";

export default class SliderSection {
  constructor({ $app }) {
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
  }
}
