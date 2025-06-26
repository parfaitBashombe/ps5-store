import { renderNavLinks, renderSocialLinks } from "../shared/renderShared.js";
import { allGames } from "./data.js";
import { renderGames } from "./render.js";
import { setupFilterAndSearch } from "./filterSearch.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavLinks(".nav-list", "games.html");
  renderSocialLinks(".social-links");

  renderGames(allGames);
  setupFilterAndSearch();
});
