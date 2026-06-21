function initBookTypeCards() {
  document.querySelectorAll(".book-type-card").forEach(function (card) {
    card.addEventListener("click", function () {
      document.querySelectorAll(".book-type-card").forEach(function (c) {
        c.classList.remove("selected");
      });
      card.classList.add("selected");
      var radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
}

function initKeywordTags(containerId, inputId) {
  var container = document.getElementById(containerId);
  var input = document.getElementById(inputId);
  if (!container || !input) return;

  function addTag(text) {
    var value = text.trim();
    if (!value) return;
    var tag = document.createElement("span");
    tag.className = "keyword-tag";
    tag.innerHTML = value + '<button type="button" aria-label="حذف">&times;</button>';
    tag.querySelector("button").addEventListener("click", function () {
      tag.remove();
    });
    container.insertBefore(tag, input);
    input.value = "";
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input.value.replace(",", ""));
    }
  });

  container.querySelectorAll(".keyword-tag button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.closest(".keyword-tag").remove();
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initBookTypeCards();
  initKeywordTags("keywordsContainer", "keywordsInput");
});
