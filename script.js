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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * @description - When the user scrolls the page, the header and footer resizes
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

/**
 * @description - When the user clicks on the home button or logo, the page will reload
 * and scroll to the top
 */
const homeBtns = document.querySelectorAll("#home-btn");
const homeSection = document.querySelector("#home");
homeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
});

/**
 * @description - When the user clicks on the about button, the page will scroll to the
 * about section
 */
const aboutBtn = document.querySelector("#about-btn");
const aboutSection = document.querySelector("#about");
aboutBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#about").offsetTop - 75,
    behavior: "smooth",
  });
});

/**
 * @description - When the user clicks on the contact button, the page will scroll to the
 * contact section
 */
const contactBtn = document.querySelector("#contact-btn");
const contactSection = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#contact").offsetTop,
    behavior: "smooth",
  });
});

/**
 * @description - When the user clicks on the submit button, the form will be validated
 */
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const validateForm = () => {
  let isValid = true;
  inputs.forEach((input) => {
    if (!checkInputs(input)) {
      isValid = false;
    }
  });
  if (!checkTextArea(textArea)) {
    isValid = false;
  }
  return isValid;
};

/**
 * @description - Checks if the inputs are valid
 */
checkInputs = (input) => {
  let isValid = true;
  switch (input.id) {
    case "name":
      if (input.value.length < 3) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
      break;
    case "number":
      if (!validateNumber(input.value)) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
      break;
    case "email":
      if (!validateEmail(input.value)) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
      break;
    default:
      break;
  }
  return isValid;
};

/**
 * @description - Helper function to validate the phone number
 */
const validateNumber = (number) => {
  const re = /^\d{3}-\d{3}-\d{4}$/;
  return re.test(String(number));
};

/**
 * @description - Helper function to validate the email
 */
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/**
 * @description - Helper function to validate the text area
 */
const checkTextArea = (textArea) => {
  let isValid = true;
  if (textArea.value === "") {
    textArea.classList.add("error");
    isValid = false;
  } else {
    textArea.classList.remove("error");
  }
  return isValid;
};

/**
 * @description - Success message when the form is submitted
 */
const successMessage = () => {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};

/**
 * @description - Handles the form submission
 */
const form = document.getElementById("sheetdb-form");
const btnForm = document.querySelector(".btn");
btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    fetch(form.action, {
      method: "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
    })
      .then((response) => response.json())
      .then((html) => {
        successMessage();
        form.reset();
        window.scrollTo(0, 0);
      });
  }
});
