import { gameGrid } from "./domElements.js";
import { attachViewDetailsListeners } from "./modal.js";

export const renderGames = (gamesToRender) => {
  gameGrid.innerHTML = "";
  gamesToRender.map((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.dataset.genre = game.genre;
    gameCard.dataset.id = game.id;

    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.title}" />
      <div class="game-info-overlay">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <p>${game.price}</p>
        <a href="#" class="btn view-details-btn" data-game-id="${game.id}">Add To Cart</a>
      </div>
    `;
    gameGrid.appendChild(gameCard);
  });

  attachViewDetailsListeners();
};
