var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.349306, lng: 83.784974},
    scrollwheel: false,
    zoom: 15,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
    },
  });
  var marker = new google.maps.Marker({
    position: {lat: 53.349306, lng: 83.784974},
    map: map,
    title: 'Дом на Комсомольском',
    icon: 'images/house.svg'
  });
  var contentString = '<div>'+'<h1>Дом на Комсомольском</h1>'+'<div>'+'<img src="images/Image 1.png">'+'<p>Очень крутой текст о доме на Комсомольском</p>'+'</div>'+'</div>';
    var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 400
    });
    marker.addListener('click', function() {
          infowindow.open(map, marker);
    });
};