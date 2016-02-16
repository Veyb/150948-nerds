function initMap() {
  var mapOptions = {
    zoom: 17,
    center: {lat: 59.939203, lng: 30.319922},
    disableDefaultUI: true,
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById("map"),
       mapOptions);

  var image = 'img/map-marker.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.938695, lng: 30.323705},
    map: map,
    icon: image
  });
}
