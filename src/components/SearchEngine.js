export default class SearchEngine {
  constructor({ $app, onSearch, onRandomSearch }) {
    this.onSearch = onSearch;
    this.onRandomSearch = onRandomSearch;
    this.header = document.createElement("header");
    this.header.className = "search-header";
    $app.appendChild(this.header);
    this.render();
    this.autofocusOnSearchInput();
  }

  autofocusOnSearchInput() {
    const searchInput = document.querySelector(".search-input");
    searchInput.focus();
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
    randomButton.className = "random-button";
    randomButton.innerHTML = "RANDOM!";

    // addEventLister
    randomButton.addEventListener("click", this.onRandomSearch);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.onSearch(e.target.value);
      }
    });

    // appendChild
    this.header.appendChild(displayModeSection);

    searchSection.appendChild(searchInput);
    searchSection.appendChild(randomButton);
    this.header.appendChild(searchSection);
  }
}
