// CURSOR JS FOR HOVER
jQuery(document).ready(function ($) {
  const cursor = $(".cursor");

  $(document).on("mousemove", function (e) {
    cursor.css({
      top: e.clientY,
      left: e.clientX,
    });
  });

  $("a").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("a").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("i").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("i").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("button").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("button").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
});

// HOME

// LOADER ANIMATION

window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 2.3,
      onComplete: startHeroAnimation,
    })
    .to(loader, {
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
    })
    .set(loader, { display: "none" });
});

gsap.set(".signup", {
  opacity: 0,
  x: 80,
});

// NAV ANIMATION
function startHeroAnimation() {
  gsap.to(".signup", {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".signup-card",
      start: "top 95%",
    },
    duration: 1,
    ease: "power2.out",
  });
}

// SIGN UP FORM
const form = document.getElementById("reSignupForm");
const emailInput = document.getElementById("reEmail");
const passwordInput = document.getElementById("rePassword");
const confirmInput = document.getElementById("reConfirmPassword");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const nameError = document.querySelector(".re-name-error");

document
  .querySelector(".re-toggle-password")
  .addEventListener("click", function () {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });

document
  .querySelector(".re-toggle-confirm")
  .addEventListener("click", function () {
    confirmInput.type = confirmInput.type === "password" ? "text" : "password";
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  const fullName = form.fullname.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmValue = confirmInput.value.trim();

  if (fullName === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
  }

  if (!emailValue.endsWith("@gmail.com")) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (!passwordRegex.test(passwordValue)) {
    passwordError.classList.remove("hidden");
    isValid = false;
  } else {
    passwordError.classList.add("hidden");
  }

  if (passwordValue !== confirmValue) {
    confirmError.classList.remove("hidden");
    isValid = false;
  } else {
    confirmError.classList.add("hidden");
  }

  if (isValid) {
    form.reset();
    window.location.href = "./404.html";
  }
});
