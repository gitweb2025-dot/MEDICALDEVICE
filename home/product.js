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
  trigger: "#product", //TRIGGER
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

gsap.set(".home", { opacity: 0, scale: 0.7 });

// NAV ANIMATION
function startHeroAnimation() {
  gsap.to(".navbar", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".home", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  });
}

// PRODUCTS
const products = [
  {
    id: 1,
    name: "Digital Thermometer",
    price: 999,
    rating: 4.7,
    desc: "High-accuracy body temperature.",
    img: "../src/assets/temp1.webp",
  },
  {
    id: 2,
    name: "Stethoscope",
    price: 1499,
    rating: 4.5,
    desc: "Professional heart/lung auscultation.",
    img: "../src/assets/seth.webp",
  },
  {
    id: 3,
    name: "Pulse Oximeter",
    price: 699,
    rating: 4.3,
    desc: "Measures SpO2 accurately.",
    img: "../src/assets/pulse.webp",
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    price: 2799,
    rating: 4.6,
    desc: "Automatic arm BP monitor.",
    img: "../src/assets/bp.webp",
  },
  {
    id: 5,
    name: "Surgical Gloves",
    price: 499,
    rating: 4.2,
    desc: "Powder-free latex gloves.",
    img: "../src/assets/gloves.webp",
  },
  {
    id: 6,
    name: "Face Mask (50 pcs)",
    price: 699,
    rating: 4.3,
    desc: "Protective disposable masks.",
    img: "../src/assets/mask.webp",
  },
  {
    id: 7,
    name: "Nebulizer",
    price: 2599,
    rating: 4.5,
    desc: "Compact nebulization unit.",
    img: "../src/assets/nebu.webp",
  },
  {
    id: 8,
    name: "Sanitizer",
    price: 7999,
    rating: 4.7,
    desc: "Daily Essentials",
    img: "../src/assets/sani.webp",
  },
  {
    id: 9,
    name: "Hospital Bed",
    price: 15999,
    rating: 4.6,
    desc: "Adjustable patient bed.",
    img: "../src/assets/bed.webp",
  },
  {
    id: 10,
    name: "Medical Scissors",
    price: 299,
    rating: 4.1,
    desc: "Durable stainless steel scissors.",
    img: "../src/assets/sci.webp",
  },
  {
    id: 11,
    name: "Glucose Meter",
    price: 899,
    rating: 4.4,
    desc: "Accurate glucose monitoring.",
    img: "../src/assets/gm.webp",
  },
  {
    id: 12,
    name: "Otoscope",
    price: 2999,
    rating: 4.5,
    desc: "Ear examination device.",
    img: "../src/assets/oto.webp",
  },
  {
    id: 13,
    name: "Defibrillator",
    price: 24999,
    rating: 4.9,
    desc: "Portable emergency defibrillator.",
    img: "../src/assets/defi.webp",
  },
  {
    id: 14,
    name: "Oxygen Mask",
    price: 1999,
    rating: 4.3,
    desc: "Oxygen Mask",
    img: "../src/assets/iv.webp",
  },
  {
    id: 15,
    name: "Thermal Scanner",
    price: 3999,
    rating: 4.5,
    desc: "Infrared temp scanner.",
    img: "../src/assets/therm.webp",
  },
  {
    id: 16,
    name: "Sphygmomanometer",
    price: 1199,
    rating: 4.4,
    desc: "Manual BP monitor.",
    img: "../src/assets/bp.webp",
  },
];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const filterRating = document.getElementById("filterRating");
const sortBy = document.getElementById("sortBy");

const modal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModalBtn");

const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalRating = document.getElementById("modalRating");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");

/* RENDER AMAZON STYLE CARDS */
function render(list) {
  productsGrid.innerHTML = "";

  if (list.length === 0) {
    productsGrid.innerHTML = `<p class='col-span-full text-red-500 text-center text-lg py-40'>No products found.</p>`;
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl cursor-pointer group overflow-hidden ease-out";

    card.innerHTML = `
        <div class="relative">
          <img src="${p.img}" alt="products" class="w-full h-52 object-cover rounded-t-xl" />
        </div>

        <div class="p-4">
          <h3 class="text-lg font-semibold group-hover:text-primary">${p.name}</h3>
          <p class="text-gray-500 text-sm mt-1 line-clamp-2">${p.desc}</p>

          <div class="flex items-center justify-between gap-2 mt-2">
            <span class="text-yellow-500">⭐ ${p.rating}</span>
            <p class="text-primary font-bold text-xl mt-2">₹${p.price}</p>
          </div>

          

          <button class="mt-3 w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90 cursor-pointer">
            View Details
          </button>
        </div>
      `;

    card.addEventListener("click", () => showModal(p));
    productsGrid.appendChild(card);
  });
}

/* MODAL */
function showModal(p) {
  modalImg.src = p.img;
  modalTitle.textContent = p.name;
  modalRating.textContent = "⭐".repeat(Math.floor(p.rating));
  modalDesc.textContent = p.desc;
  modalPrice.textContent = `₹${p.price}`;
  modal.classList.add("show");
}

closeModalBtn.addEventListener("click", () => modal.classList.remove("show"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

/* SEARCH + FILTER + SORT */
function filterSort() {
  let list = products.filter((p) =>
    p.name.toLowerCase().includes(searchInput.value.toLowerCase()),
  );

  list = list.filter((p) => p.rating >= parseFloat(filterRating.value));

  if (sortBy.value === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sortBy.value === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sortBy.value === "rating-desc") list.sort((a, b) => b.rating - a.rating);

  render(list);
}

searchInput.addEventListener("input", filterSort);
sortBy.addEventListener("change", filterSort);
filterRating.addEventListener("change", filterSort);

render(products);

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
