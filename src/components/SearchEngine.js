export default class SearchEngine {
  constructor({ $app, previousKeywords, onSearch, onRandomSearch }) {
    this.previousKeywords = previousKeywords;
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

  onClickDisplayModeToggleButton(e) {
    const button = e.target;
    button.classList.toggle("activated");
    this.changeDisplayMode(e);
  }

  changeDisplayMode(e) {
    const body = document.querySelector("body");
    const displayModeToggleButton = document.querySelector(
      ".display-mode-toggle-button"
    );

    if (e.target) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // dark-mode일 떄 light-mode로
        body.classList.toggle("light-mode");
        displayModeToggleButton.classList.toggle("light-mode");
      } else {
        // light-mode일 떄 dark-mode로
        body.classList.toggle("dark-mode");
        displayModeToggleButton.classList.toggle("dark-mode");
      }
    }
  }

  render() {
    // createElement
    const displayModeToggleBack = document.createElement("div");
    displayModeToggleBack.className = "display-mode-toggle-back";
    const displayModeToggleButton = document.createElement("div");
    displayModeToggleButton.className = "display-mode-toggle-button";

    const searchSection = document.createElement("section");
    searchSection.className = "search-section";

    const searchInput = document.createElement("input");
    searchInput.className = "search-input";
    searchInput.placeholder = "Type a keyword and hit the Enter";

    const randomButton = document.createElement("button");
    randomButton.className = "random-button";
    randomButton.innerHTML = "RANDOM!";

    // this.previousKeywords.map((keyword) => {
    //   console.log(keyword);
    // });

    // addEventLister
    displayModeToggleButton.addEventListener("click", (e) => {
      this.onClickDisplayModeToggleButton(e);
    });
    randomButton.addEventListener("click", this.onRandomSearch);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.onSearch(e.target.value);
      }
    });
    searchInput.addEventListener("click", (e) => {
      if (e.target.value.length > 0) {
        e.target.value = "";
      }
    });

    // appendChild
    displayModeToggleBack.appendChild(displayModeToggleButton);
    this.header.appendChild(displayModeToggleBack);

    searchSection.appendChild(searchInput);
    searchSection.appendChild(randomButton);
    this.header.appendChild(searchSection);
  }
}
