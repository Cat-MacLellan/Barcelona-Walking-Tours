function initMap() {
    var map = new google.maps.Map(document.getElementById("gaudiMap"), {
        zoom: 12,
        center: {
            lat: 41.403706,
            lng: 2.173504
        }
    });

    var locations = [{
            lat: 41.403706,
            lng: 2.173504
        }, {
            lat: 41.4145,
            lng: 2.1527
    }];
var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,

    });
});
var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});
}
