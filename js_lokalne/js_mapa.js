'use strict';
/*
Skrypt przełączający między kalendarzem a mapą
*/

$('.nav-tabs').each(function () {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function (e) {
        e.preventDefault();

        var $link = $(this);
        var id = this.hash;

        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');

            google.maps.event.trigger(map, 'resize');
            map.setZoom( map.getZoom() );
        }
    });
});


var map;
function initMap() {
    var center = {lat: 54.443499, lng: 18.564406};
    map = new google.maps.Map(document.getElementById("mapa"), {
        center: center,
        zoom:16
    });



    eventList.forEach(function (place) {
        var marker = new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.name
        });
        marker.addListener('click', function() {

            var $header = $('<div class="panel-heading">').text(place.name);
            var $entertainment = $('<h4 class="media-heading">').text(place.nameEvent);
            /*var $photo = $('<img class="media-object" src="..." alt="...">')*/

            var $events = $('<div class="panel-body"><div class="media"><div class="media-left media-middle"><a href="#"><img class="media-object" id="eventImage"></a></div><div class="media-body" ><h4 class="media-heading" id="eventInfo">Wstaw nazwę imprezy z tablicy</h4></div></div></div>');

            $events.find('.media-heading').text(place.nameEvent);

            /*http://api.jquery.com/attr/*/


            $('#clubInfo').empty().append($header).append($events);
            $( "#eventImage" ).attr('src', place.photo);
        });

    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}










































/*$(document).ready(function(){
    $('#tab-map').hide()
});*/

/*$(document).ready(function() {
    $('#button-map').click(function (event) {
        event.preventDefault();
        $('#tab-calendar').hide(); $('#tab-map').show();

    });
});


$(document).ready(function() {
    $('#button-calendar').click(function (event) {
        event.preventDefault();
        $('#tab-map').hide(); $('#tab-calendar').show();

    });
});*/


