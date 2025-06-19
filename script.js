const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("fade-out");
  });
});

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    return;
  }

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down & past navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

const cards = document.querySelectorAll(".feature-card, .mission-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / card.clientHeight) * 100;

    card.querySelector(".card-glow").style.setProperty("--x", `${x}%`);
    card.querySelector(".card-glow").style.setProperty("--y", `${y}%`);
  });
});
