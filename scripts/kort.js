// Initialize and add the map
let map;

async function initMap() {
  // The location of Aarhus vinhandel
  const aarhusVinhandel = { lat: 56.14780350023491, lng:10.2037641071365 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // The map, centered at Aarhus vinhandel
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: aarhusVinhandel,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new Marker({
    map: map,
    position: aarhusVinhandel,
    title: "Rundhoej Alle",
  });
}

initMap();