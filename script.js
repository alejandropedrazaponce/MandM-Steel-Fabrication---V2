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
        document.querySelector(".name").innerHTML = "Name is required";
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
        document.querySelector(".name").innerHTML = "";
      }
      break;
    case "number":
      if (!validateNumber(input.value)) {
        document.querySelector(".number").innerHTML =
          "Required format: 123-456-7890";
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
        document.querySelector(".number").innerHTML = "";
      }
      break;
    case "user-email":
      if (!validateEmail(input.value)) {
        document.querySelector(".email").innerHTML =
          "Required format: your-email@email.com";
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
        document.querySelector(".email").innerHTML = "";
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
 * @description - Helper function to validate the tetoastt area
 */
const checkTextArea = (textArea) => {
  let isValid = true;
  if (textArea.value === "") {
    textArea.classList.add("error");
    document.querySelector(".message").innerHTML = "Please, enter your message";
    isValid = false;
  } else {
    textArea.classList.remove("error");
    document.querySelector(".message").innerHTML = "";
  }
  return isValid;
};

/**
 * @description - Success message when the form is submitted
 */
const successMessage = () => {
  var toast = document.getElementById("snackbar");
  toast.className = "show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
};

/**
 * @description - Handles the form submission
 */
const form = document.getElementById("sheetdb-form");
const btnForm = document.querySelector(".form-btn");
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
        window.location.href = "index.html";
      });
  }
});

// //when email is clicked, the email will be copied to the clipboard and toast will appear
