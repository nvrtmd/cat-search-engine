import Card from "./Card.js";
export default class ResultSection {
  constructor({ $app, catsList, onClick }) {
    this.catsList = catsList;
    this.onClick = onClick;

    this.main = document.createElement("main");
    this.main.className = "main";

    $app.appendChild(this.main);
  }

  setCatsList(data) {
    this.catsList = data;
    this.render();
  }

  render() {
    if (!this.catsList.data) {
      return;
    }

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
      const noDataAlert = document.createElement("h1");
      noDataAlert.textContent = "없어용 ㅋ";

      this.main.appendChild(noDataAlert);
    }
  }
}
