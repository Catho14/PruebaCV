function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 20.083593137153297, lng:-98.77376481712376 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Pachuca, Hidalgo' // Title Location
    });
}