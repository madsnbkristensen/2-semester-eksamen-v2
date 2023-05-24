// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const RundhoejAlle73 = { lat: 56.1199326, lng: 10.1757884 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: RundhoejAlle73,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new Marker({
    map: map,
    position: RundhoejAlle73,
    title: "Rundhoej Alle",
  });
}

initMap();