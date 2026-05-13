const mapElement = document.querySelector("#map");

if (mapElement && window.L) {
  const businessLocation = [-33.9985, 18.5847];
  const businessAddress =
    "TEGUKA BUSINESS PARK, TEGUKA Business Park,<br>c/o Hammer & Spanner Cres,<br>Philippi, Cape Town, 7785";

  const map = L.map("map").setView(businessLocation, 16);

  const streetMap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution: "&copy; OpenStreetMap contributors",
    },
  );

  const satelliteMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community",
    },
  );

  streetMap.addTo(map);

  L.control
    .layers({
      "Street map": streetMap,
      "Satellite view": satelliteMap,
    })
    .addTo(map);

  L.marker(businessLocation)
    .addTo(map)
    .bindPopup(`Venetic Boards & Interiors<br>${businessAddress}`)
    .openPopup();
}
