function initMap() {
    //assigns map to a new Map object. The Map() function is a constructor.
    //The script references the HTML map div element and inserts the map
    //https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      /*center on Brownsville Bar Park*/
      center: { lat: 49.19766565752146, lng: -122.84087004710894 }, 
      zoom: 15,
      mapTypeId: "terrain",
    }) ;
     
    directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = document.getElementById("mode").value;

    directionsService
        .route({
            origin: {lat: 49.20458291463513, lng: -122.87405956729776}, //Scott Road Skytrain Station
            destination: {lat: 49.19913928022542, lng: -122.8129474305355}, //A1 Donair
            waypoints: [
                {location: {lat: 49.20523768324064, lng: -122.89255171704465}} //Beach
            ], 
        
    travelMode: google.maps.travelMode[Driving],
    })
    .then((response) => {
        directionsRenderer,setDirections(selectedMode);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
  }