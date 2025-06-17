const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

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

const contactForm = document.getElementById("contactForm");
const formFields = contactForm.querySelectorAll("input, textarea");

formFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.validity.valid) {
      field.style.borderColor = "#4ade80";
    } else {
      field.style.borderColor = "#ef4444";
    }
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  formFields.forEach((field) => {
    if (!field.validity.valid) {
      isValid = false;
      field.style.borderColor = "#ef4444";
    }
  });

  if (isValid) {
    const formData = new FormData(contactForm);

    const button = contactForm.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Message Sent!";
    button.style.backgroundColor = "#4ade80";

    contactForm.reset();
    formFields.forEach((field) => {
      field.style.borderColor = "";
    });

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "";
    }, 3000);
  }
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
