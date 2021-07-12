// Initialize and add the map
function initMap(mapContainer, longitude, latitude) {
    // The location of restaurant or store
    const coords = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    // The map, centered at coords
    const map = new google.maps.Map(mapContainer.find('div[class="map"]')[0], {
    zoom: 14,
    center: coords,
    });
    // The marker, positioned at coords
    const marker = new google.maps.Marker({
    position: coords,
    map: map,
    });
}

// JQuery that's being run when the page loads
$( document ).ready(function() {
  $('div[class="map-container"]').click(function(e) {
    // add map marker!
    var longitude = $(this).attr('lng');
    var latitude = $(this).attr('lat');
    initMap($(this), longitude, latitude);
  });
});