import Card from "./Card.js";
export default class ResultSection {
  constructor({ $app, catsList }) {
    this.catsList = catsList;

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
      const cardsBox = document.createElement("section");
      cardsBox.className = "cards-box";

      this.catsList.data.map(
        (cat) => new Card({ $target: cardsBox, data: cat })
      );
      this.main.appendChild(cardsBox);
    } else {
      const noDataAlert = document.createElement("h1");
      noDataAlert.textContent = "없어용 ㅋ";

      this.main.appendChild(noDataAlert);
    }
  }
}
