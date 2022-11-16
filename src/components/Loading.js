export default class Loading {
  constructor({ $app }) {
    this.loaderWrapper = document.createElement("div");
    this.loaderWrapper.className = "loader-wrapper";
    this.loaderWrapper.classList.add("hidden");
    $app.appendChild(this.loaderWrapper);

    this.render();
  }

  toggleLoading() {
    const loader = document.querySelector(".loader-wrapper");
    loader.classList.toggle("hidden");
  }

  render() {
    const loaderImage = document.createElement("img");
    loaderImage.className = "loader-image";
    loaderImage.src = "src/assets/loader-image.gif";
    this.loaderWrapper.appendChild(loaderImage);
  }
}
