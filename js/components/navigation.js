const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav-overlay");
const body = document.body;

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileNav.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mobileNav.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });
}

const pendingLinks = document.querySelectorAll("[data-pending-url]");

pendingLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
