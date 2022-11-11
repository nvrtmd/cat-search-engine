export default class SearchEngine {
  constructor($app, onSearch, onRandomSearch) {
    this.onSearch = onSearch;
    this.onRandomSearch = onRandomSearch;

    this.section = document.createElement("section");
    this.section.classList = "search-engine-section";

    $app.appendChild(this.section);
  }
  render() {}
}
