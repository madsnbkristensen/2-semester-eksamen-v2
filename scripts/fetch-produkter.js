fetch("produkter.json")
   .then(function (response) {
      return response.json();
   })
   .then(function (products) {
      let placeholder = document.querySelector("#produkt-liste");
      let out = "";
      for (let product of products) {
         out += `
         <a href="udvalgt-produkt.html?id=${product.id}&name=${encodeURIComponent(product.navn)}&producer=${encodeURIComponent(product.producent)}&price=${encodeURIComponent(product.pris)}&image=${encodeURIComponent(product.billede)}&country=${encodeURIComponent(product.land)}&region=${encodeURIComponent(product.område)}&grape=${encodeURIComponent(product.drue)}"> 
	         <div class="produkt-kasser">
		         <img src='${product.billede}'>
		         <div class="produkt-tekst-baggrund">
			         <p>${product.navn}<p>
			         <p>${product.producent}</p>
			         <p id="produkt-pris">${product.pris}</p>
		         </div>
	         </div>
         </a>
         `;
      }

      placeholder.innerHTML = out;
   });