
import { allGames } from "./data.js";
import { renderGames } from "./render.js";
import { setupFilterAndSearch } from "./filterSearch.js";

document.addEventListener("DOMContentLoaded", () => {
  renderGames(allGames);
  setupFilterAndSearch();
});