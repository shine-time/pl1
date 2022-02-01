function initMap() {
    //assigns map to a new Map object. The Map() function is a constructor.
    //The script references the HTML map div element and inserts the map
    //https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      /*center on Brownsville Bar Park*/
      center: { lat:  49.205289036624684, lng: -122.89254597188976 }, 
      zoom: 10,
      mapTypeId: "satellite",
    }) ;
    , 
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
            origin: {} 

        })
    }