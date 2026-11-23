const periodStats = {
  today: {
    sales: "$1,284.50",
    tax: "Tax collected: $61.17",
    expenses: "$492.70",
    net: "$791.80",
    orders: "42",
  },
  month: {
    sales: "$12,840.50",
    tax: "Tax collected: $612.40",
    expenses: "$7,229.40",
    net: "$5,611.10",
    orders: "386",
  },
  year: {
    sales: "$88,420.00",
    tax: "Tax collected: $4,210.00",
    expenses: "$48,615.25",
    net: "$39,804.75",
    orders: "2,840",
  },
  all: {
    sales: "$126,730.80",
    tax: "Tax collected: $6,034.80",
    expenses: "$70,281.30",
    net: "$56,449.50",
    orders: "4,912",
  },
};

const viewTitles = {
  dashboard: "Dashboard",
  sales: "Sales history",
  financial: "Financial",
  cashiers: "Cashiers",
};

const navButtons = [...document.querySelectorAll("[data-preview-view]")];
const views = [...document.querySelectorAll(".view")];
const toast = document.querySelector("#preview-toast");
let toastTimer;

document.querySelector("#today-date").textContent = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
}).format(new Date());

function showView(name) {
  if (!Object.prototype.hasOwnProperty.call(viewTitles, name)) return;

  navButtons.forEach((button) => {
    const isActive = button.dataset.previewView === name;
    button.classList.toggle("active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  views.forEach((view) => view.classList.toggle("active", view.id === `${name}-view`));
  document.querySelector("#page-title").textContent = viewTitles[name];
}

function showPreviewMessage(message) {
  toast.textContent = message;
  toast.className = "toast visible";
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 3200);
}

function updatePeriodStats(period) {
  const stats = periodStats[period];
  if (!stats) return;

  Object.entries(stats).forEach(([name, value]) => {
    const element = document.querySelector(`[data-stat="${name}"]`);
    if (element) element.textContent = value;
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.previewView));
});

document.querySelectorAll("[data-view-link]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
});

document.querySelector("#dashboard-period").addEventListener("change", (event) => {
  updatePeriodStats(event.target.value);
});

document.querySelector("#add-expense-button").addEventListener("click", () => {
  showPreviewMessage("Sample preview only — no expense was saved.");
});

document.querySelector("#sales-search").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  document.querySelectorAll("#sales-table-body tr").forEach((row) => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
});

document.querySelector("#inventory-search").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  document.querySelectorAll("#inventory-table-body tr").forEach((row) => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
});
