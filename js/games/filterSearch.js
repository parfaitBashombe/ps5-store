import { filterButtons, searchInput } from "./domElements.js";
import { allGames } from "./data.js";
import { renderGames } from "./render.js";

export const setupFilterAndSearch = () => {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      const currentSearchTerm = searchInput.value.toLowerCase();

      const filteredGames = allGames.filter((game) => {
        const matchesFilter =
          filter === "all" || game.genre.split(" ").includes(filter);
        const matchesSearch = game.title
          .toLowerCase()
          .includes(currentSearchTerm);
        return matchesFilter && matchesSearch;
      });
      renderGames(filteredGames);
    });
  });

  searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilterButton = document.querySelector(".filter-btn.active");
    const currentFilter = activeFilterButton
      ? activeFilterButton.dataset.filter
      : "all";

    const filteredAndSearchedGames = allGames.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm);
      const matchesFilter =
        currentFilter === "all" ||
        game.genre.split(" ").includes(currentFilter);
      return matchesSearch && matchesFilter;
    });
    renderGames(filteredAndSearchedGames);
  });
};
