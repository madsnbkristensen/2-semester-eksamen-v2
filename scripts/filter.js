let wines = [];

fetch('produkter.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        wines = data;
        displayFilteredWines(wines);
    })
    .catch(function (error) {
        console.log('Error fetching wine data:', error);
    });

function filterWines() {
    const selectedLand = document.getElementById('land').value;
    const selectedOmråde = document.getElementById('omraade').value;
    const selectedProducent = document.getElementById('producent').value;
    const selectedDrue = document.getElementById('drue').value;

    const filteredWines = wines.filter(wine => {
        return (
            (selectedLand === '' || wine.land === selectedLand) &&
            (selectedOmråde === '' || wine.område === selectedOmråde) &&
            (selectedProducent === '' || wine.producent === selectedProducent) &&
            (selectedDrue === '' || wine.drue === selectedDrue)
        );
    });

    displayFilteredWines(filteredWines);
}

function displayFilteredWines(filteredWines) {
    const wineList = document.getElementById('wineList');
    wineList.innerHTML = '';

    if (filteredWines.length === 0) {
        wineList.innerHTML = 'Ingen resultater fundet.';
        return;
    }

    filteredWines.forEach(wine => {
        const wineElement = document.createElement('div');
        wineElement.classList.add('produkt-kasser');
        wineElement.innerHTML = `
            <a href="">
                <img src="${wine.billede}" alt="${wine.billedtekst}">
                <div class="produkt-tekst-baggrund">
                    <p>${wine.navn}</p>
                    <p>${wine.producent}</p>
                    <p id="produkt-pris">${wine.pris}</p>
                </div>
            </a>`;

        wineList.appendChild(wineElement);
    });
}
