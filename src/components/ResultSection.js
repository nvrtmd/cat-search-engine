import Card from "./Card.js";
export default class ResultSection {
  constructor({ $app, catsList, onClick }) {
    this.catsList = catsList;
    this.onClick = onClick;

    this.main = document.createElement("main");
    this.main.className = "main";
    $app.appendChild(this.main);

    if (this.catsList.data.length > 0) {
      this.render();
    }
  }

  setCatsList(data) {
    this.catsList = data;
    this.render();
  }

  render() {
    if (!this.catsList.data) {
      return;
    }

    this.main.innerHTML = "";
    if (this.catsList.data.length > 0) {
      const cardsWrapper = document.createElement("section");
      cardsWrapper.className = "cards-wrapper";

      this.catsList.data.map(
        (cat) => new Card({ $target: cardsWrapper, data: cat })
      );

      cardsWrapper.addEventListener("click", (e) => {
        const path = e.path;
        const catCard = path.find(
          (element) => element.className === "cat-card"
        );
        if (catCard) {
          const catId = catCard.dataset.catId;
          this.onClick(catId);
        }
      });

      this.main.appendChild(cardsWrapper);
    } else {
      const noDataWrapper = document.createElement("div");
      const header = document.querySelector(".search-header");

      noDataWrapper.className = "no-data-wrapper";
      noDataWrapper.style.setProperty(
        "height",
        `calc(100vh - ${getComputedStyle(header).height} - 2rem)`
      );

      const noDataImage = document.createElement("img");
      noDataImage.className = "no-data-image";
      noDataImage.src = "src/assets/cat.png";

      const noDataText = document.createElement("div");
      noDataText.className = "no-data-text";
      noDataText.innerHTML = "Sorry, There's no cat you search 😿";
      noDataWrapper.appendChild(noDataImage);
      noDataWrapper.appendChild(noDataText);

      this.main.appendChild(noDataWrapper);
    }
  }
}
