
// Adding event listener on scroll, and creating a function, that toggles the class "sticky" in the CSS file. Last setting the scroll-y margin for the trigger to 100
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
});