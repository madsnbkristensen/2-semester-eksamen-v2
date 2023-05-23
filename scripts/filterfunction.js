data = [
	{
		"navn": "Denis Meyer, Pinot noir, 2019",
		"billede": "TBA",
		"billedtekst": "rødvin",
		"pris": "129,50kr",
		"beskrivelse": "Let saftig og delikat rødvin på Pinot Noir druen. Vinen er ren i stilen med masser af bær-noter",
		"land": "Frankrig",
		"område": "Alsace",
		"producent": "Dennis Meyer",
		"drue": "Pinot noir"
	}, 

	{
		"navn": "La Grange Tiphaine, Ad Libitum, Touraine 2020",
		"billede": "TBA",
		"billedtekst": "rødvin",
		"pris": "149,50kr",
		"beskrivelse": "Manuel høst, håndselektering af frugten, spontangæring og 5 mdrs. lagring på cement. Let filtrering og minimal stabilisering med svovl.Frisk og frugtigt udtryk af de 3 store røde Loire druer. Perfekt sommer rød. Potentiale: 3 til 5 år.  Drik den ung.",
		"land": "Frankrig",
		"område": "Loire, Louraine",
		"producent": "Coralie og Damien Delecheneau",
		"drue": "Côt (Malbec), Cabernet Franc og Gamay"
	}
];
var filtersObject = {};

// on filter change
$(".filter").on("change", function() {
  var filterName = $(this).data("filter"),
    filterVal = $(this).val();

  if (filterVal == "") {
    delete filtersObject[filterName];
  } else {
    filtersObject[filterName] = filterVal;
  }

  var filters = "";

  for (var key in filtersObject) {
    if (filtersObject.hasOwnProperty(key)) {
      filters += "[data-" + key + "='" + filtersObject[key] + "']";
    }
  }

  if (filters == "") {
    $(".product").show();
  } else {
    $(".product").hide().filter(filters).show();
  }
});

// populate filter options
var makes = "",
  models = "",
  lands = ""; // updated variable name for "land" options

for (var i = 0; i < data.length; i++) {
  var make = data[i].make,
    model = data[i].model,
    land = data[i].land, // updated variable name for "land"
    price = data[i].price,
    rawPrice = price.replace("$", ""),
    rawPrice = parseInt(rawPrice.replace(",", "")),
    image = data[i].image;

  // create product cards
  products += "<div class='col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-land='" + land + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img src='" + image + "'><br />Make: " + make + "<br />Model: " + model + "<br />Land: " + land + "<br />Price: " + price + "</div></div>";

  // create dropdown of makes
  if (makes.indexOf("<option value='" + make + "'>" + make + "</option>") == -1) {
    makes += "<option value='" + make + "'>" + make + "</option>";
  }

  // create dropdown of models
  if (models.indexOf("<option value='" + model + "'>" + model + "</option>") == -1) {
    models += "<option value='" + model + "'>" + model + "</option>";
  }

  // create dropdown of lands
  if (lands.indexOf("<option value='" + land + "'>" + land + "</option>") == -1) {
    lands += "<option value='" + land + "'>" + land + "</option>";
  }
}

$("#products").html(products);
$(".filter-make").append(makes);
$(".filter-model").append(models);
$(".filter-land").append(lands); // updated class name for "land" filter

// on land filter change
$(".filter-land").on("change", function() {
  var selectedLand = $(this).val();

  if (selectedLand == "") {
    $(".product").show();
  } else {
    $(".product").hide().filter("[data-land='" + selectedLand + "']").show();
  }
});
