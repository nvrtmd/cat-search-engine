import { api } from "../api/api.js";

export default class SliderSection {
  constructor({ $app }) {
    this.pages = [0, 5];
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
    this.render();
  }

  setPage(direction) {
    this.sliderSection.innerHTML = "";
    console.log(this.pages);
    switch (direction) {
      case "left":
        if (this.pages[0] - 5 < 0) {
          this.pages = [
            this.catsList.data.length - 5,
            this.catsList.data.length,
          ];
          break;
        }
        this.pages = this.pages.map((page) => page - 5);
        break;
      case "right":
        if (this.pages[1] === this.catsList.data.length) {
          this.pages = [0, 5];
          break;
        }
        if (this.pages[1] + 5 > this.catsList.data.length) {
          this.pages = [
            this.catsList.data.length - 5,
            this.catsList.data.length,
          ];
          break;
        }
        this.pages = this.pages.map((page) => page + 5);
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

    this.catsList.data.slice(this.pages[0], this.pages[1]).map((cat) => {
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
