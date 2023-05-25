const slider = document.querySelector(".horizontal-slider");
const sliderContainer = document.querySelector(".slider-container");
const allProducts = document.querySelectorAll(".produkt-kasser");

const visibleProducts = 2; // Number of visible products
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

// Update the styling and visibility of products
const updateProductsVisibility = () => {
  const productsArray = Array.from(allProducts);
  const activeProducts = productsArray.slice(0, visibleProducts);

  sliderContainer.style.width = `${(100 / visibleProducts) * productsArray.length}%`;
  productsArray.forEach((product) => {
    if (activeProducts.includes(product)) {
      product.style.width = `${100 / visibleProducts}%`;
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

// Initial update of product visibility
updateProductsVisibility();
