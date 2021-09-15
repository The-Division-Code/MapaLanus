window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});

function onEachFeature(feature, layer) {
    
    // does this feature have a property named popupContent?
  if (feature.properties) {
        layer.bindPopup(`<h3>${feature.properties.name}</h3><span>Dirección: ${feature.properties.address} ${feature.properties.height}</span>`);
  }
}
// var quilmes = L.marker([-34.730302,  -58.268868]).bindPopup('This is Quilmes, CO.'),
//     lomas    = L.marker([-34.7572582, -58.4026638]).bindPopup('This is Lomas, CO.'),
//     avellaneda    = L.marker([-34.6648394, -58.3628061]).bindPopup('This is Avellaneda, CO.')

let polygon_lanus_url =  ("/data/division_politica.geojson");
let districts_url = ("/data/barrios.geojson");
let electorals_circuit_url = ("/data/circuitos_electorales.geojson")
let club_url = "https://lanusinteligente.divisioncode.com.ar/api/club";
let education_url = "https://lanusinteligente.divisioncode.com.ar/api/education";
let health_url = "https://lanusinteligente.divisioncode.com.ar/api/health";
let security_url = "https://lanusinteligente.divisioncode.com.ar/api/security";
let transport_url = "https://lanusinteligente.divisioncode.com.ar/api/transport";

//Si deja de funcionar probar con esto
// async function setMap(healthData) {

async function setMap() {
  let loader = `<div class="loader-wrapper"></div>`;
  document.getElementById('map').innerHTML = loader;
  var map = L.map('map', {
    center: [-34.7033363,-58.3953235], 
    zoom: 13, 
  })
  //   var healthIcon = L.icon({
  //     iconUrl: 'health.png',
  //     iconSize: [38, 95],
  //     iconAnchor: [22, 94],
  //     shadowSize: [68, 95],
  //     shadowAnchor: [22, 94]
  // });

    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        minZoom: 10,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'sk.eyJ1Ijoibmljb2NhcHV0b2NhaSIsImEiOiJja3RhazVpbzcwMzJhMndvNmZpNGJtbWhrIn0.YV17IMSMs1UQFzyqqhRIdA'
    }).addTo(map);

  // var cities = L.layerGroup([quilmes, lomas, avellaneda]);
  var fClub = fetch(club_url);
  var fEducation = fetch(education_url);
  var fHealth = fetch(health_url)
  var fSecurity = fetch(security_url);
  var fTransport = fetch(transport_url);
  var fPolygonLanus = fetch(polygon_lanus_url)
  var fDistricts = fetch(districts_url)
  var fCircuit = fetch(electorals_circuit_url)

  var arr = Promise.all([fClub,fEducation,fHealth,fSecurity,fTransport, fPolygonLanus, fDistricts,fCircuit])
  .then(async([fcl,fed,fhe,fse,ftr,fpl,fdt,fci]) =>{
    var fc = await fcl.json();
    var fe = await fed.json();
    var fh = await fhe.json();
    var fs = await fse.json();
    var ft = await ftr.json();
    var fp = await fpl.json();
    var fd = await fdt.json();
    var fcir = await fci.json()
    return[fc,fe,fh,fs,ft, fp, fd, fcir]
  })
  .then(([clubData, educationData, healthData, securityData, transportData, polygonData, districtData, circuitData]) =>{
    
    var club = L.geoJSON(clubData,{
      data: clubData,
      onEachFeature:onEachFeature
    }).addTo(map);
    
    var education = L.geoJSON(educationData,{
      data: educationData,
      onEachFeature:onEachFeature
    }).addTo(map);

    var health= L.geoJSON(healthData, {
      data: healthData,
      onEachFeature: onEachFeature,
    }).addTo(map);
    
    var security = L.geoJSON(securityData,{
      data: securityData,
      onEachFeature: onEachFeature
    }).addTo(map);

    var transport = L.geoJSON(transportData,{
      data: transportData,
      onEachFeature: onEachFeature
    }).addTo(map);

    var polygonLanus = L.geoJSON(polygonData,{
        data: polygonData,
        color:'red' , 
        fillColor: 'silver', 
        fillOpacity:0.3 , 
        weight:3}).addTo(map);
        
    var districtsLanus = L.geoJSON(districtData,{
      data: districtData
    }).addTo(map);

    var circuitLanus = L.geoJSON(circuitData,{
      data: circuitData
    }).addTo(map)
    
    var overLayers ={
      "Clubes" : club,
      "Educacion" : education,
      "Salud": health,
      "Seguridad" : security,
      "Transporte" : transport
    };

    var baseMap ={
      "Polígono" : polygonLanus,
      "Barrios" : districtsLanus,
      "Circuitos Electorales": circuitLanus
    }
    L.control.layers(overLayers, baseMap).addTo(map)
  })
  return arr

}
window.onload = setMap()