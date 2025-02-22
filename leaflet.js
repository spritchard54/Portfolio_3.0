var npsIcon = L.icon({
    iconUrl: 'images/nps.png',
    iconSize:     [50,45], // size of the icon
})


var philadelphia = L.marker([39.95, -75.16]).bindPopup('This is Philadelphia, PA.');

var cities = L.layerGroup([philadelphia]);

var yose = L.marker([37.86, -119.53],{icon: npsIcon}).bindPopup('<b>Yosemite National</b> Park<a href="yose.html"><br>[Details...]</a>'),
    olym = L.marker([47.79, -123.61],{icon: npsIcon}).bindPopup('Olympic National Park.');
    shen = L.marker([38.47, -78.45],{icon: npsIcon}).bindPopup('Shenandoah National Park.');
    neri = L.marker([37.87, -81.05],{icon: npsIcon}).bindPopup('New River Gorge National Park.');
    indu = L.marker([41.65, -87.05],{icon: npsIcon}).bindPopup('Indiana Dunes National Park.');
    cuva = L.marker([41.28, -81.56],{icon: npsIcon}).bindPopup('Cuyahoga Valley National Park.');
    zion = L.marker([37.29, -113.02],{icon: npsIcon}).bindPopup('Zion National Park.');
    yell = L.marker([44.59, -110.56],{icon: npsIcon}).bindPopup('Yellowstone National Park.');
    grte = L.marker([43.77, -110.73],{icon: npsIcon}).bindPopup('Grand Teton National Park.');
    glac = L.marker([48.75, -113.78],{icon: npsIcon}).bindPopup('Glacier National Park.');
    badl = L.marker([43.85, -102.33],{icon: npsIcon}).bindPopup('Badlands National Park.');
    mora = L.marker([46.86, -121.69],{icon: npsIcon}).bindPopup('Mount Ranier National Park.');
    maca = L.marker([37.18, -86.10],{icon: npsIcon}).bindPopup('Mammoth Cave National Park.');
    crla = L.marker([42.92, -122.11],{icon: npsIcon}).bindPopup('Crater Lake National Park.');
    redw = L.marker([41.39, -124.04],{icon: npsIcon}).bindPopup('Redwood National Park.');
    jotr = L.marker([33.86, -115.91],{icon: npsIcon}).bindPopup('Joshua Tree National Park.');
    grca = L.marker([36.26, -112.35],{icon: npsIcon}).bindPopup('Grand Canyon National Park.');
    gaar = L.marker([38.62, -90.18],{icon: npsIcon}).bindPopup('Gateway Arch National Park.');
    

var parks = L.layerGroup([yose, olym, shen, neri, indu, cuva, zion, yell, grte, glac, badl, mora, maca, crla, redw, jotr, grca, gaar]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});


var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [40.01224336270498, -97.76226241579424],
    zoom: 4,
    layers: [osm, cities]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
    "Cities": cities,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);



layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");

map.addLayer(parks);