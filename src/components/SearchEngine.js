export default class SearchEngine {
  constructor({ $app, onSearch, onRandomSearch }) {
    this.onSearch = onSearch;
    this.onRandomSearch = onRandomSearch;
    this.header = document.createElement("header");
    this.header.className = "header";
    $app.appendChild(this.header);
    console.log("Search Engine Header Rendered!");
    this.render();
    console.log("Search Engine Section Rendered!");
  }
  render() {
    // createElement
    const displayModeSection = document.createElement("section");
    displayModeSection.className = "display-mode-section";
    displayModeSection.innerHTML = "DISPLAY MODE!";

    const searchSection = document.createElement("section");
    searchSection.className = "search-section";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.placeholder = "검색어를 입력하세요!";

    const randomButton = document.createElement("button");
    randomButton.innerHTML = "RANDOM!";

    // addEventLister
    randomButton.addEventListener("click", this.onRandomSearch);

    // appendChild
    this.header.appendChild(displayModeSection);

    searchSection.appendChild(searchInput);
    searchSection.appendChild(randomButton);
    this.header.appendChild(searchSection);
  }
}
