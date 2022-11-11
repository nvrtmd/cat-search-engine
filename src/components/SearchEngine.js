export default class SearchEngine {
  constructor({ $app, onSearch, onRandomSearch }) {
    this.onSearch = onSearch;
    this.onRandomSearch = onRandomSearch;
    this.header = document.createElement("header");
    this.header.className = "header";
    this.header.innerHTML = "HEADER";

    $app.appendChild(this.header);
  }
  render() {}
}
