function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Agregar al final de paginaAcercaClub.js
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const counter = carousel.querySelector(".carousel-counter");
    if (counter) {
      const totalSlides = carousel.querySelectorAll(".carousel-item").length;
      counter.querySelector(".total-slides").textContent = totalSlides;

      carousel.addEventListener("slid.bs.carousel", function (e) {
        const currentIndex =
          Array.from(e.target.querySelectorAll(".carousel-item")).indexOf(
            e.relatedTarget
          ) + 1;
        counter.querySelector(".current-slide").textContent = currentIndex;
      });
    }
  });
});
