const NASHR_NAV_ITEMS = [
  { id: "home", href: "reports-analytics.html", icon: "imgs/icons/main.svg", label: "الرئيسية" },
  { id: "books", href: "books-management.html", icon: "imgs/icons/manage-branch.svg", label: "إدارة الكتب" },
  { id: "authors", href: "publishers-management.html", icon: "imgs/icons/publishers.svg", label: "إدارة المؤلفين" },
  { id: "articles", href: "articles-management.html", icon: "imgs/icons/articles.svg", label: "أحدث المقالات" },
  { id: "employees", href: "managementemployes.html", icon: "imgs/icons/manageemploye.svg", label: "إدارة الموظفين" },
  { id: "profits", href: "my-profits.html", icon: "imgs/icons/money.svg", label: "أرباحي" },
];

function renderSidebar(activeId) {
  const nav = document.getElementById("sidebar-nav");
  if (!nav) return;

  const legalActive = activeId === "legal" ? " active-link" : "";

  nav.innerHTML = NASHR_NAV_ITEMS.map((item) => {
    const active = item.id === activeId ? " active-link" : "";
    return `<a href="${item.href}" class="nav-link${active} flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-purple-100">
      <img src="${item.icon}" class="w-5 h-5" alt=""><span>${item.label}</span>
    </a>`;
  }).join("") + `
    <div class="mb-1 mt-1">
      <button type="button" onclick="toggleLegalNav(event)" class="nav-link w-full flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-purple-100${legalActive}">
        <img src="imgs/icons/legal.svg" class="w-5 h-5" alt="">
        <span class="flex-1 text-right">المعلومات القانونية</span>
        <svg id="legalChevron" class="w-4 h-4 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="legalSubnav" class="mr-2 space-y-1 hidden">
        <a href="terms-and-conditions.html" data-legal-page="terms" class="nav-link flex items-center gap-3 py-2.5 px-3 pr-8 rounded-xl text-gray-600 hover:bg-purple-100 text-[13px]"><span>الشروط والأحكام</span></a>
        <a href="privacy-policy.html" data-legal-page="privacy" class="nav-link flex items-center gap-3 py-2.5 px-3 pr-8 rounded-xl text-gray-600 hover:bg-purple-100 text-[13px]"><span>سياسة الخصوصية</span></a>
      </div>
    </div>
    <a href="#" onclick="openLogoutModal(); return false;" class="nav-link flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 mt-2 transition"><img src="imgs/icons/logout.svg" class="w-5 h-5" alt=""><span>تسجيل الخروج</span></a>`;
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if (!sidebar || !overlay) return;
  sidebar.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}

function toggleActions(event) {
  event.stopPropagation();
  document.querySelectorAll(".dropdown-actions").forEach((m) => m.classList.remove("show"));
  const menu = event.currentTarget.nextElementSibling;
  if (menu) menu.classList.toggle("show");
}

window.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-actions").forEach((m) => m.classList.remove("show"));
});

function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove("hidden");
  m.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add("hidden");
  m.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function openLogoutModal() { openModal("logoutModal"); }
function closeLogoutModal() { closeModal("logoutModal"); }
