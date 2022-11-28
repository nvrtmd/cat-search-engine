export default class Loading {
  constructor({ $app }) {
    this.loaderWrapper = document.createElement("div");
    this.loaderWrapper.className = "loader-wrapper";
    this.loaderWrapper.classList.add("display-none");
    $app.appendChild(this.loaderWrapper);

    this.render();
  }

  toggleLoading() {
    const loader = document.querySelector(".loader-wrapper");
    loader.classList.toggle("display-none");
  }

  render() {
    const loaderImage = document.createElement("img");
    loaderImage.className = "loader-image";
    loaderImage.src = "src/assets/loader-image.gif";
    this.loaderWrapper.appendChild(loaderImage);
  }
}
