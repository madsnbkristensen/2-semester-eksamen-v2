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
  
    // Find the item in the cart array
    var itemToUpdate = cart.find(function(item) {
      return item.price === price;
    });
  
    if (itemToUpdate) {
      itemToUpdate.quantity = newQuantity;
    }
  
    displayTotalPrice();
  }
  
  function calculateTotalPrice(quantity, price) {
    var itemPrice = parseFloat(price.replace('$', ''));
    var totalPrice = itemPrice * quantity;
    return totalPrice.toFixed(2);
  }
  
  function displayTotalPrice() {
    var totalPriceContainer = document.getElementById('total-price-container');
    var totalPrice = calculateCartTotal();
    totalPriceContainer.textContent = 'Totalpris: ' + totalPrice + ' kr';
  }
  
  function calculateCartTotal() {
    var total = 0;
    cart.forEach(function(item) {
      var itemPrice = parseFloat(item.price.replace('$', ''));
      total += itemPrice * item.quantity;
    });
    return total.toFixed(2);
  }
  
  displayCartItems();
  displayTotalPrice();



  var submitButton = document.getElementById('submit-reserve');

submitButton.addEventListener('click', function() {
  // Update the HTML content here
  var mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = `
    <section class="top-checkout">
            <h1>Aarhus</h1>
            <img class="logo-checkout" src="/img/logo-03.svg" alt="">
            <h1>Vinhandel</h1>
        </section>
        <section class="checkout-text">
        <p>Tak for din reservation!</p>
        <p>Du vil modtage svar på mail, så snart vi har set din reservation!</p>
        </section>
        <section class="submit-cont">
        <button class="submit-reserve">Udforsk Mere</button>
    </section>
  `;

  var mainContainer = document.getElementById('end-pic');
  mainContainer.innerHTML = `
    <img class="checkout-end-img" src="/img/outro.webp">
  `;
});

  