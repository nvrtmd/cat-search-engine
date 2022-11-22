import { getItem, setItem } from "../utils/localStorage.js";

export default class SearchEngine {
  constructor({ $app, onSearch, onRandomSearch }) {
    this.previousKeywords = getItem("keywords");
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

  saveKeywords(keyword) {
    if (this.previousKeywords.includes(keyword)) return;
    if (this.previousKeywords.length === 5) {
      this.previousKeywords.pop();
    }
    this.previousKeywords.unshift(keyword);
    setItem("keywords", this.previousKeywords);
    this.render();
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
    this.header.innerHTML = "";
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

    const previousKeywordsWrapper = document.createElement("section");
    previousKeywordsWrapper.className = "previous-keywords-wrapper";
    this.previousKeywords &&
      this.previousKeywords.map((keyword) => {
        const previousKeywordBox = document.createElement("div");
        previousKeywordBox.className = "previous-keyword-box";
        previousKeywordBox.innerHTML = keyword;
        previousKeywordsWrapper.appendChild(previousKeywordBox);
      });

    // addEventLister
    displayModeToggleButton.addEventListener("click", (e) => {
      this.onClickDisplayModeToggleButton(e);
    });
    randomButton.addEventListener("click", this.onRandomSearch);
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.onSearch(e.target.value);
        this.saveKeywords(e.target.value);
      }
    });
    searchInput.addEventListener("click", (e) => {
      if (e.target.value.length > 0) {
        e.target.value = "";
      }
    });
    previousKeywordsWrapper.addEventListener("click", (e) => {
      const path = e.path;
      const previousKeywordBox = path.find(
        (element) => element.className === "previous-keyword-box"
      );
      if (previousKeywordBox) {
        this.onSearch(previousKeywordBox.innerHTML);
      }
    });

    // appendChild
    displayModeToggleBack.appendChild(displayModeToggleButton);
    this.header.appendChild(displayModeToggleBack);

    searchSection.appendChild(searchInput);
    searchSection.appendChild(randomButton);
    this.header.appendChild(searchSection);
    this.header.appendChild(previousKeywordsWrapper);
  }
}
