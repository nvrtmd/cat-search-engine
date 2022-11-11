export default class ResultSection {
  constructor({ $app, data }) {
    this.data = data;

    this.main = document.createElement("main");
    this.main.className = "main";
    this.main.innerHTML = "main";

    $app.appendChild(this.main);
  }

  setState(data) {
    this.data = data;
    console.log(data);
  }

  render() {
    // createElement
    // addEventLister
    // appendChild
  }
}
