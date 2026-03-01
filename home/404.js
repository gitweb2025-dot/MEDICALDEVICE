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

gsap.set(".error-icon", {
  scale: 0.5,
  opacity: 0,
});
gsap.set(".error-code", {
  y: 40,
  opacity: 0,
});
gsap.set(".error-title", {
  y: 30,
  opacity: 0,
});
gsap.set(".error-text", {
  y: 30,
  opacity: 0,
});
gsap.set(".btn-hover", {
  y: 20,
  opacity: 0,
});

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

// NAV ANIMATION
function startHeroAnimation() {
  gsap.to(".error-icon", {
    scale: 1,
    opacity: 1,
    duration: 0.6,
  });

  gsap.to(".error-code", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    delay: 0.2,
  });

  gsap.to(".error-title", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    delay: 0.3,
  });

  gsap.to(".error-text", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    delay: 0.4,
  });

  gsap.to(".btn-hover", {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.6,
    delay: 0.5,
  });
}
