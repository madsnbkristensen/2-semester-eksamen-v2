// Creating the constants, used for our burgermenu
const dropdown = document.querySelector(".dropdown");
const navMenu = document.querySelector(".nav-menu");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const produkterLink = document.querySelector('.nav-item > a');
const submenu = document.querySelector('.submenu');

// const submenuMobil = document.getElementById('submenu-mobile')

//  produkterLink.addEventListener('click', function (event) {
//      event.preventDefault();
//      submenuMobil.style.display = submenuMobil.style.display === 'none' ? 'flex' : 'none';
// });



produkterLink.addEventListener('mouseenter', () => {
  submenu.style.display = 'flex';
});

produkterLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!submenu.matches(':hover')) {
      submenu.style.display = 'none';
    }
  }, 300); // Add a delay of 300 milliseconds (0.3 seconds) before hiding the submenu
});

submenu.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!produkterLink.matches(':hover')) {
      submenu.style.display = 'none';
    }
  }, 0); // Add a delay of 300 milliseconds (0.3 seconds) before hiding the submenu
});





