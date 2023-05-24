fetch("produkter.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#produkt-liste");
   let out = "";
   for(let product of products){
      out += `
	  <div class="produkt-kasser">
			<img src='${product.billede}'>
			<div class="produkt-tekst-baggrund">
			<p>${product.navn}<p>
			<p>${product.producent}</p>
			<p id="produkt-pris">${product.pris}</p>
			</div>
			</div>
      `;
   }
 
   placeholder.innerHTML = out;
});
