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
        wineList.innerHTML = '<span style="color: red; font-weight: bold; font-size: 32px;">Ingen resultater fundet :(</span>';
        return;
      }
      

    filteredWines.forEach(wine => {
        const wineElement = document.createElement('div');
        wineElement.classList.add('produkt-kasser');
        wineElement.innerHTML = `
            <a href="udvalgt-produkt.html?id=${wine.id}&name=${encodeURIComponent(wine.navn)}&producer=${encodeURIComponent(wine.producent)}&price=${encodeURIComponent(wine.pris)}&image=${encodeURIComponent(wine.billede)}&country=${encodeURIComponent(wine.land)}&region=${encodeURIComponent(wine.område)}&grape=${encodeURIComponent(wine.drue)}">
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


function resetFilters() {
    document.getElementById('land').value = '';
    document.getElementById('omraade').value = '';
    document.getElementById('producent').value = '';
    document.getElementById('drue').value = '';
  
    // Nutil filtre og viser alle vine
    displayFilteredWines(wines);
  }
  document.getElementById('resetButton').addEventListener('click', resetFilters);


//___________________________________________________________

// Add an event listener for window resize
window.addEventListener('resize', updateFilterOptions);

// Function to update the filter options based on screen size
function updateFilterOptions() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;
  const filterWrapper = document.querySelector('.filter-wrapper');

  if (screenWidth > 1024) {
    // Change the select tags to labels and option tags to checkbox buttons
    const selectElements = filterWrapper.querySelectorAll('select');
    selectElements.forEach((select) => {
      const selectId = select.id;
      const selectOptions = select.querySelectorAll('option');
      const checkboxDiv = document.createElement('div');
      checkboxDiv.id = selectId;

      const headline = document.createElement('p'); // Create a <p> tag for headline
      headline.classList.add('filter-headline');
      headline.textContent = select.previousElementSibling.textContent;
      checkboxDiv.appendChild(headline);

      const hr = document.createElement('hr'); // Create an <hr> tag
      checkboxDiv.appendChild(hr); // Append the <hr> tag after the headline

      selectOptions.forEach((option, index) => {
        if (index === 0) return; // Skip the first option, which is the default option

        const checkboxLabel = document.createElement('label');
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.name = selectId;
        checkboxInput.value = option.value;

        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(document.createTextNode(option.textContent));
        checkboxDiv.appendChild(checkboxLabel);
      });

      select.style.display = 'none'; // Hide the original select element
      select.insertAdjacentElement('afterend', checkboxDiv); // Insert the checkbox div after the select element
      select.previousElementSibling.remove(); // Remove the label element
    });
  } else {
    // Change the labels and checkbox buttons back to select and option tags
    const checkboxDivs = filterWrapper.querySelectorAll('div');
    checkboxDivs.forEach((checkboxDiv) => {
      const checkboxId = checkboxDiv.id;
      const checkboxInputs = checkboxDiv.querySelectorAll('input');
      const selectElement = document.createElement('select');
      selectElement.id = checkboxId;

      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Select...';
      selectElement.appendChild(defaultOption);

      checkboxInputs.forEach((checkboxInput) => {
        const option = document.createElement('option');
        option.value = checkboxInput.value;
        option.textContent = checkboxInput.nextElementSibling.textContent.trim();
        selectElement.appendChild(option);
      });

      checkboxDiv.style.display = 'none'; // Hide the checkbox div
      checkboxDiv.insertAdjacentElement('afterend', selectElement); // Insert the select element after the checkbox div
      checkboxDiv.previousElementSibling.remove(); // Remove the label element
    });
  }

  // Attach event listeners to checkbox buttons for filtering
  const checkboxButtons = filterWrapper.querySelectorAll('input[type="checkbox"]');
  checkboxButtons.forEach((checkboxButton) => {
    checkboxButton.addEventListener('change', filterWines2);
  });
}

// Call the updateFilterOptions function initially
updateFilterOptions();

// Rest of your existing code...

// Function to filter wines based on selected options
function filterWines2() {
  const selectedLand = document.querySelector('input[name="land"]:checked')?.value || '';
  const selectedOmråde = document.querySelector('input[name="omraade"]:checked')?.value || '';
  const selectedProducent = document.querySelector('input[name="producent"]:checked')?.value || '';
  const selectedDrue = document.querySelector('input[name="drue"]:checked')?.value || '';

  const filteredWines = wines.filter((wine) => {
    return (
      (selectedLand === '' || wine.land === selectedLand) &&
      (selectedOmråde === '' || wine.område === selectedOmråde) &&
      (selectedProducent === '' || wine.producent === selectedProducent) &&
      (selectedDrue === '' || wine.drue === selectedDrue)
    );
  });

  displayFilteredWines(filteredWines);
}



// Rest of your existing code...







