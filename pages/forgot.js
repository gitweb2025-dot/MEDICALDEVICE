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

gsap.set(".forgot", {
  opacity: 0,
  x: 80,
});

// NAV ANIMATION
function startHeroAnimation() {
  gsap.to(".forgot", {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".forgot-card",
      start: "top 95%",
    },
    duration: 1,
    ease: "power2.out",
  });
}

// FORGOT JS
const forgotForm = document.getElementById("reForgotForm");
const emailInput = document.getElementById("reForgotEmail");
const emailError = document.getElementById("forgotEmailError");
const successMsg = document.getElementById("forgotSuccess");

forgotForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  let isValid = true;

  if (!emailValue.endsWith("@gmail.com")) {
    emailError.classList.remove("hidden");
    successMsg.classList.add("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (isValid) {
    successMsg.classList.remove("hidden");

    setTimeout(() => {
      forgotForm.reset();
      successMsg.classList.add("hidden");
      window.location.href = "./404.html";
    }, 2000);
  }
});
