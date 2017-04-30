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
/*Настройки первого слайдера*/

$(document).ready(function() {
  $("#owl-example").owlCarousel({
    items : 3,
    autoPlay : false,
    navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    pagination : false,
    paginationNumbers: false,
    baseClass : "owl-carousel",
    theme : "owl-theme",
    autoHeight : false,
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true
  });

});
/*Настройки 2 слайдера*/
$(document).ready(function() {

  $("#owl-example2").owlCarousel({
    items : 1,
    autoPlay : false,
    navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    pagination : false,
    paginationNumbers: false,
    baseClass : "owl-carousel",
    theme : "owl-theme",
    autoHeight : false,
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true
  });

});
/*табы*/
$(function(){
$('.flat__tabs__li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.flat__tabs .content__tab').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.flat__tabs .content__tab').css('display', 'none').eq(index).css('display', 'block');
})
    $('.flat__tabs__li:first').addClass('active');
    $('.flat__tabs .content__tab:first').css('display', 'block');

});
$(function(){
    $('.docs__tab__title__li').not('.active').click(function(){
        var index = $(this).index();
        var content = $('.docs__tab__content').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.docs__tab__content').css('display', 'none').eq(index).css('display', 'block');
    })
        $('.docs__tab__title__li:first').addClass('active');
        $('.docs__tab__content:first').css('display', 'block');
    });
/*Радиокнопки*/
$(document).ready(function () {
    $('.flats__label').click(function() {
        $('.activeFlats').removeClass("activeFlats");
        $(this).addClass("activeFlats");
    });
});
$(document).ready(function() {
    $('#single').click(function() {
        $('.flat__single').removeClass('g-invisible');
        $('.flat__double').addClass('g-invisible');
        $('.flat__triple').addClass('g-invisible');
    });
    $('#double').click(function() {
        $('.flat__single').addClass('g-invisible');
        $('.flat__double').removeClass('g-invisible');
        $('.flat__triple').addClass('g-invisible');
    });
    $('#triple').click(function() {
        $('.flat__single').addClass('g-invisible');
        $('.flat__double').addClass('g-invisible');
        $('.flat__triple').removeClass('g-invisible');
    });
    $('#all').click(function() {
        $('.flat__single').removeClass('g-invisible');
        $('.flat__double').removeClass('g-invisible');
        $('.flat__triple').removeClass('g-invisible');
    });
});
/*Модальное окно*/
$(document).ready(function() {
    $('.popup .close__window, .overlay').click(function (){
    $('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
    });
    $('a.open__window').click(function (e){
    $('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
    e.preventDefault();
    });
});

