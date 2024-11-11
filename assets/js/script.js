/**
 * Main JavaScript file
 *
 * This file handles all the interactive functionality of the website including:
 * - Mobile menu functionality
 * - Navigation handling
 * - Testimonials slider
 *
 * @package XFit - Modern Gym & Fitness Template
 * @author Akon M Hasib
 * @version 1.0.0
 */

"use strict";

$(document).ready(function () {
  // Update copyright year automatically
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

/**
 * Mobile Menu Handler
 * Controls the mobile menu functionality including open/close animations
 */
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".navbar-mobile");
  const mobileMenuToggle = document.querySelector("#mobileMenuToggle");
  const mobileMenuClose = document.querySelector(".navbar-mobile__close");
  const mobileMenuOverlay = document.querySelector(".navbar-overlay");
  const mobileMenuLinks = document.querySelectorAll(".navbar-mobile__link");

  /**
   * Toggles the mobile menu state
   * Handles animations and body scroll
   */
  function toggleMobileMenu() {
    if (!mobileMenu.classList.contains("active")) {
      mobileMenu.classList.add("active");
      mobileMenuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      mobileMenuOverlay.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 400);
    }
  }

  // Event listeners for mobile menu
  mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  mobileMenuClose.addEventListener("click", toggleMobileMenu);
  mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
  mobileMenuLinks.forEach((link) => link.addEventListener("click", toggleMobileMenu));
});

/**
 * Navigation Functionality
 * Handles smooth scrolling, active link highlighting, and header modifications
 */
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const header = document.getElementById("header");

  /**
   * Updates the active navigation link based on scroll position
   */
  function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  /**
   * Updates header appearance on scroll
   */
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  // Smooth scroll implementation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click();
        }
      }
    });
  });

  // Scroll event listeners
  window.addEventListener("scroll", function () {
    updateActiveLink();
    updateHeader();
  });

  // Initialize navigation state
  updateActiveLink();
  updateHeader();
});

/**
 * Testimonials Slider
 * Initializes and configures the testimonials carousel
 */
const testimonialsSlider = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
