function initMap() {
    /*assigns map to a new Map object. The Map() function is a constructor.
    The script references the HTML element "map" and inserts the map there*/
    const infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
      /*center on Brownsville Bar Park*/
      center: { lat:  49.205, lng: -122.892 }, 
      zoom: 7,
      mapTypeId: "satellite",
    });
