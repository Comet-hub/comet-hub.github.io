import { isInViewport } from "./viewportDetection.js";

const menuButtom = document.querySelector("#menu-toggle");
const menu = document.querySelector(".nav__list");
const icon = document.querySelector("#menu-icon");
const closers = document.querySelectorAll(".closer");

const toggleMenu = () => {
  menu.classList.toggle("active-menu");
  menu.classList.contains("active-menu") ? openMenu() : closeMenu();
};

const openMenu = () => {
  closers.forEach((closer) => closer.addEventListener("click", toggleMenu));
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-x");
};

const closeMenu = () => {
  closers.forEach((closer) => closer.removeEventListener("click", toggleMenu));
  icon.classList.remove("fa-x");
  icon.classList.add("fa-bars");
};
menuButtom.addEventListener("click", toggleMenu);

const sections = document.querySelectorAll(".section");

document.addEventListener(
  "scroll",
  () => {
    sections.forEach((section) => {
      const navLink = document.querySelector(`#${section.id}-link`);
      const navLinkDeco = document.querySelector(
        `#${section.id}-link > .nav__link-deco`
      );
      if (isInViewport(section)) {
        navLink.classList.add("active-link");
        navLinkDeco.classList.add("nav__link-deco--active");
      } else {
        navLink.classList.remove("active-link");
        navLinkDeco.classList.remove("nav__link-deco--active");
      }
    });
  },
  {
    passive: true,
  }
);
