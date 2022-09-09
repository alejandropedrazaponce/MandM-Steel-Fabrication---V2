const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  centeredSlides: true,
});

/**
 * @description - When the user scrolls the page, the .logo-text will be hidden
 */
const header = document.querySelector("header");
const imgContainer = document.querySelector(".img-container");
window.addEventListener("scroll", fixHeader);

function fixHeader() {
  if (window.scrollY > 0) {
    header.classList.add("active");
    imgContainer.style.width = "15%";
    imgContainer.style.transition = "all 0.5s";
  } else {
    header.classList.remove("active");
    header.style.transition = "all 0.5s";
    imgContainer.style.width = "25%";
    imgContainer.style.transition = "all 0.5s";
  }
}
