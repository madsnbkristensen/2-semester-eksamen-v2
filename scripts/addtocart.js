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

  var quantityInput = document.getElementById('quantity-input');
  var quantity = parseInt(quantityInput.value);

  var product = {
    name: productName,
    image: productImage,
    price: productPrice,
    quantity: 1,
  };

  var existingProduct = cart.find(function(item) {
    return item.name === product.name;
  });

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    var product = {
      name: productName,
      image: productImage,
      price: productPrice,
      quantity: quantity,
    };
    cart.push(product);
  }

  updateCartItems();
  saveCartToLocalStorage();

  alert('Product added to cart!');
}

function updateCartItems() {
  var cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach(function(item, index) {
    var itemElement = document.createElement('div');
    var itemContent = `
      <div class="cart-item-grid">
      <div>
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      </div>
      <div class="item-quantity">${item.quantity > 1 ? 'x' + item.quantity : '1x'}</div>
      <button class="removeBtn" onclick="removeFromCart(${index})">Fjern fra kurv</button>
      </div>
    `;
    itemElement.innerHTML = itemContent;
    cartItemsContainer.appendChild(itemElement);
  });

  var totalPrice = calculateTotalPrice();
  var totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function calculateTotalPrice() {
  var totalPrice = 0;

  cart.forEach(function(item) {
    var itemPrice = parseFloat(item.price.replace('$', ''));
    totalPrice += itemPrice * item.quantity;
  });

  return totalPrice;
}

function removeFromCart(index) {
  var item = cart[index];

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart.splice(index, 1);
  }

  updateCartItems();
  saveCartToLocalStorage();
}

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
