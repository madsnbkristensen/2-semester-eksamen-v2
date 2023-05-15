// jshint esversion: 6
// Hamburger Menu
const dropdown = document.querySelector(".dropdown");
const navMenu = document.querySelector(".nav-menu");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        dropdown.classList.remove("active");
        navMenu.classList.remove("active");
    })) 
