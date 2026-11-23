const tasteMenu = document.querySelector("#mainNavbarCollapse");
const tasteMenuToggle = document.querySelector(".navbar-toggler");

tasteMenuToggle.addEventListener("click", () => {
  const isExpanded = tasteMenuToggle.getAttribute("aria-expanded") === "true";
  tasteMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
  tasteMenu.classList.toggle("show", !isExpanded);
});

document.querySelector(".restaurants-filter").addEventListener("click", (event) => {
  const filter = event.target.closest("[data-restaurant-filter]");
  if (!filter) return;

  document.querySelectorAll("[data-restaurant-filter]").forEach((item) => {
    item.classList.toggle("selected", item === filter);
  });

  document.querySelectorAll(".single-restaurant").forEach((restaurant) => {
    restaurant.hidden = filter.dataset.restaurantFilter !== "all"
      && restaurant.dataset.restaurantType !== filter.dataset.restaurantFilter;
  });
});
