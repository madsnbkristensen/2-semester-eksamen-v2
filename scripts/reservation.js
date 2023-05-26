var cart = []; // Create an empty array to store the cart data

function getCartFromLocalStorage() {
  var savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

getCartFromLocalStorage();




function displayCartItems() {
    var cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = ''; // Clear the container
  
    cart.forEach(function(item) {
      var itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
  
      // Create HTML structure for displaying item details
      var itemContent = `
        <div class="checkout-item-container">
          <img class="checkout-img" src="${item.image}" alt="${item.name}">
          <div class="checkout-item">
          <h4 class="checkout-item-name">${item.name}</h4>
          <input type="number" class="checkout-item-quantity" value="${item.quantity}" min="1" onchange="updateCartItem(event, ${item.quantity}, '${item.price}')">
          <span>Antal</span>
          <p class="checkout-item-price"> Pris: ${calculateTotalPrice(item.quantity, item.price)} kr</p>
          </div>
        </div>
        <hr class="checkout-line">
      `;
  
      itemElement.innerHTML = itemContent;
      cartItemsContainer.appendChild(itemElement);
    });
  }
  
  function updateCartItem(event, quantity, price) {
    var newQuantity = event.target.value;
    var totalPriceElement = event.target.parentNode.querySelector('.checkout-item-price');
    totalPriceElement.textContent = 'Pris: ' + calculateTotalPrice(newQuantity, price) + ' kr';
  }
  
  function calculateTotalPrice(quantity, price) {
    var itemPrice = parseFloat(price.replace('$', ''));
    var totalPrice = itemPrice * quantity;
    return totalPrice.toFixed(2);
  }

  
  
  
  displayCartItems();
  
