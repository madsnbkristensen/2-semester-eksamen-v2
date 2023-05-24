document.addEventListener("DOMContentLoaded", function() {
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const productName = urlParams.get("name");
    const productProducer = urlParams.get("producer");
    const productPrice = urlParams.get("price");
    const productImage = urlParams.get("image");
    const productCountry = urlParams.get("country");
    const productRegion = urlParams.get("region");
    const productGrape = urlParams.get("grape");
    const productIcon = urlParams.get("icon")
 
    // Update product details in the HTML
    document.getElementById("product-name").textContent =  productName;
    document.getElementById("product-image").src = productImage;
    document.getElementById("product-icon").src = productIcon;
    document.getElementById("product-country").textContent = "Land: " + productCountry;
    document.getElementById("product-region").textContent = "Område: " + productRegion;
    document.getElementById("product-producer").textContent = "Producent: " + productProducer;
    document.getElementById("product-grape").textContent = "Drue: " + productGrape;
    document.getElementById("product-price").textContent =  productPrice;

   
 });
 