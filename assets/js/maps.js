let map;
let markers = [];
let infoWindow;

let locations = [{
        type: 'gaudi',
        latlng: { lat: 41.403706, lng: 2.173504 },
        content: 'Sangrada'
    },
    {
        type: 'gaudi',
        latlng: { lat: 41.4145, lng: 2.1527 },
        content: 'parc'
    },
    {
        type: 'gothic',
        latlng: { lat: 41.3839, lng: 2.1821 },
        content: 'basilica'
    },
    {
        type: 'gothic',
        latlng: { lat: 41.3840, lng: 2.1762 },
        content: 'cathedral'
    },
    {
        type: 'culture',
        latlng: { lat: 41.3744, lng: 2.1696 },
        content: 'musica'
    },
    {
        type: 'culture',
        latlng: { lat: 41.3876, lng: 2.1753 },
        content: 'apollo'
    },
    {
        type: 'transport',
        latlng: { lat: 41.3840, lng: 2.1865 },
        content: 'station'
    },
    {
        type: 'transport',
        latlng: { lat: 41.370556, lng: 2.170556 },
        content: 'cable car'
    },
    {
        type: 'thefuture',
        latlng: { lat: 41.402472, lng: 2.194556 },
        content: 'MTC'
    },
    {
        type: 'thefuture',
        latlng: { lat: 41.411492, lng: 2.228094 },
        content: 'power station'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.527473, lng: 2.310703 }, 
        content: 'Mas Salagros'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.391071, lng: 2.141721},  
        content: 'Melia Barcelona Sarria'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.422626, lng: 2.097249 }, 
        content: 'inout hostel barcelona'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.398971, lng: 2.188528 }, 
        content: 'Twentytu Hostel'
    },
    {
        type: 'restaurant',
        latlng: { lat: 41.388846, lng: 2.158991 }, 
        content: 'Summun Restaurant and Bar '
    },
    {
        type: 'restaurant',
        latlng: { lat: 41.381925, lng: 2.183867 }, 
        content: 'The Green Spot'
    },
    {
        type: 'restaurant',
        latlng: { lat: 41.397291, lng: 2.167146 }, 
        content: 'Hammock Juice Station'
    },
    {
        type: 'restaurant',
        latlng: { lat: 41.403693, lng: 2.158258},  
        content: 'Olokuti Gràcia' 
    },
    {
        type: 'restaurant',
        latlng: { lat: 41.402675, lng: 2.152816},  
        content: 'Coshop' 
    },
    {
        type: 'shop',
        latlng: { lat: 41.403975, lng: 2.158258}, 
        content: 'La Besneta' 
    },
    {
        type: 'shop',
        latlng: { lat: 41.402659, lng: 2.158680}, 
        content: 'Sunsais' 
    },
    {
        type: 'shop',
        latlng: { lat: 41.401962, lng: 2.157294},  
        content: 'GreenLifeStyle EcoFashion - Tienda de Ropa Ecológica' 
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

    Array.prototype.slice.call(document.querySelectorAll('button[type="radio"][name="type"]')).forEach(function(input) {
        input.addEventListener('click', function(e) {
            if (this.value) {

                /* clear any markers added to the map already */
                clearmarkers();

                /* only show those that qualify based upon selected type */
                locations.forEach(obj => {
                    if (obj.type == this.value) markers.push(addmarker.call(this, obj));
                });
            }
        });
    });
}
