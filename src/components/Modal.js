export default class Modal {
  constructor({ $app }) {
    this.isVisible = false;
    this.catInfo = null;

    this.modalWrapper = document.createElement("div");
    this.modalWrapper.className = "modal-wrapper";
    this.modalWrapper.classList.add("hidden");

    $app.appendChild(this.modalWrapper);

    this.render();
  }

  render() {}
}
