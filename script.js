/**
 * @description - Third party library to handle the Swiper Slider
 */
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  navigation: {
    netoasttEl: ".swiper-button-netoastt",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * @description - When the user scrolls the page, the header and footer resizes
 */
const header = document.querySelector("header");
const imgContainer = document.querySelector(".img-container");
const fitoastHeader = () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    imgContainer.style.width = "15%";
    imgContainer.style.transition = "all 0.4s";
  } else {
    header.classList.remove("active");
    header.style.transition = "all 0.5s";
    imgContainer.style.width = "25%";
    imgContainer.style.transition = "all 0.4s";
  }
};
window.addEventListener("scroll", fitoastHeader);
/**
 * @description - When the user clicks on the home button or logo, the page will reload
 * and scroll to the top
 */
const homeBtns = document.querySelectorAll("#home-btn");
homeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "index.html";
    window.scrollTo(0, 0);
  });
});

/**
 * @description - When the user clicks on the email or phone number, they are copied to the
 * clipboard and notifies the user
 */
const toCopyText = document.querySelectorAll(".strong");
toCopyText.forEach((item) => {
  item.addEventListener("click", () => {
    let toast = document.getElementById("toast");
    if (item.id === "phone") {
      navigator.clipboard.writeText("479-334-9884");
      toast.innerHTML = "Phone number copied to clipboard";
    } else if (item.id === "email") {
      navigator.clipboard.writeText("mterrazas@mnmsteelfab.com");
      toast.innerHTML = "Email copied to clipboard";
    }
    toast.className = "show";
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  });
});

/**
 * @description - When the user "Contact us," the page goes to the contact section
 */
const contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", () => {
  window.open("contact.html", "_self");
});
