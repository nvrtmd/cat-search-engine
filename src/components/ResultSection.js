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
      const cardBox = document.createElement("div");
      cardBox.className = "card-Box";
      this.catsList.data.map(
        (cat) => new Card({ $target: cardBox, data: cat })
      );

      this.main.appendChild(cardBox);
    } else {
      const noDataAlert = document.createElement("h1");
      noDataAlert.textContent = "없어용 ㅋ";

      this.main.appendChild(noDataAlert);
    }
  }
}
