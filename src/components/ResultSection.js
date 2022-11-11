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
    const { data } = this.data;

    if (!data) {
      return;
    }
    if (data.length > 0) {
      this.main.innerHTML = data
        .map(
          (data) =>
            `
          <div>${data.name}</div>
        `
        )
        .join("");
    } else {
      const noDataAlert = document.createElement("h1");
      noDataAlert.textContent = "없어용 ㅋ";

      this.main.appendChild(noDataAlert);
    }
  }
}
