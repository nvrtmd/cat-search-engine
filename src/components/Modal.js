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

  toggleModal() {
    this.isVisible = !this.isVisible;
    const modalWrapper = document.querySelector(".modal-wrapper");
    modalWrapper.classList.toggle("hidden");
  }

  setCatInfo(data) {
    this.toggleModal();
    this.catInfo = data.data;
    console.log(this.catInfo);
    this.render();
  }

  render() {
    if (!this.isVisible) return;

    const dimmer = document.createElement("div");
    dimmer.className = "dimmer";

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

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    modalInfo.appendChild(catTemperament);

    modalContents.appendChild(modalHeader);
    modalContents.appendChild(modalImage);
    modalContents.appendChild(modalInfo);

    this.modalWrapper.appendChild(dimmer);
    this.modalWrapper.appendChild(modalContents);
  }
}
