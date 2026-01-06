// Icons that appear on the map for each layer
var npsIcon = L.icon({
  iconUrl: "../images/nps.png",
  iconSize: [50, 45], // size of the icon
});

var nzIcon = L.icon({
  iconUrl: "../images/FLNP_logo.png",
  iconSize: [35, 45], // size of the icon
});

var skiIcon = L.divIcon({
  className: 'ski-div-icon',
  html: '<span class="material-symbols-outlined">downhill_skiing</span>',
  iconSize: [35,35], // size of the icon
});

// Map Layers
var philadelphia = L.marker([39.95, -75.16]).bindPopup(
  "Home - Philadelphia, PA."
);

var cities = L.layerGroup([philadelphia]);

// skiSlopes
var shawnee = L.marker([41.03875493733112, -75.08159465465165], {
  icon: skiIcon,
}).bindPopup("Shawnee Ski Resort");

var camelback = L.marker([41.05162999763743, -75.35604835434484], {
  icon: skiIcon,
}).bindPopup("Camelback Ski Resort");

var montage = L.marker([41.35102796478296, -75.66220855992954], {
  icon: skiIcon,
}).bindPopup("Montage Mountain Ski Resort");

var jackfrost = L.marker([41.107791055107214, -75.65333273864887], {
  icon: skiIcon,
}).bindPopup("Jack Frost Ski Resort");

var sawmill = L.marker([41.519434267911514, -77.28955182505472], {
  icon: skiIcon,
}).bindPopup("Ski Sawmill");

var blueknob = L.marker([40.28900147860789, -78.56323906130943], {
  icon: skiIcon,
}).bindPopup("Blue Knob Ski Resort");

var whiteface = L.marker([44.35355076715748, -73.86151309738013], {
  icon: skiIcon,
}).bindPopup("Whiteface Mountain Ski Resort");

var stowe = L.marker([44.53029368089624, -72.78573713800019], {
  icon: skiIcon,
}).bindPopup("Stowe Mountain Resort");

var killington = L.marker([43.60964430376488, -72.79537334724705], {
  icon: skiIcon,
}).bindPopup("Killington Resort");

var vail = L.marker([39.606149835671346, -106.35482671124608], {
  icon: skiIcon,
}).bindPopup("Vail Resort");

var sun = L.marker([43.66028805359189, -114.40531864121775], {
  icon: skiIcon,
}).bindPopup("Sun Valey Resort");

var skiSlopes = L.layerGroup([shawnee, camelback, montage, jackfrost, sawmill, blueknob, whiteface, stowe, killington, vail, sun]);

// parks
(yose = L.marker([37.86, -119.53], { icon: npsIcon }).bindPopup(
  '<b>Yosemite National</b> Park<a href="yose.html"><br>[Details...]</a>'
)),
  (olym = L.marker([47.79, -123.61], { icon: npsIcon }).bindPopup(
    "Olympic National Park."
  ));
shen = L.marker([38.47, -78.45], { icon: npsIcon }).bindPopup(
  "Shenandoah National Park."
);
neri = L.marker([37.87, -81.05], { icon: npsIcon }).bindPopup(
  "New River Gorge National Park."
);
indu = L.marker([41.65, -87.05], { icon: npsIcon }).bindPopup(
  "Indiana Dunes National Park."
);
cuva = L.marker([41.28, -81.56], { icon: npsIcon }).bindPopup(
  "Cuyahoga Valley National Park."
);
zion = L.marker([37.29, -113.02], { icon: npsIcon }).bindPopup(
  "Zion National Park."
);
yell = L.marker([44.59, -110.56], { icon: npsIcon }).bindPopup(
  "Yellowstone National Park."
);
grte = L.marker([43.77, -110.73], { icon: npsIcon }).bindPopup(
  "Grand Teton National Park."
);
glac = L.marker([48.75, -113.78], { icon: npsIcon }).bindPopup(
  "Glacier National Park."
);
badl = L.marker([43.85, -102.33], { icon: npsIcon }).bindPopup(
  "Badlands National Park."
);
mora = L.marker([46.86, -121.69], { icon: npsIcon }).bindPopup(
  "Mount Ranier National Park."
);
maca = L.marker([37.18, -86.1], { icon: npsIcon }).bindPopup(
  "Mammoth Cave National Park."
);
crla = L.marker([42.92, -122.11], { icon: npsIcon }).bindPopup(
  "Crater Lake National Park."
);
redw = L.marker([41.39, -124.04], { icon: npsIcon }).bindPopup(
  "Redwood National Park."
);
jotr = L.marker([33.86, -115.91], { icon: npsIcon }).bindPopup(
  "Joshua Tree National Park."
);
grca = L.marker([36.26, -112.35], { icon: npsIcon }).bindPopup(
  "Grand Canyon National Park."
);
gaar = L.marker([38.62, -90.18], { icon: npsIcon }).bindPopup(
  "Gateway Arch National Park."
);
havo = L.marker([19.51, -155.37], { icon: npsIcon }).bindPopup(
  "Hawaiʻi Volcanoes National Park"
);
flnp = L.marker([-45.3853332530258, 167.61956926207236], {
  icon: nzIcon,
}).bindPopup("Fiordland National Park");

var parks = L.layerGroup([
  yose,
  olym,
  shen,
  neri,
  indu,
  cuva,
  zion,
  yell,
  grte,
  glac,
  badl,
  mora,
  maca,
  crla,
  redw,
  jotr,
  grca,
  gaar,
  havo,
  flnp,
]);
var openTopoMap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      "Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)",
  }
);

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
});

var osmHOT = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      "© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France",
  }
);

function setInitialMapZoom() {
  var viewportWidth = window.innerWidth;

  var mapZoom;

  if (viewportWidth < [651]) {
    mapZoom = [2];
  } else {
    mapZoom = [3];
  }

  return mapZoom;
}

var map = L.map("map", {
  center: [40.01224336270498, -97.76226241579424],
  zoom: setInitialMapZoom(),
  layers: [osm, cities],
  worldCopyJump: true,
});

window.addEventListener("resize", function (event) {
  // get the width of the screen after the resize event
  var width = document.documentElement.clientWidth;
  // tablets are between 768 and 922 pixels wide
  // phones are less than 768 pixels wide
  if (width < 650) {
    // set the zoom level to 10
    map.setZoom(3);
  } else {
    // set the zoom level to 8
    map.setZoom(4);
  }
});

var baseMaps = {
  OpenStreetMap: osm,
  "OpenStreetMap.HOT": osmHOT,
};

var overlayMaps = {
  Cities: cities,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");
layerControl.addOverlay(skiSlopes, "Ski Slopes");


map.addLayer(parks);
map.addLayer(skiSlopes);
