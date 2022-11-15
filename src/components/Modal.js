export default class Modal {
  constructor({ $app }) {
    this.isVisible = false;
    this.catInfo = null;

    this.modalWrapper = document.createElement("div");
    this.modalWrapper.className = "modal-wrapper";
    // this.modalWrapper.classList.add("hidden");

    $app.appendChild(this.modalWrapper);

    this.render();
  }

  setCatInfo(data) {
    this.catInfo = data.data;
    this.toggleModal("open");

    this.render();
  }

  toggleModal(action) {
    const modalWrapper = document.querySelector(".modal-wrapper");
    this.isVisible = !this.isVisible;
    switch (action) {
      case "open":
        modalWrapper.classList.add("active");
        break;
      case "close":
        modalWrapper.classList.remove("active");
        modalWrapper.classList.add("deactivate");
        const fadeOutEffect = setInterval(() => {
          modalWrapper.classList.remove("deactivate");
          modalWrapper.innerHTML = "";
          clearInterval(fadeOutEffect);
        }, 800);
        break;
      default:
        return;
    }
  }

  onClose() {
    this.toggleModal("close");
    this.data = null;
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

    closeButton.addEventListener("click", () => this.onClose());
    dimmer.addEventListener("click", () => this.onClose());
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape" && this.isVisible) {
        this.onClose();
      }
    });

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
