function initSpecialtyTags(containerId, inputId) {
  var container = document.getElementById(containerId);
  var input = document.getElementById(inputId);
  if (!container || !input) return;

  function addTag(text) {
    var value = text.trim();
    if (!value) return;
    var tag = document.createElement("span");
    tag.className = "specialty-tag";
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

  container.querySelectorAll(".specialty-tag button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.closest(".specialty-tag").remove();
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initSpecialtyTags("specialtiesContainer", "specialtiesInput");
});
