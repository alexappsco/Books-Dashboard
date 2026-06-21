function toggleLegalNav(e) {
  if (e) e.stopPropagation();
  const sub = document.getElementById("legalSubnav");
  const chevron = document.getElementById("legalChevron");
  if (!sub) return;
  sub.classList.toggle("hidden");
  if (chevron) chevron.classList.toggle("rotate-180");
}

function initLegalSubnav(activePage) {
  const sub = document.getElementById("legalSubnav");
  const chevron = document.getElementById("legalChevron");
  if (sub) sub.classList.remove("hidden");
  if (chevron) chevron.classList.add("rotate-180");

  document.querySelectorAll("#legalSubnav a").forEach(function (link) {
    link.classList.remove("active-link", "bg-[rgba(136,108,232,0.3)]", "font-bold");
    if (link.dataset.legalPage === activePage) {
      link.classList.add("active-link");
    }
  });
}

function filterLegalContent(query) {
  const q = query.trim().toLowerCase();
  document.querySelectorAll("[data-legal-item]").forEach(function (item) {
    const text = item.textContent.toLowerCase();
    item.style.display = !q || text.includes(q) ? "" : "none";
  });
}

function printLegalPage() {
  window.print();
}
