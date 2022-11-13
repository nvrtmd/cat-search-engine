export default class Modal {
  constructor({ $app }) {
    this.isVisible = false;
    this.catInfo = null;

    this.dimmer = document.createElement("div");
    this.dimmer.className = "dimmer";
    this.dimmer.classList.add("hidden");

    $app.appendChild(this.dimmer);

    this.render();
  }

  setCatInfo(data) {
    this.toggleModal();
    this.catInfo = data.data;
    this.render();
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
    const dimmer = document.querySelector(".dimmer");
    dimmer.classList.toggle("hidden");
  }

  onClose() {
    this.toggleModal();
    this.data = null;
    this.dimmer.innerHTML = "";
  }

  render() {
    if (!this.isVisible) return;

    const modalContents = document.createElement("section");
    modalContents.className = "modal-contents";

    const modalHeader = document.createElement("header");
    modalHeader.className = "modal-header";

    const modalTitle = document.createElement("p");
    modalTitle.className = "modal-title";
    const catName = this.catInfo.name.split("/")[0].trim();
    modalTitle.innerText = `This cat is ${catName}`;

    const closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerText = "X";

    const modalImage = document.createElement("img");
    modalImage.className = "modal-image";
    modalImage.src = this.catInfo.url;

    const modalInfo = document.createElement("article");
    modalInfo.className = "modal-info";

    const catTemperament = document.createElement("p");
    catTemperament.className = "cat-temperament";
    catTemperament.innerText = this.catInfo.temperament;

    closeButton.addEventListener("click", () => this.onClose());

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    modalInfo.appendChild(catTemperament);

    modalContents.appendChild(modalHeader);
    modalContents.appendChild(modalImage);
    modalContents.appendChild(modalInfo);

    this.dimmer.appendChild(modalContents);
  }
}
