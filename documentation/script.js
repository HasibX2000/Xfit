document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });

        // Update active state
        document.querySelectorAll(".doc-nav a").forEach((link) => {
          link.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });

  // Active section detection on scroll
  let sections = document.querySelectorAll(".doc-section");
  let navLinks = document.querySelectorAll(".doc-nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  const createMobileMenu = () => {
    const button = document.createElement("button");
    button.className = "mobile-menu-toggle";
    button.innerHTML = "<span></span><span></span><span></span>";
    document.body.appendChild(button);

    button.addEventListener("click", () => {
      document.querySelector(".doc-sidebar").classList.toggle("active");
    });
  };

  if (window.innerWidth <= 768) {
    createMobileMenu();
  }
});
