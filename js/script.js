const menu = document.querySelector(".nav__list");
const icon = document.querySelector("#menu-icon");
const closers = document.querySelectorAll(".closer");

const ToggleMenu = () => {
  menu.classList.toggle("active");
  menu.classList.contains("active") ? OpenMenu() : CloseMenu();
};

const OpenMenu = () => {
  closers.forEach((closer) => closer.addEventListener("click", ToggleMenu));
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-x");
};

const CloseMenu = () => {
  closers.forEach((closer) => closer.removeEventListener("click", ToggleMenu));
  icon.classList.remove("fa-x");
  icon.classList.add("fa-bars");
};
