let map;
let markers = [];
let infoWindow;

let locations = [{
        tour: 'gaudi',
        latlng: { lat: 41.403706, lng: 2.173504 },
    },
    {
        tour: 'gaudi',
        latlng: { lat: 41.4145, lng: 2.1527 },
    },
    {
        tour: 'gothic',
        latlng: { lat: 41.3839, lng: 2.1821 },
    },
    {
        tour: 'gothic',
        latlng: { lat: 41.3840, lng: 2.1762 },
    },
    {
        tour: 'culture',
        latlng: { lat: 41.3744, lng: 2.1696 },
    },
    {
        tour: 'culture',
        latlng: { lat: 41.3876, lng: 2.1753 },
    },
    {
        tour: 'transport',
        latlng: { lat: 41.3840, lng: 2.1865 },
    },
    {
        tour: 'transport',
        latlng: { lat: 41.370556, lng: 2.170556 },
    },
    {
        tour: 'thefuture',
        latlng: { lat: 41.402472, lng: 2.194556 },
    },
    {
        tour: 'thefuture',
        latlng: { lat: 41.411492, lng: 2.228094 },
    }
];


function initMap() {
    let options = {
        center: new google.maps.LatLng(41.3851, 2.1734),
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map'), options);
    infoWindow = new google.maps.InfoWindow();



    const addmarker = function(args) {
        let mkr = new google.maps.Marker({
            position: args.latlng,
            map: map

        });
        if (args.hasOwnProperty('icon')) mkr.setIcon(args.icon);
        if (args.hasOwnProperty('name')) mkr.name = args.name;
        if (args.hasOwnProperty('content')) mkr.content = args.content;

        google.maps.event.addListener(mkr, 'click', clickhandler);
        return mkr;
    };
    const clickhandler = function(e) {
        infoWindow.open(map, this);
        infoWindow.setContent(this.content);
    };
    const clearmarkers = function() {
        markers.forEach(mkr => {
            mkr.setMap(null);
        });
    };

    Array.prototype.slice.call(document.querySelectorAll('button[type="radio"][name="tour"]')).forEach(function(input) {
        input.addEventListener('click', function(e) {
            if (this.value) {
                /* clear any markers added to the map already */
                clearmarkers();

                /* only show those that qualify based upon selected tour */
                locations.forEach(obj => {
                    if (obj.tour == this.value) markers.push(addmarker.call(this, obj));
                });
            }
        });
    });
}
