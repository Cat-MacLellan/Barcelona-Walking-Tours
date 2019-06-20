let map;
let markers = [];
let infoWindow;

let locations = [{
        type: 'gaudi',
        latlng: { lat: 41.403706, lng: 2.173504 },
        content: 'La Sagrada Familia <img class="content-image" src="assets/images/familia.jpg"></img>'
    },
    {
        type: 'gaudi',
        latlng: { lat: 41.4145, lng: 2.1527 },
        content: 'Parc Guell <img class="content-image" src="assets/images/parc_guell.jpg"></img>'
    },
    {
        type: 'gaudi',
        latlng: { lat: 41.391709, lng: 2.164764 },
        content: 'Casa Batllo <img class="content-image" src="assets/images/gaudi.jpg"></img>'
    },
    {
        type: 'gaudi',
        latlng: { lat: 41.395485, lng: 2.161961 },
        content: 'Casa Mila <img class="content-image" src="assets/images/casa_milla.jpg"></img>'
    },
    {
        type: 'gothic',
        latlng: { lat: 41.3839, lng: 2.1821  },
        content: 'Basilica De Santa Maria del Pi <img class="content-image" src="assets/images/santa_maria.jpg"></img>'
    },
    {
        type: 'gothic',
        latlng: { lat: 41.3840, lng: 2.1762 },
        content: 'Cathedral Del Santa Eulaia <img class="content-image" src="assets/images/cathedral.png"></img>'
    },
    {
        type: 'culture',
        latlng: { lat: 41.3744, lng: 2.1696 },
        content: 'Sala Apollo <img class="content-image" src="assets/images/apolo.jpg"></img>'
    },
    {
        type: 'culture',
        latlng: { lat: 41.3876, lng: 2.1753 },
        content: 'Palau De Le Musica Catalana <img class="content-image" src="assets/images/musica.jpg"></img>'
    },
    {
        type: 'transport',
        latlng: { lat: 41.3840, lng: 2.1865 },
        content: 'Barcelona Franca Railway Station <img class="content-image" src="assets/images/station.jpg"></img>'
    },
    {
        type: 'transport',
        latlng: { lat: 41.370556, lng: 2.170556 },
        content: 'Teleferic De Monjuice <img class="content-image" src="assets/images/cable_car.jpg"></img>'
    },
    {
        type: 'thefuture',
        latlng: { lat: 41.402472, lng: 2.194556 },
        content: 'Media TIC <img class="content-image" src="assets/images/mediatic.jpg"></img>'
    },
    {
        type: 'thefuture',
        latlng: { lat: 41.411492, lng: 2.228094 },
        content: 'Photovolatic Power Station  <img class="content-image" src="assets/images/powerstation.jpg"></img>'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.527473, lng: 2.310703 },
        content: 'Mas Salagros'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.391071, lng: 2.141721 },
        content: 'Melia Barcelona Sarria'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.384852, lng: 2.168164 },
        content: 'Hotel Eco Boutique Hostal Grau'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.383466, lng: 2.168485 },
        content: 'Hotel Casa Camper'
    },
    {
        type: 'accomodation',
        latlng: { lat: 41.386251, lng: 2.168332 },
        content: 'hotel pulitzer barcelona'
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
        latlng: { lat: 41.403693, lng: 2.158258 },
        content: 'Olokuti Gràcia'
    },
    {
        type: 'restaurant',
        latlng: { lat: 41.402675, lng: 2.152816 },
        content: 'Coshop'
    },
    {
        type: 'shop',
        latlng: { lat: 41.403975, lng: 2.158258 },
        content: 'La Besneta'
    },
    {
        type: 'shop',
        latlng: { lat: 41.403823, lng: 2.156854 },
        content: 'Gallina de Piel'
    },
    {
        type: 'shop',
        latlng: { lat: 41.404339, lng: 2.156604 },
        content: 'Velvet BCN Moda Sostenible '
    },

    {
        type: 'shop',
        latlng: { lat: 41.402659, lng: 2.158680 },
        content: 'Sunsais'
    },
    {
        type: 'shop',
        latlng: { lat: 41.401962, lng: 2.157294 },
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
