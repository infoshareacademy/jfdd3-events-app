'use strict';


var allClubs = [
    {nameClub: "Bunkier", city: "Gdansk", photoClub:"" , position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', photoClub:"", position: {lat: 54.443701, lng: 18.567403}},
    {nameClub: 'Absinthe', city: 'Gdansk', photoClub:"",  position: {lat: 54.351231, lng: 18.648594}},
    {nameClub: 'Sfinks 700', city: 'Sopot', photoClub:"",  position: {lat: 54.448606, lng: 18.567710}},
    {nameClub: 'Kwadratowa', city: 'Gdansk', photoClub:"",  position: {lat: 54.370941, lng: 18.615147}},
    {nameClub: 'Dream Club', city: 'Sopot', photoClub:"",  position: {lat: 54.444478, lng: 18.566645}},
    {nameClub: 'Bunkier', city: 'Gdansk', photoClub:"",  position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: "B90", city: "Gdansk",  photoClub:"", position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: 'Czekoladowa', city: 'Sopot', photoClub:"",  position: {lat: 54.454168, lng: 18.554595}},
    {nameClub: 'SPATiF', city: 'Sopot', photoClub:"",  position: {lat: 54.444402, lng: 18.567747}},
    {nameClub: 'Protokultura', city: 'Gdansk',  photoClub:"", position: {lat: 54.443701, lng: 18.567403}},
    {nameClub: 'Atelier', city: 'Sopot', photoClub:"",  position: {lat: 54.448602, lng: 18.568387}},
    {nameClub: 'HAH', city: 'Sopot', photoClub:"",  position: {lat: 54.453064, lng: 18.564116}},
    {nameClub: 'Wtedy', city: 'Sopot', photoClub:"",  position: {lat: 54.441044, lng: 18.563498}},
    {nameClub: 'Dwie zmiany', city: 'Sopot', photoClub:"",  position: {lat: 54.443651, lng: 18.5643276}},
    {nameClub: 'Scena', city: 'Sopot', photoClub:"",  position: {lat: 54.448498, lng: 18.568309}},
    {nameClub: 'TAN', city: 'Sopot', photoClub:"",  position: {lat: 54.445276, lng: 18.567748}},
    {nameClub: 'Libation ', city: 'Sopot', photoClub:"",  position: {lat: 54.444583, lng: 18.568565}}
];
var allEvents = [
    {nameEvent: 'Ludzie ulicy', photoEvent: 'img/foto-event-mini/1.jpg',dateEventEvent: '2016-7-1'},
    {nameEvent: 'Otwarcie ogródka', photoEvent:'img/foto-event-mini/2.jpg',dateEvent: '2016-7-2'},
    {nameEvent: 'Zaćmienie', photoEventt: 'img/foto-event-mini/3.jpg',dateEvent: '2016-7-3'},
    {nameEvent: 'Cudawianki', photoEventt: 'img/foto-event-mini/4.jpg',dateEvent: '2016-7-4'},
    {nameEvent: 'Pozytwynie', photoEventt: 'img/foto-event-mini/5.jpg',dateEvent:'2016-7-5'},
    {nameEvent: 'Ziemia to za mało', photoEventt: 'img/foto-event-mini/6.jpg',dateEvent: '2016-7-6'},
    {nameEvent: 'Festiwal trafik', photoEventt: 'img/foto-event-mini/7.jpg',dateEvent: '2016-7-7'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/8.jpg',dateEvent: '2016-7-8'},
    {nameEvent: 'Wieczor piwa ', photoEventt: 'img/foto-event-mini/9.jpg',dateEvent: '2016-7-11'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/10.jpg',dateEvent: '2016-7-13'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/11.jpg',dateEvent: '2016-7-15'},
    {nameEvent: 'Muzyka elektroniczna', photoEventt: 'img/foto-event-mini/12.jpg',dateEvent: '2016-7-17'},
    {nameEvent: 'Destroy music', photoEventt: 'img/foto-event-mini/13.jpg',dateEvent: '2016-7-19'},
    {nameEvent: 'Rozpoczecie seonu',photoEvent: 'img/foto-event-mini/14.jpg',dateEvent: '2016-7-20'},
    {nameEvent: 'Zmiana miejsc', photoEvent: 'img/foto-event-mini/15.jpg',dateEvent: '2016-7-21'},
    {nameEvent: 'Wystywa Fotografi', photoEvent: 'img/foto-event-mini/16.jpg',dateEvent: '2016-7-23'},
    {nameEvent: 'Koncert na dachu', photoEvent: 'img/foto-event-mini/17.jpg',dateEvent: '2016-7-25'},
    {nameEvent: 'Scena odkryć', photoEvent: 'img/foto-event-mini/18.jpg',dateEvent: '2016-7-27'},
    {nameEvent: 'VHS HELL', photoEvent: 'img/foto-event-mini/19.jpg',dateEvent: '2016-7-29'},
    {nameEvent: 'CD HEAVEN', photoEvent: 'img/foto-event-mini/12.jpg',dateEvent: '2016-7-30'},
    {nameEvent: 'Wieczór', photoEvent: 'img/foto-event-mini/21.jpg',dateEvent: '2016-7-10'},
    {nameEvent: 'Boat Party', photoEvent: 'img/foto-event-mini/22.jpg',dateEvent: '2016-7-12'},
    {nameEvent: 'Disco 80', photoEvent: 'img/foto-event-mini/23.jpg',dateEvent: '2016-7-14'},
    {nameEvent: 'Dance Time', photoEvent:'img/foto-event-mini/24.jpg',dateEvent: '2016-7-20'},
    {nameEvent: 'Festiwal trafik', photoEvent: 'img/foto-event-mini/25.jpg',dateEvent: '2016-7-9'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/26.jpg',dateEvent: '2016-7-10'},
    {nameEvent: 'Wieczor piwa ', photoEvent: 'img/foto-event-mini/27.jpg',dateEvent: '2016-7-12'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/28.jpg',dateEvent: '2016-7-14'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/29.jpg',dateEvent: '2016-7-16'},
    {nameEvent: 'Muzyka elektroniczna', photoEvent: 'img/foto-event-mini/30.jpg',dateEvent: '2016-7-18'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/31.jpg',dateEvent: '2016-7-13'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/32.jpg',dateEvent: '2016-7-15'},
    {nameEvent: 'Muzyka elektroniczna', photoEvent: 'img/foto-event-mini/33.jpg',dateEvent: '2016-7-17'},
    {nameEvent: 'Destroy music', photoEvent: 'img/foto-event-mini/343.jpg',dateEvent: '2016-7-19'},
    {nameEvent: 'Rozpoczecie seonu', photoEvent: 'img/foto-event-mini/35.jpg',dateEvent: '2016-7-20'},
    {nameEvent: 'Zmiana miejsc', photoEvent: 'img/foto-event-mini/36.jpg',dateEvent: '2016-7-21'},
    {nameEvent: 'Wystywa Fotografi', photoEvent: 'img/foto-event-mini/37.jpg',dateEvent: '2016-7-23'},
    {nameEvent: 'Koncert na dachu', photoEvent: 'img/foto-event-mini/38.jpg',dateEvent: '2016-7-25'},
    {nameEvent: 'Scena odkryć', photoEvent: 'img/foto-event-mini/39.jpg',dateEvent: '2016-7-27'},
    {nameEvent: 'VHS HELL', photoEvent: 'img/foto-event-mini/40.jpg',dateEvent: '2016-7-29'},
    {nameEvent: 'CD HEAVEN', photoEvent: 'img/foto-event-mini/41.jpg',dateEvent: '2016-7-30'},
    {nameEvent: 'Wieczór', photoEvent: 'img/foto-event-mini/42.jpg',dateEvent: '2016-7-10'},
    {nameEvent: 'Boat Party', photoEvent: 'img/foto-event-mini/43.jpg',dateEvent: '2016-7-12'},
    {nameEvent: 'Disco 80', photoEvent: 'img/foto-event-mini/44.jpg',dateEvent: '2016-7-14'},
    {nameEvent: 'Dance Time', photoEvent:'img/foto-event-mini/45.jpg',dateEvent: '2016-7-20'},
    {nameEvent: 'Festiwal trafik', photoEvent: 'img/foto-event-mini/46.jpg',dateEvent: '2016-7-9'},
    {nameEvent: 'Garden party', photoEvent: 'img/foto-event-mini/47.jpg',dateEvent: '2016-7-10'},
    {nameEvent: 'Wieczor piwa ', photoEvent: 'img/foto-event-mini/48.jpg',dateEvent: '2016-7-12'},
    {nameEvent: 'Techno Night', photoEvent: 'img/foto-event-mini/49.jpg',dateEvent: '2016-7-14'},
    {nameEvent: 'House Time', photoEvent: 'img/foto-event-mini/50.jpg',dateEvent: '2016-7-16'},
    ];


function generateEvents(events, clubs) {

    var newEvents = [];

    for (var i = 0; i < 10; i++) {

        var club = clubs[Math.round(Math.random() * (clubs.length - 1))];

        var event = events[Math.round(Math.random() * (events.length - 1))];

        club.name = event.name;
        club.photo = event.photo;
        club.date = event.date;
        //console.log(clubs);
        newEvents.push(club);

    }

    return newEvents;
}
var events = generateEvents(allEvents,allClubs);

var container = $('#tiles');
events.forEach(function (event) {
    //var card = $("<div class='thumbnail col-xs-6 col-sm-6 col-md-3 col-lg-2'></div>");
    //var image = $("<img>").attr("src", event.photo);
    //var caption = $("<div class='caption'>");
    //var eventTitle = $("<h3>").text(event.nameEvent);
    //var eventDescription = $("<p>").text(event.name);
    //var eventDate=$("<p>").text(event.date);
    //
    //card.append(image);
    //caption.append(eventTitle);
    //caption.append(eventDescription);
    //caption.append(eventDate);
    //card.append(caption);
    //container.append(card);

    var $tile = $('<li class="event-thumbnail" data-row="1" data-col="1" data-sizex="1" data-sizey="1">tekst</li>"');

    $tile.css({backgroundImage: 'url(' + event.photo + ')'})
        .html('<p class="halo"><span>' + event.name + '</span></p> <p>//' + event.date + '</p> <p>//' + event.city + ' </p> <p>//' + event.nameClub + ' </p>');

    container.append($tile);


});


//$(function () {
//
//
//    $(".gridster > ul").gridster({
//        widget_margins: [0, 0],
//        widget_base_dimensions: [180, 180],
//        min_cols: 10
//    });
//});




