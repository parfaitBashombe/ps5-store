document.addEventListener("DOMContentLoaded", () => {
  const gameGrid = document.querySelector(".game-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.querySelector(".search-bar input");
  const modal = document.getElementById("gameDetailModal");
  const closeBtn = document.querySelector(".modal-close-btn");
  const modalVideo = modal.querySelector(".modal-media iframe");
  const modalScreenshotsContainer = modal.querySelector(".modal-screenshots");
  const modalTitle = modal.querySelector(".modal-details h2");
  const modalDescription = modal.querySelector(".modal-details p:nth-of-type(1)");
  const modalGenre = modal.querySelector(".modal-details p:nth-of-type(2) strong");
  const modalReleaseDate = modal.querySelector(".modal-details p:nth-of-type(3) strong");
  const modalPrice = modal.querySelector(".modal-details .price");
  const modalAddToCartBtn = modal.querySelector(".modal-details .btn");

  // --- Game Data (Mimicking a server response) ---
  const allGames = [
    {
      id: "godofwar",
      title: "God of War Ragnarök",
      genre: "action adventure exclusives",
      displayGenre: "Action-Adventure",
      releaseDate: "Nov 9, 2022",
      price: "$69.99",
      image: "images/game-godofwar.jpg",
      description:
        "Experience an epic, heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Deep, narrative-driven action-adventure with stunning visuals and brutal combat.",
      videoUrl: "https://www.youtube.com/embed/EE-4GvcoKeo", // Example YouTube URL
      screenshots: [
        "images/game-godofwar-ss1.jpg",
        "images/game-godofwar-ss2.jpg",
        "images/game-godofwar-ss3.jpg",
        "images/game-godofwar-ss4.jpg",
      ],
    },
    {
      id: "spiderman2",
      title: "Marvel's Spider-Man 2",
      genre: "action adventure exclusives",
      displayGenre: "Action-Adventure",
      releaseDate: "Oct 20, 2023",
      price: "$69.99",
      image: "images/game-spiderman.jpg",
      description:
        "Swing into an all-new adventure as Spider-Man, facing new villains and challenges in an expanded New York City.",
      videoUrl: "https://www.youtube.com/embed/otAkHvyjY8I",
      screenshots: [
        "images/game-spiderman-ss1.jpg",
        "images/game-spiderman-ss2.jpg",
        "images/game-spiderman-ss3.jpg",
        "images/spiderman-4.jpg",
      ],
    },
    {
      id: "horizon",
      title: "Horizon Forbidden West",
      genre: "action rpg sci-fi",
      displayGenre: "Action RPG, Sci-Fi",
      releaseDate: "Feb 18, 2022",
      price: "$59.99",
      image: "images/game-horizon.jpg",
      description:
        "Join Aloy as she braves a majestic but dangerous new frontier, facing awe-inspiring machines and mysterious new threats.",
      videoUrl: "https://www.youtube.com/embed/Lq59cE_d24U",
      screenshots: [
        "images/game-horizon-ss1.jpg",
        "images/game-horizon-ss2.jpg",
        "images/game-horizon-ss3.jpg",
        "images/horizon-4.jpg",
      ],
    },
    {
      id: "ratchetclank",
      title: "Ratchet & Clank: Rift Apart",
      genre: "adventure exclusives",
      displayGenre: "Action-Adventure",
      releaseDate: "Jun 11, 2021",
      price: "$49.99",
      image: "images/game-ratchetclank.jpg",
      description:
        "Blast your way through an interdimensional adventure with Ratchet and Clank, featuring stunning visuals and unique gameplay mechanics.",
      videoUrl: "https://www.youtube.com/embed/jQ_M1tW0P4Q",
      screenshots: [
        "images/game-ratchetclank-ss1.jpg",
        "images/game-ratchetclank-ss2.jpg",
        "images/game-ratchetclank-ss3.jpg",
        "images/ratchet-4.jpg",
      ],
    },
    {
      id: "demonssouls",
      title: "Demon's Souls Remake",
      genre: "action rpg exclusives",
      displayGenre: "Action RPG",
      releaseDate: "Nov 12, 2020",
      price: "$69.99",
      image: "images/game-demonsouls.jpg",
      description:
        "From PlayStation Studios and Bluepoint Games comes a remake of the PlayStation classic, Demon's Souls. Entirely rebuilt from the ground up and masterfully enhanced.",
      videoUrl: "https://www.youtube.com/embed/2TMs2DLr2sQ",
      screenshots: [
        "images/game-demonsouls-ss1.jpg",
        "images/game-demonsouls-ss2.jpg",
        "images/game-demonsouls-ss3.jpg",
        "images/demons-4.jpg",
      ],
    },
    {
      id: "stellarblade",
      title: "Stellar Blade",
      genre: "action sci-fi upcoming",
      displayGenre: "Action, Sci-Fi",
      releaseDate: "Apr 26, 2024",
      price: "$69.99",
      image: "images/game-stellarblade.jpg",
      description:
        "Reclaim Earth for humankind in this exhilarating action-adventure game set in a post-apocalyptic world.",
      videoUrl: "https://www.youtube.com/embed/E-NzaW1I5J0",
      screenshots: [
        "images/game-stellarblade-ss1.jpg",
        "images/game-stellarblade-ss2.jpg",
        "images/game-stellarblade-ss3.jpg",
        "images/stellar-4.jpg",
      ],
    },
    {
      id: "assassinscreed",
      title: "Assassin's Creed Mirage",
      genre: "action adventure",
      displayGenre: "Action-Adventure",
      releaseDate: "Oct 5, 2023",
      price: "$49.99",
      image: "images/game-assassinscreed.jpg",
      description:
        "Experience the story of Basim, a cunning street thief, as he seeks answers and justice in 9th-century Baghdad.",
      videoUrl: "https://www.youtube.com/embed/NnL3i0yYt0w",
      screenshots: [
        "images/game-assassinscreed-ss1.jpg",
        "images/game-assassinscreed-ss2.jpg",
        "images/game-assassinscreed-ss3.jpg",
        "images/assasin-4.jpg",
      ],
    },
    {
      id: "finalfantasy",
      title: "Final Fantasy VII Rebirth",
      genre: "rpg fantasy",
      displayGenre: "RPG, Fantasy",
      releaseDate: "Feb 29, 2024",
      price: "$69.99",
      image: "images/game-finalfantasy.jpg",
      description:
        "The second entry in the FINAL FANTASY VII REMAKE project, continuing the epic adventure of Cloud and his companions.",
      videoUrl: "https://www.youtube.com/embed/XqQ_kM-3B0w",
      screenshots: [
        "images/game-finalfantasy-ss1.jpg",
        "images/game-finalfantasy-ss2.jpg",
        "images/game-finalfantasy-ss3.jpg",
        "images/final-4.jpg",
      ],
    },
    {
      id: "easportsfc",
      title: "EA Sports FC 25",
      genre: "sports upcoming",
      displayGenre: "Sports",
      releaseDate: "Sep 2024 (Hypothetical)",
      price: "$69.99",
      image: "images/game-ea-sports-fc.jpg",
      description:
        "Step onto the pitch in the next generation of football simulation, with realistic gameplay and immersive matchday experiences.",
      videoUrl: "https://www.youtube.com/embed/v9C0lP9C30Q", // Placeholder
      screenshots: [
        "images/game-ea-sports-fc-ss1.jpg",
        "images/game-ea-sports-fc-ss2.jpg",
        "images/game-ea-sports-fc-ss3.jpg",
        "images/ea-4.jpg",
      ],
    },
    {
      id: "silenthill2",
      title: "Silent Hill 2 Remake",
      genre: "horror upcoming",
      displayGenre: "Survival Horror",
      releaseDate: "2025 (Hypothetical)",
      price: "$59.99",
      image: "images/game-silent-hill.jpg",
      description:
        "Return to the eerie town of Silent Hill in a modern reimagining of the classic psychological horror masterpiece.",
      videoUrl: "https://www.youtube.com/embed/shb84_mFm8Q",
      screenshots: [
        "images/game-silent-hill-ss1.jpg",
        "images/game-silent-hill-ss2.jpg",
        "images/game-silent-hill-ss3.jpg",
        "images/silent-4.jpg",
      ],
    },
  ];

  // --- Function to Render Games ---
  const renderGames = (gamesToRender) => {
    gameGrid.innerHTML = ""; // Clear existing games
    gamesToRender.map((game) => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("game-card");
      gameCard.dataset.genre = game.genre;
      gameCard.dataset.id = game.id; // Add a data-id for easy lookup

      gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.title}" />
        <div class="game-info-overlay">
          <h3>${game.title}</h3>
          <p>Genre: ${game.displayGenre}</p>
          <p>Release Date: ${game.releaseDate}</p>
          <a href="#" class="btn view-details-btn" data-game-id="${game.id}">View Details</a>
        </div>
      `;
      gameGrid.appendChild(gameCard);
    });

    // Attach event listeners to newly created "View Details" buttons
    attachViewDetailsListeners();
  };

  // --- Initial Render ---
  renderGames(allGames);

  // --- Filter Functionality ---
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      const currentSearchTerm = searchInput.value.toLowerCase();

      const filteredGames = allGames.filter((game) => {
        const matchesFilter =
          filter === "all" || game.genre.split(" ").includes(filter);
        const matchesSearch = game.title.toLowerCase().includes(currentSearchTerm);
        return matchesFilter && matchesSearch;
      });
      renderGames(filteredGames);
    });
  });

  // --- Search Functionality ---
  searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilterButton = document.querySelector(".filter-btn.active");
    const currentFilter = activeFilterButton ? activeFilterButton.dataset.filter : "all";

    const filteredAndSearchedGames = allGames.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm);
      const matchesFilter =
        currentFilter === "all" || game.genre.split(" ").includes(currentFilter);
      return matchesSearch && matchesFilter;
    });
    renderGames(filteredAndSearchedGames);
  });

  // --- Modal Functionality ---
  const attachViewDetailsListeners = () => {
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
});