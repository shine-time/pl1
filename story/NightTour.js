function initMap() {
    //assigns map to a new Map object. The Map() function is a constructor.
    //The script references the HTML map div element and inserts the map
    //https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      /*center on Brownsville Bar Park*/
      center: { lat: 49.197, lng: -122.840 }, 
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
            origin: {lat: 49.204, lng: -122.874}, //Scott Road Skytrain Station
            destination: {lat: 49.199, lng: -122.812}, //A1 Donair
            waypoints: [
                {location: {lat: 49.205, lng: -122.892}} //Beach
