document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.querySelector(".popup-container");

  function hidePopupOnScroll() {
    popupContainer.style.opacity = "0";

    window.removeEventListener("scroll", hidePopupOnScroll);

    window.addEventListener("scroll", showPopupOnTop);
  }

  function showPopupOnTop() {
    if (window.scrollY === 0) {
      popupContainer.style.opacity = "1";

      window.removeEventListener("scroll", showPopupOnTop);

      window.addEventListener("scroll", hidePopupOnScroll);
    }
  }

  window.addEventListener("scroll", hidePopupOnScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".collapsible");
  
    sections.forEach(section => {
      const title = section.querySelector(".title");
      const content = section.querySelector(".para");
  
      title.addEventListener("click", function() {
        // Toggle the display of the content element
        content.style.display = (content.style.display === "none") ? "block" : "none";
      });
    });
  });
  
  