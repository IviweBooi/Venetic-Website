const mapElement = document.querySelector("#map");

if (mapElement && window.L) {
  const map = L.map("map").setView([-33.9985, 18.5847], 14);

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

  L.marker([-33.9985, 18.5847])
    .addTo(map)
    .bindPopup(
      "Venetic Boards & Interiors<br>Unit 211 C/O Hammer & Spanner Crescent,<br>Teguka Business Park,<br>Philippi East 7750",
    )
    .openPopup();
}
