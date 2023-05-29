// Creating the constants, used for our burgermenu
const dropdown = document.querySelector(".dropdown");
const navMenu = document.querySelector(".nav-menu");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const produkterLink = document.querySelector('.nav-item > a');
const submenu = document.querySelector('.submenu');

// produkterLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     submenu.style.display = submenu.style.display === 'none' ? 'flex' : 'none';
// });




produkterLink.addEventListener('mouseenter', () => {
  submenu.style.display = 'flex';
});

produkterLink.addEventListener('mouseleave', () => {
  submenu.style.display = 'none';
});


