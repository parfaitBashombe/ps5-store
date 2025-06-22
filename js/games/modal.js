// modal.js
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
import { allGames } from "./data.js"; // Need access to allGames data

export const attachViewDetailsListeners = () => {
  const viewDetailBtns = document.querySelectorAll(".view-details-btn");
  viewDetailBtns.forEach((btn) => {
    btn.removeEventListener("click", openGameDetailModal); // Prevent duplicate listeners
    btn.addEventListener("click", openGameDetailModal);
  });
};

const openGameDetailModal = (e) => {
  e.preventDefault();
  const gameId = e.target.dataset.gameId;
  const game = allGames.find((g) => g.id === gameId);

  if (game) {
    modalVideo.src = game.videoUrl;
    modalTitle.textContent = game.title;
    modalDescription.textContent = game.description;
    modalGenre.textContent = game.displayGenre;
    modalReleaseDate.textContent = game.releaseDate;
    modalPrice.textContent = game.price;
    modalAddToCartBtn.href = "#"; // You might want to update this to a specific cart action

    // Clear previous screenshots
    modalScreenshotsContainer.innerHTML = "";
    game.screenshots.map((screenshotUrl) => {
      const img = document.createElement("img");
      img.src = screenshotUrl;
      img.alt = "Game Screenshot";
      modalScreenshotsContainer.appendChild(img);
    });

    modal.style.display = "flex";
  }
};

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = ""; // Stop video playback when closing
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.src = ""; // Stop video playback when closing
  }
});