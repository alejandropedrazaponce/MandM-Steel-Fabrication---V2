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
    location.reload();
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
    top: document.querySelector("#about").offsetTop - 60,
    behavior: "smooth",
  });
});

/**
 * @description - When the user clicks on the email or phone number, they are copied to the
 * clipboard and notifies the user
 */
const toCopyText = document.querySelectorAll(".strong");
toCopyText.forEach((item) => {
  item.addEventListener("click", () => {
    let toast = document.getElementById("copied");
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

//when user clicks on the contact button, the page will open contact.html
const contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", () => {
  window.open("contact.html", "_self");
});

// /**
//  * @description - When the user clicks on the submit button, the form will be validated
//  */
// const inputs = document.querySelectorAll("input");
// const tetoasttArea = document.querySelector("tetoasttarea");
// const validateForm = () => {
//   let isValid = true;
//   inputs.forEach((input) => {
//     if (!checkInputs(input)) {
//       isValid = false;
//     }
//   });
//   if (!checkTetoasttArea(tetoasttArea)) {
//     isValid = false;
//   }
//   return isValid;
// };

// /**
//  * @description - Checks if the inputs are valid
//  */
// checkInputs = (input) => {
//   let isValid = true;
//   switch (input.id) {
//     case "name":
//       if (input.value.length < 3) {
//         input.classList.add("error");
//         isValid = false;
//       } else {
//         input.classList.remove("error");
//       }
//       break;
//     case "number":
//       if (!validateNumber(input.value)) {
//         input.classList.add("error");
//         isValid = false;
//       } else {
//         input.classList.remove("error");
//       }
//       break;
//     case "email":
//       if (!validateEmail(input.value)) {
//         input.classList.add("error");
//         isValid = false;
//       } else {
//         input.classList.remove("error");
//       }
//       break;
//     default:
//       break;
//   }
//   return isValid;
// };

// /**
//  * @description - Helper function to validate the phone number
//  */
// const validateNumber = (number) => {
//   const re = /^\d{3}-\d{3}-\d{4}$/;
//   return re.test(String(number));
// };

// /**
//  * @description - Helper function to validate the email
//  */
// const validateEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// /**
//  * @description - Helper function to validate the tetoastt area
//  */
// const checkTetoasttArea = (tetoasttArea) => {
//   let isValid = true;
//   if (tetoasttArea.value === "") {
//     tetoasttArea.classList.add("error");
//     isValid = false;
//   } else {
//     tetoasttArea.classList.remove("error");
//   }
//   return isValid;
// };

// /**
//  * @description - Success message when the form is submitted
//  */
// // const successMessage = () => {
// //   var toast = document.getElementById("snackbar");
// //   toast.className = "show";
// //   setTimeout(function () {
// //     toast.className = toast.className.replace("show", "");
// //   }, 3000);
// // };

// /**
//  * @description - Handles the form submission
//  */
// // const form = document.getElementById("sheetdb-form");
// // const btnForm = document.querySelector(".btn");
// // btnForm.addEventListener("click", (e) => {
// //   e.preventDefault();
// //   if (validateForm()) {
// //     fetch(form.action, {
// //       method: "POST",
// //       body: new FormData(document.getElementById("sheetdb-form")),
// //     })
// //       .then((response) => response.json())
// //       .then((html) => {
// //         successMessage();
// //         form.reset();
// //         window.scrollTo(0, 0);
// //       });
// //   }
// // });

// //when email is clicked, the email will be copied to the clipboard and toast will appear
