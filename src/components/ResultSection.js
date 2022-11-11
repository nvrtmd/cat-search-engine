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
    this.render();
  }

  render() {
    if (!this.data) {
      console.log("no~");
    }

    const { data } = this.data;
    this.main.innerHTML = data
      .map(
        (data) =>
          `
        <div>${data.name}</div>
      `
      )
      .join("");

    // addEventLister
    // appendChild
  }
}
