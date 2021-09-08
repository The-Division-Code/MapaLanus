// require('dotenv').config()
const map = L.map('map')
const paragraph = document.getElementById('paragraph')
const geojson = {
    "type": "FeatureCollection",
    "name": "Instituciones de Salud",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Luís A. Máspero",
          "public": true,
          "dependence": "Municipal",
          "address": "Dr. Luís A. Máspero",
          "height": "75"
        },
        "geometry": { "type": "Point", "coordinates": [-58.3957713, -34.7233359] }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Dr. Nicolás Natiello",
          "public": true,
          "dependence": "Municipal",
          "address": "Domingo Martinto",
          "height": "1198"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.341508930007336, -34.731880335748755]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Monte Chingolo",
          "public": true,
          "dependence": "Municipal",
          "address": "Blanco Encalada",
          "height": "4393"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.34725557796848, -34.72317726119389]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Lanús Oeste",
          "public": true,
          "dependence": "Municipal",
          "address": "Av. 25 de Mayo",
          "height": "707"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.40222421359328, -34.7066285360019]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Miranda Norgreen",
          "public": true,
          "dependence": "Municipal",
          "address": "Coronel Murature",
          "height": "4114"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.43248188990433, -34.699167227905605]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Medicina Preventiva",
          "public": true,
          "dependence": "Municipal",
          "address": "Sitio de Montevideo",
          "height": "1862"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.381433478806464, -34.71145191267291]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Gral San Martin",
          "public": true,
          "dependence": "Municipal",
          "address": "Manuel Corvalan",
          "height": "2107"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.359573914311355, -34.731480842252054]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 4 Cosme Argerich",
          "public": true,
          "dependence": "Municipal",
          "address": "General Alvear",
          "height": "4493"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.36203858148272, -34.73779256413436]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 10 Villa Obrera",
          "public": true,
          "dependence": "Municipal",
          "address": "Eva Perón",
          "height": "3168"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.365063072756705, -34.71964448905928]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 14 Barrio Los Ceibos",
          "public": true,
          "dependence": "Municipal",
          "address": "Centenario Uruguayo",
          "height": "2898"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.37337675012812, -34.731751441984635]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 20 Villa Independencia",
          "public": true,
          "dependence": "Municipal",
          "address": "Manuel Corvalan",
          "height": "3168"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.36862184709313, -34.73950932079044]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Villa Barceló",
          "public": true,
          "dependence": "Municipal",
          "address": "Felix Alzaga",
          "height": "4119"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.36451812934693, -34.73473942353314]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 46",
          "public": true,
          "dependence": "Municipal",
          "address": "Luís Chorroarin",
          "height": "1018"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.348228432750595, -34.725638155481704]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Gerli",
          "public": true,
          "dependence": "Municipal",
          "address": "Coronel Burelas",
          "height": "2035"
        },
        "geometry": { "type": "Point", "coordinates": [-58.3663876, -34.7016773] }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 48 Villa Porá",
          "public": true,
          "dependence": "Municipal",
          "address": "Tte. Coronel Bueras",
          "height": "3096"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.358064696637626, -34.71037095153304]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 45 Villa Eslovena",
          "public": true,
          "dependence": "Municipal",
          "address": "Colon",
          "height": "2475"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.419920248503345, -34.71737548530704]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Dardo Rocha",
          "public": true,
          "dependence": "Municipal",
          "address": "Dardo Rocha ",
          "height": "3582"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.40946483735108, -34.719500356860905]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 9 El Triángulo",
          "public": true,
          "dependence": "Municipal",
          "address": "Coronel Osorio",
          "height": "2233"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.425365230174805, -34.678090743956474]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Villa Jardín",
          "public": true,
          "dependence": "Municipal",
          "address": "Emilio Castro",
          "height": "3826"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.43189026525978, -34.67693794755654]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad Sanitaria Valentín Alsina",
          "public": true,
          "dependence": "Municipal",
          "address": "Paso de Burgos",
          "height": "777"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.40998596300496, -34.671578271471205]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 22 La Maquinita",
          "public": true,
          "dependence": "Municipal",
          "address": "Presidente Raúl Alfonsín ",
          "height": "2100"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.371516855506286, -34.7066175966067]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Ramón Carrillo",
          "public": true,
          "dependence": "Municipal",
          "address": "Marco Avellaneda",
          "height": "4860"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.43201937865193, -34.6927029204881]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Arturo Illía",
          "public": true,
          "dependence": "Municipal",
          "address": "Emilio Castro",
          "height": "2792"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.423571298295954, -34.68819469438855]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Juan Giardino",
          "public": true,
          "dependence": "Municipal",
          "address": "Molinedo",
          "height": "3114"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.43411274339787, -34.68513345061614]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 39 Villa Esperanza",
          "public": true,
          "dependence": "Municipal",
          "address": "Gobernador Ugarte",
          "height": "3925"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.41498188338117, -34.7201884743192]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Eva Perón",
          "public": true,
          "dependence": "Municipal",
          "address": "Pasaje Eva Perón",
          "height": "248"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.439149930781376, -34.69615730381363]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Centro de Salud Nro 18 26 de Abril",
          "public": true,
          "dependence": "Municipal",
          "address": "Av. Gral. Pinto",
          "height": "5140"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.34832284014543, -34.73799999566271]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unidad de Pronta atención (UPA)",
          "public": true,
          "dependence": "Provincial",
          "address": "Osorio ",
          "height": "3000"
        },
        "geometry": { "type": "Point", "coordinates": [-58.435055, -34.6807824] }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hospital interzonal de agudos Evita",
          "public": true,
          "dependence": "Provincial",
          "address": "Río de Janeiro",
          "height": "1910"
        },
        "geometry": { "type": "Point", "coordinates": [-58.3998531, -34.6963322] }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hospital Zonal General Narciso Lopez",
          "public": true,
          "dependence": "Provincial",
          "address": "O ́Higgins",
          "height": "1333"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.38296764173165, -34.70423069287048]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hospital Local General de Agudos Dr. Arturo Melo",
          "public": true,
          "dependence": "Provincial",
          "address": "Villa Luján",
          "height": "3050"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.385230829691, -34.72581556137689]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hospital Zonal Especializado en Oncología de Lanús",
          "public": true,
          "dependence": "Provincial",
          "address": "Pringles",
          "height": "1257"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-58.38264167900803, -34.703424827121545]
        }
      }
    ]
  }
  const polygonLanus ={
    "type": "FeatureCollection",
    "name": "lanus",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "ogc_fid": 1,
          "nombre": "Lanus",
          "partido": 25,
          "nomencla": "025",
          "zona": 7,
          "fecha": "2011-09-12 00:00:00",
          "islas": 0,
          "sup_km2": 50.3
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
              [
                [-58.396605033106297, -34.671103199118484],
                [-58.40322237815851, -34.666000877890099],
                [-58.406457907048384, -34.663489848868217],
                [-58.402509312947309, -34.659795167143379],
                [-58.403248030404271, -34.659794376356039],
                [-58.403945190743457, -34.659805135182495],
                [-58.404409205369127, -34.659887207852179],
                [-58.405245312592236, -34.660052806494654],
                [-58.406126852447002, -34.660245571871364],
                [-58.406668391375547, -34.660295254496191],
                [-58.407264841818211, -34.660307176453017],
                [-58.407702807274703, -34.660294679987217],
                [-58.408273332125553, -34.660187657322155],
                [-58.408664445722387, -34.660013907014239],
                [-58.408937343567615, -34.659913304513076],
                [-58.409353817879321, -34.659742617998262],
                [-58.409778075045686, -34.659508200243103],
                [-58.410492576906442, -34.659235018640778],
                [-58.411581983659445, -34.658911522944145],
                [-58.412507281253838, -34.658791064104626],
                [-58.4130457147496, -34.658764386877614],
                [-58.413583979569189, -34.658819472193585],
                [-58.414349287424422, -34.658938513109696],
                [-58.415745147240088, -34.659323110800905],
                [-58.417297787651741, -34.659776927325815],
                [-58.418245801901726, -34.66009135246312],
                [-58.418892918906444, -34.660253590600703],
                [-58.420023247954319, -34.660595491492749],
                [-58.420977596510461, -34.660918064547936],
                [-58.422012546832633, -34.661487646895935],
                [-58.422762305697525, -34.661731823661981],
                [-58.423232383671305, -34.661959173944524],
                [-58.424167487093264, -34.66255888898948],
                [-58.425011170061865, -34.663118948265144],
                [-58.425229065647443, -34.663283154116698],
                [-58.425407497949891, -34.66342139221058],
                [-58.426086564652685, -34.664084432999189],
                [-58.427078048781532, -34.665027991973915],
                [-58.427439816708699, -34.66541664643664],
                [-58.427989023533058, -34.666226376687646],
                [-58.428593660488282, -34.666961126090129],
                [-58.430542799406894, -34.669282804567253],
                [-58.431249988255303, -34.670202898715985],
                [-58.432382490569729, -34.671505763973606],
                [-58.434613785839673, -34.674123326389719],
                [-58.435732910984939, -34.675447189351289],
                [-58.439050898387023, -34.679380824534697],
                [-58.439179383781187, -34.67953391072858],
                [-58.439323313603005, -34.679700651524072],
                [-58.439372617033591, -34.679760312160298],
                [-58.439423403629654, -34.679819784949913],
                [-58.439423667894232, -34.679820097565219],
                [-58.439479309591697, -34.67988631185743],
                [-58.439662642427557, -34.680101700424316],
                [-58.439834953142189, -34.680306163291213],
                [-58.439849762359799, -34.680326225870608],
                [-58.440031151408881, -34.680535835577743],
                [-58.440255475852751, -34.680800277859127],
                [-58.440745015114906, -34.68137712579739],
                [-58.441339591710502, -34.682084351896172],
                [-58.441803844602909, -34.682641202415255],
                [-58.446976910329852, -34.688722297741677],
                [-58.437423424917249, -34.701251655314294],
                [-58.432549007828982, -34.707562405513521],
                [-58.430548421639578, -34.710205070378414],
                [-58.426992132590335, -34.714795079095708],
                [-58.424548543928267, -34.717991329634678],
                [-58.417970279309699, -34.72653388065946],
                [-58.413366044231445, -34.732551409048334],
                [-58.413172421217233, -34.732812930140852],
                [-58.394687681202122, -34.735751990123255],
                [-58.390155144064302, -34.736529845342766],
                [-58.386141829786105, -34.73710725768899],
                [-58.380085627356024, -34.738830204804408],
                [-58.37498311149011, -34.742983687275135],
                [-58.371888079916609, -34.741327638474317],
                [-58.371801438817116, -34.741427512857996],
                [-58.370239857032253, -34.742665458844677],
                [-58.366792166097007, -34.7454406831773],
                [-58.36666892335613, -34.745539332893969],
                [-58.364671094821574, -34.744509600713187],
                [-58.361991182629325, -34.743130619572739],
                [-58.360181243505579, -34.742191513548654],
                [-58.356105780443173, -34.740091900372477],
                [-58.352923190665798, -34.739982729377438],
                [-58.34747534163386, -34.739803813793998],
                [-58.345296968735248, -34.737818828282911],
                [-58.344261118274986, -34.736877905907392],
                [-58.343891215408284, -34.736543796649414],
                [-58.343241189437542, -34.735957646460932],
                [-58.342850516371904, -34.735597099658101],
                [-58.342238409325773, -34.735038244857179],
                [-58.341786587030469, -34.734623941738235],
                [-58.341185773322877, -34.734078799840894],
                [-58.338407467039644, -34.73155585441517],
                [-58.333418671045351, -34.727012184945536],
                [-58.345469748564199, -34.716517828045603],
                [-58.350828527917649, -34.711921117994919],
                [-58.363920391282065, -34.700525603796876],
                [-58.369970902429181, -34.695338202984985],
                [-58.378103475190393, -34.688269985023851],
                [-58.379600892100719, -34.68952232263613],
                [-58.382478309293965, -34.687330003103725],
                [-58.384525244034492, -34.685762849080312],
                [-58.386351447222772, -34.684456616477654],
                [-58.3908478770134, -34.680767341606874],
                [-58.391915951948945, -34.679780672267462],
                [-58.392017452991119, -34.679731725591004],
                [-58.39350017439213, -34.678251094582656],
                [-58.393667639135316, -34.678077613192677],
                [-58.397054846985093, -34.674561024730558],
                [-58.394685586208738, -34.67246544965748],
                [-58.396500996558501, -34.671186064765784],
                [-58.396605033106297, -34.671103199118484]
              ]
            ]
          ]
        }
      }
    ]
  }
  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(`<h3>${feature.properties.name}</h3><span>Dirección: ${feature.properties.address} ${feature.properties.height}</span>`);
        // layer.bindPopup(feature.properties.dependence)
        // layer.bindPopup(feature.properties.address)
        // layer.bindPopup(feature.properties.height)
    }
}



function setMap(){

    

    map.setView([-34.7033363,-58.3953235], 13);
    L.geoJSON(polygonLanus,{color:'red' , fillColor: 'silver', fillOpacity:0.3 , weight:8}).addTo(map);
    L.geoJSON(geojson).addTo(map)
    L.geoJSON(geojson, {
        onEachFeature: onEachFeature
    }).addTo(map);
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
}

window.onload = setMap()
