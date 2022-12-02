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

  setPage(direction) {
    this.sliderSection.innerHTML = "";
    console.log(this.catsList.data.length);
    switch (direction) {
      case "left":
        if (this.page == 0) {
          this.page = this.catsList.data.length - 5;
          break;
        }
        this.page -= 5;
        break;
      case "right":
        if (this.page == this.catsList.data.length - 5) {
          this.page = 0;
          break;
        }
        this.page += 5;
        break;
      default:
        return;
    }
    this.render();
  }

  render() {
    if (!this.catsList.data) {
      return;
    }

    const sliderWrapper = document.createElement("div");
    sliderWrapper.className = "slider-wrapper";

    const leftButton = document.createElement("div");
    leftButton.className = "left-button";
    leftButton.innerHTML = "👈🏻";
    sliderWrapper.appendChild(leftButton);

    this.catsList.data.slice(this.page, this.page + 5).map((cat) => {
      const catImage = document.createElement("img");
      catImage.className = "cat-image";
      catImage.src = cat.url;
      sliderWrapper.appendChild(catImage);
    });

    const rightButton = document.createElement("div");
    rightButton.className = "right-button";
    rightButton.innerHTML = "👉🏻";
    sliderWrapper.appendChild(rightButton);

    leftButton.addEventListener("click", () => {
      this.setPage("left");
    });

    rightButton.addEventListener("click", () => {
      this.setPage("right");
    });

    this.sliderSection.appendChild(sliderWrapper);
  }
}
