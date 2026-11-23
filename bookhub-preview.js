const bookGrid = document.querySelector("#book-grid");
const bookCards = Array.from(bookGrid.querySelectorAll(".book-card"));
const bookSearch = document.querySelector("#book-search");
const bookCategory = document.querySelector("#book-category");
const bookAvailability = document.querySelector("#book-availability");
const bookSort = document.querySelector("#book-sort");
const bookCount = document.querySelector("#book-result-count");
const emptyState = document.querySelector("#book-empty-state");
const detailsModal = document.querySelector("#book-details-modal");
const detailsContent = document.querySelector("#book-details-content");
const previewToast = document.querySelector("#book-preview-toast");
let toastTimer;

function visibleBooks() {
  const searchTerm = bookSearch.value.trim().toLowerCase();
  return bookCards.filter((card) => {
    const matchesSearch = `${card.dataset.title} ${card.dataset.author}`.includes(searchTerm);
    const matchesCategory = !bookCategory.value || card.dataset.category === bookCategory.value;
    const matchesAvailability = !bookAvailability.value || card.dataset.availability === bookAvailability.value;
    return matchesSearch && matchesCategory && matchesAvailability;
  });
}

function updateBookList() {
  const matches = visibleBooks();
  const sortBy = bookSort.value;
  matches.sort((first, second) => {
    if (sortBy === "author") return first.dataset.author.localeCompare(second.dataset.author);
    if (sortBy === "popular") return Number(first.dataset.rank) - Number(second.dataset.rank);
    return first.dataset.title.localeCompare(second.dataset.title);
  });

  bookCards.forEach((card) => { card.hidden = true; });
  matches.forEach((card) => {
    card.hidden = false;
    bookGrid.appendChild(card);
  });
  bookCount.textContent = `${matches.length} ${matches.length === 1 ? "book" : "books"} found`;
  emptyState.hidden = matches.length > 0;
  bookGrid.hidden = matches.length === 0;
}

function showToast(message) {
  previewToast.textContent = message;
  previewToast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => previewToast.classList.remove("is-visible"), 2200);
}

[bookSearch, bookCategory, bookAvailability, bookSort].forEach((control) => {
  control.addEventListener("input", updateBookList);
  control.addEventListener("change", updateBookList);
});
document.querySelector("#book-search-clear").addEventListener("click", updateBookList);

bookGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-book-action]");
  if (!button) return;

  const card = button.closest(".book-card");
  if (button.dataset.bookAction === "wishlist") {
    const isSaved = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isSaved));
    button.textContent = isSaved ? "♡" : "♥";
    showToast(isSaved ? "Removed from your sample shelf." : "Saved in your sample shelf.");
    return;
  }

  detailsContent.innerHTML = `
    <h4>${card.querySelector(".card-title").textContent}</h4>
    <p>by ${card.dataset.author}</p>
    <p>Category: ${card.dataset.category}</p>
    <p>Availability: ${card.dataset.availability === "available" ? "Available to borrow" : "Currently borrowed"}</p>
    <p>This is sample book information. Member accounts and circulation are not connected.</p>`;
  detailsModal.classList.add("active");
  detailsModal.setAttribute("aria-hidden", "false");
});

function closeDetails() {
  detailsModal.classList.remove("active");
  detailsModal.setAttribute("aria-hidden", "true");
}

document.querySelector("#book-details-close").addEventListener("click", closeDetails);
detailsModal.addEventListener("click", (event) => {
  if (event.target === detailsModal) closeDetails();
});
updateBookList();
