document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.querySelector(".popup-container");
  const themeToggle = document.getElementById("theme-toggle");

  function hidePopupOnScroll() {
    popupContainer.style.opacity = "0";
    themeToggle.style.opacity = "0";

    window.removeEventListener("scroll", hidePopupOnScroll);

    window.addEventListener("scroll", showPopupOnTop);
  }

  function showPopupOnTop() {
    if (window.scrollY === 0) {
      popupContainer.style.opacity = "1";
      themeToggle.style.opacity = "1";

      window.removeEventListener("scroll", showPopupOnTop);

      window.addEventListener("scroll", hidePopupOnScroll);
    }
  }

  window.addEventListener("scroll", hidePopupOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".collapsible");

  sections.forEach((section) => {
    const title = section.querySelector(".title");
    const content = section.querySelector(".para");

    title.addEventListener("click", function () {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
    });
  });
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.add("theme-transition");

  setTimeout(() => {
    body.classList.remove("theme-transition");
  }, 500);

  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("isDarkMode", isDarkMode);
});

const savedTheme = localStorage.getItem("isDarkMode");
if (savedTheme === "true") {
  body.classList.add("dark");
}
