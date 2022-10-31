const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav_open");
    navMenu.classList.toggle("nav__menu_open");
});