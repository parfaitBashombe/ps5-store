import {
  modal,
  closeBtn,
  modalVideo,
  modalScreenshotsContainer,
  modalTitle,
  modalDescription,
  modalGenre,
  modalReleaseDate,
  modalPrice,
  modalAddToCartBtn,
} from "./domElements.js";
import { allConsoles } from "./data.js";

export const attachViewDetailsListeners = () => {
  const viewDetailBtns = document.querySelectorAll(".view-details-btn");
  viewDetailBtns.forEach((btn) => {
    btn.removeEventListener("click", openGameDetailModal);
    btn.addEventListener("click", openGameDetailModal);
  });
};

const openGameDetailModal = (e) => {
  e.preventDefault();
  const gameId = e.target.dataset.gameId;
  const game = allConsoles.find((g) => g.id === gameId);

  if (game) {
    modalVideo.src = game.videoUrl;
    modalTitle.textContent = game.title;
    modalDescription.textContent = game.description;
    modalGenre.textContent = game.displayGenre;
    modalReleaseDate.textContent = game.releaseDate;
    modalPrice.textContent = game.price;
    modalAddToCartBtn.href = "#";

    modalScreenshotsContainer.innerHTML = "";
    game.screenshots.forEach((screenshotUrl) => {
      const img = document.createElement("img");
      img.src = screenshotUrl;
      img.alt = "Game Screenshot";
      modalScreenshotsContainer.appendChild(img);
    });

    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }
};

const closeModal = () => {
  modal.style.display = "none";
  modalVideo.src = "";
  document.body.classList.remove("modal-open");
};

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
