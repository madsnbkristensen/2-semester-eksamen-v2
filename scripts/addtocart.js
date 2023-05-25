
var cart = [];

function openCartModal() {
  var modal = document.getElementById('cart-modal');
  modal.style.display = 'block';
}

function closeCartModal() {
  var modal = document.getElementById('cart-modal');
  modal.style.display = 'none';
}

var closeModalButton = document.getElementById('close-modal');
closeModalButton.addEventListener('click', closeCartModal);

var reserveLink = document.getElementById('reserveBtn');
reserveLink.addEventListener('click', addToCart);

function addToCart(event) {
  event.preventDefault(); // Prevent the default link behavior

  var productName = document.getElementById('product-name').textContent;
  var productImage = document.getElementById('product-image').src;
  var productPrice = document.getElementById('product-price').textContent;

  var product = {
    name: productName,
    image: productImage,
    price: productPrice,
  };

  cart.push(product);
  updateCartItems();
  saveCartToLocalStorage();

  alert('Product added to cart!');
}

function updateCartItems() {
  var cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
    `;
    cartItemsContainer.appendChild(itemElement);
  });
}

var shopMoreButton = document.getElementById('shop-more-button');
shopMoreButton.addEventListener('click', closeCartModal);

var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function() {
  // Perform checkout or send reservation logic
  // ...
  closeCartModal();
});

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  var savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartItems();
  }
}

loadCartFromLocalStorage();