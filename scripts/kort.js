// Initialize and add the map
let map;

// Function to form the map, by importing Google's libraries.
async function initMap() {
  // The location of Aarhus vinhandel
  const aarhusVinhandel = { lat: 56.14780350023491, lng: 10.2037641071365 };

  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // The map, centered at Aarhus vinhandel
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: aarhusVinhandel,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Aarhus Vinhandel
  const marker = new Marker({
    map: map,
    position: aarhusVinhandel,
    title: "Aarhus Vinhandel",
  });

  // Accessing userAgentData to replace usage of navigator.userAgent
  const userAgentData = window.navigator.userAgentData;
  const browserName = userAgentData.brands[0].brand;
  console.log(`Browser Name: ${browserName}`);
}
