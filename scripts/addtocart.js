

var cart = []; // Erklære et tomt array til at lægge data ind i


function getCartFromLocalStorage() { // Funktion som henter kurv dataen fra den lokale storage
  var savedCart = localStorage.getItem('cart'); // Henter dataen fra den lokale storage ved hjælp af nøglen 'cart'
  if (savedCart) { //hvis der er gemt data, trækker den json data og tillægger der kurven
    cart = JSON.parse(savedCart);
    updateCartItems(); // Kalder updateCartItems funktionen for at opdatere kurvens indhold
  }
}

function saveCartToLocalStorage() { // Definerer en ny funktion som gemmer cart arrayet til den lokale storage
  localStorage.setItem('cart', JSON.stringify(cart)); //kovertere cart arrayet til en json string og sætter det i den lokale storage ved hjælp af nøgle 'cart'
}

getCartFromLocalStorage(); // Kalder funktion for at kunne indlæse kurv daten når en ny side loades, så kurven er opdateret på alle sider

function openCartModal() { // Funktion til at åbne en modal boks, som i det her tilfælde er vores kurv
  var modal = document.getElementById('cart-modal');
  modal.style.display = 'block';
}

function closeCartModal() { // Funktion til at lukke en modal boks, som her er vores kurv. - denne funktion kaldes ved hjælp af onclick i HTML'en
  var modal = document.getElementById('cart-modal');
  modal.style.display = 'none';
}

var closeModalButton = document.getElementById('close-modal'); // Henter lukke knappen fra DOM
closeModalButton.addEventListener('click', closeCartModal); // click event til at lukke kurven - closCartModal funktionen kaldes ved click

var reserveLink = document.getElementById('reserveBtn'); // Henter reserver knappen i DOM
reserveLink.addEventListener('click', addToCart); // click event til at lægge produkt i kurven - her kaldes addToCart ved click.

function addToCart(event) { // Definere funktionen
  event.preventDefault(); // stopper standard opførsel

  // Variabler med info om produktet hentet fra DOM
  var productName = document.getElementById('product-name').textContent; 
  var productImage = document.getElementById('product-image').src;
  var productPrice = document.getElementById('product-price').textContent;

  var quantityInput = document.getElementById('quantity-input');
  var quantity = parseInt(quantityInput.value);

  //laver et objekt 'produkt' med den hentede information og en standar mængde af 1
  var product = {
    name: productName,
    image: productImage,
    price: productPrice,
    quantity: 1,
  };

  // Tjekker om produktet allerede er i kurven ved hjælp af cart.find() ved at tjekke efter et produkt med samme navn
  var existingProduct = cart.find(function(item) {
    return item.name === product.name;
  });

  if (existingProduct) {
    existingProduct.quantity += quantity; // Hvis produktet eksistere så opdaterer den mængden
  } else {
    var product = { // hvis det ikke ekstistere laver det et ny produkt objekt og tilføjer til kurv med det givne information
      name: productName,
      image: productImage,
      price: productPrice,
      quantity: quantity,
    };
    cart.push(product); // tilføjer til kurv ved hjælp af cart.push()
  }

  updateCartItems(); // Kalder funktion for at opdatere kurven
  saveCartToLocalStorage(); // Kalder funktion for at gemme til den lokale storage

  alert('Product added to cart!'); // Alert
}

function updateCartItems() { // Definere funktion som opdatere elementerne i kurven
  var cartItemsContainer = document.getElementById('cart-items'); // henter element fra dom
  cartItemsContainer.innerHTML = ''; // rydder den oprindelige container i HTML'en ved at ændre det til en tom string

  cart.forEach(function(item, index) { //itererer over hvert element i kruven ved hjælp af forEach
    var itemElement = document.createElement('div'); // laver en ny div og tilføjer det til en variabel
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
    `; // Laver html strukturen for hvert element i kurven
    itemElement.innerHTML = itemContent; //HTML inde i itemElement er lig med intemContent
    cartItemsContainer.appendChild(itemElement); // tilføjer itemElement (dvs. produktet) til cartItemsContainer (til kurven)
  });

  var totalPrice = calculateTotalPrice(); //Beregner den totale pris ved hjælp af funktionen
  var totalPriceElement = document.getElementById('total-price'); // Henter elementet fra DOM
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function calculateTotalPrice() { //definerer en funktion som udregner den totale pris for kurven.
  var totalPrice = 0; // Sætter total værdien til 0

  cart.forEach(function(item) { // iterere over hvert element i kurven ved hjælp af forEach
    var itemPrice = parseFloat(item.price.replace('$', '')); // Tilføjer prisen for hvert element
    totalPrice += itemPrice * item.quantity; //Udregner den totale pris for kurven
  });

  return totalPrice; // Retunere den udregnede pris
}

function removeFromCart(index) { // definere en funktion som fjerner et element fra kurven
  var item = cart[index];

  if (item.quantity > 1) { // tjekker om der er mere end 1 af givent produkt
    item.quantity--; //hvis der er mere end 1, så fjerners der kun 1
  } else {
    cart.splice(index, 1); // Hvis der kun er 1 så fjernes produktet helt
  }

  updateCartItems(); // kalder funktion for at opdatere kurvens indhold
  saveCartToLocalStorage(); // Kalder funktionen for at gemme det til den lokale storage
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



var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function() {
  window.location.href = 'reservation.html';
});



