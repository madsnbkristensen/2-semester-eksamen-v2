document.addEventListener("DOMContentLoaded", function() {
   // Retrieve URL parameters
   const urlParams = new URLSearchParams(window.location.search);
   const productId = urlParams.get("id");
   const productName = urlParams.get("name");
   const productProducer = urlParams.get("producer");
   const productPrice = urlParams.get("price");
   const productCountry = urlParams.get("country");
   const productRegion = urlParams.get("region");
   const productGrape = urlParams.get("grape");
   const productDescription = urlParams.get("description");
   const productImage = urlParams.get("image");
   const okoIcon = urlParams.get("oko");
   const morktkodIcon = urlParams.get("morktkod");
   const lystkodIcon = urlParams.get("lystkod");
   const fiskIcon = urlParams.get("fisk");
   const veganIcon = urlParams.get("vegan");
   const hyggeIcon = urlParams.get("hygge");
   

   // Update product details in the HTML
   document.getElementById("product-name").textContent = productName;
   document.getElementById("product-image").src = productImage;
   document.getElementById("product-country").textContent = "Land: " + productCountry;
   document.getElementById("product-region").textContent = "Område: " + productRegion;
   document.getElementById("product-producer").textContent = "Producent: " + productProducer;
   document.getElementById("product-grape").textContent = "Drue: " + productGrape;
   document.getElementById("product-price").textContent = productPrice;
   document.getElementById("product-description").textContent = productDescription;

   if (okoIcon !== "") {
      document.getElementById("oko-icon").src = okoIcon;
    }
    
    if (lystkodIcon !== "") {
      document.getElementById("lystkod-icon").src = lystkodIcon;
    }
    
    if (morktkodIcon !== "") {
      document.getElementById("morktkod-icon").src = morktkodIcon;
    }
    
    if (fiskIcon !== "") {
      document.getElementById("fisk-icon").src = fiskIcon;
    }
    
    if (veganIcon !== "") {
      document.getElementById("vegan-icon").src = veganIcon;
    }
    
    if (hyggeIcon !== "") {
      document.getElementById("hygge-icon").src = hyggeIcon;
    }
    
    
    
    

});

