export default class Error {
  constructor({ isError }) {
    this.isError = isError;
    const $app = document.querySelector(".app");
    const header = document.querySelector(".search-header");

    this.errorWrapper = document.createElement("div");
    this.errorWrapper.className = "error-wrapper";
    this.errorWrapper.style.setProperty(
      "height",
      `calc(100vh - ${getComputedStyle(header).height} - 2rem)`
    );
    this.errorWrapper.style.setProperty("display", `none`);

    $app.appendChild(this.errorWrapper);

    this.render();
  }

  render() {
    if (!this.isError) return;
    this.errorWrapper.style.setProperty("display", `flex`);

    const errorImage = document.createElement("img");
    errorImage.className = "error-image";
    errorImage.src = "src/assets/error.png";

    const errorText = document.createElement("div");
    errorText.className = "error-text";
    errorText.innerHTML = "Sorry, Please retry😢";

    this.errorWrapper.appendChild(errorImage);
    this.errorWrapper.appendChild(errorText);
  }
}
