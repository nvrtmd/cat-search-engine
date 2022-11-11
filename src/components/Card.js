export default class Card {
  constructor({ $target, data }) {
    this.data = data;
    this.card = document.createElement("article");
    this.card.className = "cat-card";
    this.card.dataset.catId = data.id;

    $target.appendChild(this.card);

    this.render();
  }

  render() {
    console.log(this.data);
    const { url, name } = this.data;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = url;

    const cardInfo = document.createElement("article");
    cardInfo.className = "card-info";

    const catName = document.createElement("p");
    catName.className = "cat-name";
    catName.innerText = name;

    cardInfo.appendChild(catName);
    this.card.appendChild(cardImage);
    this.card.appendChild(cardInfo);
  }
}
