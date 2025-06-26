import { renderNavLinks, renderSocialLinks } from "../shared/renderShared.js";
import { allConsoles } from "./data.js";
import { renderGames } from "./render.js";
import { setupFilterAndSearch } from "./filterSearch.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavLinks(".nav-list", "consoles.html");
  renderSocialLinks(".social-links");

  renderGames(allConsoles);
  setupFilterAndSearch();
});
