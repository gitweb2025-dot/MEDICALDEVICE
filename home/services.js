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

// NAVBAR

gsap.registerPlugin(ScrollTrigger);

const toggle = document.getElementById("homeToggle");
const menu = document.getElementById("homeMenu");
const items = menu.querySelectorAll(".home-item");
const caret = document.getElementById("homeCaret");

let isOpen = false;

gsap.set(menu, { autoAlpha: 0, y: -10, display: "none" });
gsap.set(items, { opacity: 0, y: -8 });

toggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpen) {
    menu.classList.remove("hidden");

    gsap.to(menu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    gsap.to(caret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isOpen = true;
  } else {
    closeMenu();
  }
});

function closeMenu() {
  gsap.to(items, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    stagger: 0.05,
    ease: "power2.in",
  });

  gsap.to(menu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => menu.classList.add("hidden"),
  });

  gsap.to(caret, {
    rotate: 0,
    duration: 0.25,
  });

  isOpen = false;
}

document.addEventListener("click", () => {
  if (isOpen) closeMenu();
});

const mobileToggle = document.getElementById("mobileHomeToggle");
const mobileMenu = document.getElementById("mobileHomeMenu");
const mobileItems = mobileMenu.querySelectorAll(".mobile-home-item");
const mobileCaret = document.getElementById("mobileCaret");

let isMobileOpen = false;

gsap.set(mobileMenu, {
  autoAlpha: 0,
  y: -10,
  display: "none",
});

gsap.set(mobileItems, {
  opacity: 0,
  y: -12,
});

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isMobileOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.to(mobileMenu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(mobileItems, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    gsap.to(mobileCaret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isMobileOpen = true;
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  gsap.to(mobileItems, {
    opacity: 0,
    y: -12,
    duration: 0.25,
    stagger: 0.06,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });

  gsap.to(mobileCaret, {
    rotate: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  isMobileOpen = false;
}

document.addEventListener("click", () => {
  if (isMobileOpen) closeMobileMenu();
});

const navbar = document.getElementById("navbar");

let lastScroll = 0;
let isHidden = false;

gsap.set(navbar, {
  color: "black",
});

window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > lastScroll && current > 120 && !isHidden) {
    gsap.fromTo(
      navbar,
      { yPercent: -200, duration: 2.3, ease: "power2.out" },
      { yPercent: 0, duration: 2.3, ease: "power2.out" },
    );
    isHidden = true;
  }

  if (current < lastScroll && isHidden) {
    gsap.to(navbar, { y: 0, duration: 2.3, ease: "power2.out" });
    isHidden = false;
  }

  lastScroll = current;
});

ScrollTrigger.create({
  trigger: "#service", //TRIGGER
  start: "top top",

  onEnter: () => {
    gsap.to(navbar, {
      borderRadius: 0,
      color: "black",
      duration: 0.5,
    });
  },

  onLeaveBack: () => {
    gsap.to(navbar, {
      color: "black",
      duration: 0.5,
    });
  },
});

gsap.set(".menu-link", {
  opacity: 0,
  y: 30,
});

$(".ham-icon").click(function () {
  $("body").addClass("overflow-hidden");
  $(".mobile-menu").removeClass("-translate-y-full").addClass("translate-y-0");

  gsap.to(".menu-link", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.15,
    delay: 0.3,
  });
});

$(".close-menu").click(function () {
  $("body").removeClass("overflow-hidden");
  gsap.to(".menu-link", {
    opacity: 0,
    y: -30,
    duration: 0.4,
    ease: "power3.in",
    stagger: 0.1,
  });

  setTimeout(() => {
    $(".mobile-menu")
      .removeClass("translate-y-0")
      .addClass("-translate-y-full");
  }, 400);
});

// NAV HOVER
document.querySelectorAll(".nav-hover").forEach((link) => {
  const text = link.querySelector("span");

  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(text, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power3.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.3)",
    });
  });
});

// HOME

// LOADER ANIMATION
gsap.set(".navbar", { opacity: 0, y: -100 });

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

gsap.set(".stackly-core-services", { opacity: 0 });
gsap.set(".core-service-card", { opacity: 0, y: 80 });

// NAV ANIMATION
function startHeroAnimation() {
  gsap.to(".navbar", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".stackly-core-services", {
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".core-service-card", {
    scrollTrigger: {
      trigger: ".stackly-core-services",
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out",
  });
}

// STEPS
gsap.from(".step", {
  y: 40,
  opacity: 0,
  stagger: 0.6,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".steps-grid",
    start: "top 80%",
  },
});

// FAQ
gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-grid",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

document.querySelectorAll(".faq-answer").forEach((el) => {
  gsap.set(el, { height: 0, overflow: "hidden" });
});

let activeItem = null;

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (activeItem && activeItem !== item) {
      gsap.to(activeItem.querySelector(".faq-answer"), {
        height: 0,
        duration: 0.4,
      });
      gsap.to(activeItem.querySelector(".faq-icon"), {
        rotate: 0,
        duration: 0.3,
      });
    }

    if (activeItem === item) {
      gsap.to(answer, { height: 0, duration: 0.4 });
      gsap.to(icon, { rotate: 0, duration: 0.3 });
      activeItem = null;
    } else {
      gsap.to(answer, { height: "auto", duration: 0.5, ease: "power2.out" });
      gsap.to(icon, { rotate: 180, duration: 0.3 });
      activeItem = item;
    }
  });
});

// FOOTER
gsap.from(".stackly-footer", {
  opacity: 0,
  y: 80,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".stackly-footer",
    start: "top 85%",
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out",
});

//FOOT YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// SCROLL TO TOP

const btn = document.querySelector(".scroll-top-btn");
const progressRing = document.querySelector(".progress-ring");

const radius = 26;
const circumference = 2 * Math.PI * radius;

progressRing.style.strokeDasharray = circumference;
progressRing.style.strokeDashoffset = circumference;

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;

  const offset = circumference - progress * circumference;
  progressRing.style.strokeDashoffset = offset;

  if (scrollTop > 300) {
    gsap.to(btn, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
  } else {
    gsap.to(btn, { opacity: 0, pointerEvents: "none", duration: 0.3 });
  }
}

window.addEventListener("scroll", updateScrollProgress);

btn.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 2.5,
    ease: "power3.out",
  });
});

// SMOOTH SCROLL

const lenis = new Lenis({
  duration: 1,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { immediate: true })
      : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.addEventListener("refresh", () => lenis.resize());
ScrollTrigger.refresh();
