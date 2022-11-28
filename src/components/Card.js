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
    const { url, name } = this.data;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.classList.add("lazy-loaded");
    cardImage.dataset.src = url;

    const cardInfo = document.createElement("article");
    cardInfo.className = "card-info";

    const catName = document.createElement("p");
    catName.className = "cat-name";
    catName.classList.add("hidden");
    catName.innerText = name;

    this.card.addEventListener("mouseenter", () => {
      catName.classList.remove("hidden");
    });
    this.card.addEventListener("mouseleave", () => {
      catName.classList.add("hidden");
    });

    cardInfo.appendChild(catName);
    this.card.appendChild(cardImage);
    this.card.appendChild(cardInfo);
  }
}
