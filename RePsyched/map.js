// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
          this.parentNode.removeChild(this);
      }
    };
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3dlbmRhIiwiYSI6ImNra251cHM5cjJ0M2cydm43b3NnNDI4bjkifQ.cs--hOI7_KkZvWQU02C4NQ';
 
 let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [13.31, 52.50],
  zoom: 12
});

  let stores = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.32056, 52.48328]
        },
        "properties": {
          "address": "Am Volkspark 85",
          "city": "10715 Berlin",
          "crossStreet": "Am Volkspark / Blissestr."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.3139, 52.47588]
        },
        "properties": {
          "address": "Aßmannshauser Str. 17",
          "city": "14197 Berlin",
          "crossStreet": "Aßmannshauser Str. 17"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.30819, 52.49537]
        },
        "properties": {
          "address": "Ballenstedter Str. 2",
          "city": "10709 Berlin",
          "crossStreet": "Ballenstedter Str. 2 / Brandenburgische Str."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.31376, 52.48393]
        },
        "properties": {
          "address": "Barstr. 42",
          "city": "10713 Berlin",
          "crossStreet": "Barstr. / Mannheimer Str. (Barbrücke)"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.28279,	52.4814]
        },
        "properties": {
          "address": "Berkaer Str. 27",
          "city": "14193 Berlin",
          "crossStreet": "Berkaer Str. / Karlsbader Str."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.30691,	52.48819]
        },
        "properties": {
          "address": "Berliner Str. 80",
          "city": "10713 Berlin",
          "crossStreet": "Berliner Str. 80 / Hohenzollerndamm"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.27868,	52.47467]
        },
        "properties": {
          "address": "Bernadottestr. 17",
          "city": "14195 Berlin",
          "crossStreet": "Clayallee / Messelstr. / Bernadottestr. 17"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.28254,	52.47623]
        },
        "properties": {
          "address": "Betty-Hirsch-Platz",
          "city": "14199 Berlin",
          "crossStreet": "Hundekehleplatz / Hundekehlestr."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.30327,	52.51112]
        },
        "properties": {
          "address": "Bismarckstr. 78",
          "city": "10627 Berlin",
          "crossStreet": "Bismarckstr. 78 / Rückertstr."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.31282,	52.51216]
        },
        "properties": {
          "address": "Bismarckstr. 20",
          "city": "10627 Berlin",
          "crossStreet": "Bismarckstr. 20 across from Zauritzweg"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.26248,	52.52109]
        },
        "properties": {
          "address": "Bolivarallee 23",
          "city": "14050 Berlin",
          "crossStreet": "Spandauer Damm / Bolivarallee 23 - 25"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.30251,	52.52701]
        },
        "properties": {
          "address": "Brahestr. 6",
          "city": "10589 Berlin",
          "crossStreet": "Brahestr. 6 - 7 / Sportplatz"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.31947,	52.48725]
        },
        "properties": {
          "address": "Brandenburgische Str. 1",
          "city": "10713 Berlin",
          "crossStreet": "Brandenburgische Str. 1 - 2 / Sigmaringer Str."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.33178,	52.48756]
        },
        "properties": {
          "address": "Bundesallee 180",
          "city": "10715 Berlin",
          "crossStreet": "Bundesallee 180 / Berliner Str.10 in front of Eurogida"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.29682,	52.50132]
        },
        "properties": {
          "address": "Damaschkestr. 35",
          "city": "10711 Berlin",
          "crossStreet": "Damaschkestr. 35 / Joachim-Friedrich-Str. 29"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.31466,	52.52164]
        },
        "properties": {
          "address": "Darwinstr. 1-5",
          "city": "10589 Berlin",
          "crossStreet": "Darwinstr. 6 "
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.25976,	52.48983]
        },
        "properties": {
          "address": "Dauerwaldweg 1",
          "city": "14055 Berlin",
          "crossStreet": "Dauerwaldweg 1 / Falterweg"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.30871,	52.46792]
        },
        "properties": {
          "address": "Dillenburger Str. 4",
          "city": "14199 Berlin",
          "crossStreet": "Dillenburger Str. 4 / Schlangenbader Str. / Close to Breitenbachplatz 4"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.33358,	52.4798]
        },
        "properties": {
          "address": "Durlacher Str. 15",
          "city": "10715 Berlin",
          "crossStreet": "Durlacher Str. across from Nr. 15"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.32363,	52.49522]
        },
        "properties": {
          "address": "Düsseldorfer Str. 74",
          "city": "10719 Berlin",
          "crossStreet": "Düsseldorfer Str. / Uhlandstr. in front of Nah und gut (supermarket)"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.30514,	52.49699]
        },
        "properties": {
          "address": "Eisenzahn Straße 60",
          "city": "10709 Berlin",
          "crossStreet": "Eisenzahn Straße across of nr. 60"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.27193,	52.49119]
        },
        "properties": {
          "address": "Erdenerstr. 12",
          "city": "14193 Berlin",
          "crossStreet": "Erdener Straße / Trabener Straße"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.29631,	52.48119]
        },
        "properties": {
          "address": "Forckenbeckstr. 37",
          "city": "14199 Berlin",
          "crossStreet": "Forckenbeckstr. 37 / Cunostr."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [13.29634,	52.48376]
        },
        "properties": {
          "address": "Fritz-Wildung-Str. 26",
          "city": "14199 Berlin",
          "crossStreet": "Fritz-Wildung-Str. 26 / Cunostr."
        }
      },
    ]
  };
  
 
  stores.features.forEach(function(store, i){
    store.properties.id = i;
  });


  map.on('load', function (e) {
    map.addSource("places", {
      "type": "geojson",
      "data": stores
    });

    buildLocationList(stores);
    addMarkers();
  });


  function addMarkers() {
    stores.features.forEach(function(marker) {
      let el = document.createElement('div');
      el.id = "marker-" + marker.properties.id;
      el.className = 'marker';
      
     
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      el.addEventListener('click', function(e){
       
        flyToStore(marker);
        
        createPopUp(marker);
        
        let activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        let listing = document.getElementById('listing-' + marker.properties.id);
        listing.classList.add('active');
      });
    });
  }

 
  function buildLocationList(data) {
    data.features.forEach(function(store, i){
     
      let prop = store.properties;

      let listings = document.getElementById('listings');
      let listing = listings.appendChild(document.createElement('div'));
      listing.id = "listing-" + prop.id;
      listing.className = 'item';

      let link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = "link-" + prop.id;
      link.innerHTML = prop.address;

      let details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.city;

     
      link.addEventListener('click', function(e){
        for (let i=0; i < data.features.length; i++) {
          if (this.id === "link-" + data.features[i].properties.id) {
            let clickedListing = data.features[i];
            flyToStore(clickedListing);
            createPopUp(clickedListing);
          }
        }
        let activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    });
  }
  function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }
  function createPopUp(currentFeature) {
    let popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    let popup = new mapboxgl.Popup({closeOnClick: false})
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Green Bin</h3>' +
        '<h4>' + currentFeature.properties.crossStreet+ '</h4>')
      .addTo(map);
  }
map.addControl(new mapboxgl.NavigationControl());