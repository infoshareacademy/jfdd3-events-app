'use strict';


var allClubs = [
    {name: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}},
    {name: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}},
    {name: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}},
    {name: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}},
    {name: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}},
    {name: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}},
    {name: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}},
    {name: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}},
    {name: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}},
    {name: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}},
    {name: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}},
    {name: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}},
    {name: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}},
    {name: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}},
    {name: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}},
    {name: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}},
    {name: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}},
    {name: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}}
];
var allEvents = [
    {name: 'Ludzie ulicy', photo: 'foto-event-mini/1.jpg',date: '2016-7-1'},
    {name: 'Otwarcie ogródka', photo: 'foto-event-mini/2.jpg',date: '2016-7-2'},
    {name: 'Zaćmienie', photo: 'foto-event-mini/3.jpg',date: '2016-7-3'},
    {name: 'Cudawianki', photo: 'foto-event-mini/4.jpg',date: '2016-7-4'},
    {name: 'Pozytwynie', photo: 'foto-event-mini/5.jpg',date:'2016-7-5'},
    {name: 'Ziemia to za mało', photo: 'foto-event-mini/6.jpg',date: '2016-7-6'},
    {name: 'Festiwal trafik', photo: 'foto-event-mini/7.jpg',date: '2016-7-7'},
    {name: 'Garden party', photo: 'foto-event-mini/8.jpg',date: '2016-7-8'},
    {name: 'Wieczor piwa ', photo: 'foto-event-mini/9.jpg',date: '2016-7-11'},
    {name: 'Techno Night', photo: 'foto-event-mini/10.jpg',date: '2016-7-13'},
    {name: 'House Time', photo: 'foto-event-mini/11.jpg',date: '2016-7-15'},
    {name: 'Muzyka elektroniczna', photo: 'foto-event-mini/12.jpg',date: '2016-7-17'},
    {name: 'Destroy music', photo: 'foto-event-mini/13.jpg',date: '2016-7-19'},
    {name: 'Rozpoczecie seonu', photo: 'foto-event-mini/14.jpg',date: '2016-7-20'},
    {name: 'Zmiana miejsc', photo: 'foto-event-mini/15.jpg',date: '2016-7-21'},
    {name: 'Wystywa Fotografi', photo: 'foto-event-mini/16.jpg',date: '2016-7-23'},
    {name: 'Koncert na dachu', photo: 'foto-event-mini/17.jpg',date: '2016-7-25'},
    {name: 'Scena odkryć', photo: 'foto-event-mini/18.jpg',date: '2016-7-27'},
    {name: 'VHS HELL', photo: 'foto-event-mini/19.jpg',date: '2016-7-29'},
    {name: 'CD HEAVEN', photo: 'foto-event-mini/12.jpg',date: '2016-7-30'},
    {name: 'Wieczór', photo: 'foto-event-mini/21.jpg',date: '2016-7-10'},
    {name: 'Boat Party', photo: 'foto-event-mini/22.jpg',date: '2016-7-12'},
    {name: 'Disco 80', photo: 'foto-event-mini/23.jpg',date: '2016-7-14'},
    {name: 'Dance Time', photo:'foto-event-mini/24.jpg',date: '2016-7-20'}

];


function generateEvents(events, clubs) {

    var newEvents = [];

    for (var i = 0; i < 30; i++) {

        var club = clubs[Math.round(Math.random() * (clubs.length - 1))];
        var event = events[Math.round(Math.random() * (events.length - 1))];
        club.name = event.name;
        club.photo = event.photo;
        club.date = event.date;

        newEvents.push(club);

    }

    return newEvents;
}
var events = generateEvents(allEvents,allClubs);



/* do póżniejszego użycia */

//var eventList=[
//    {name: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Ludzie ulicy', photo:'foto-event-mini/17.jpg', date: '2016-7-1', idEvent:"ev-00"},
//    {name: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Otwarcie ogródka', photo: 'foto-event-mini/1.jpg', date: '2016-7-3', idEvent:"ev-01"},
//    {name: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, nameEvent:'Zaćmienie', photo: 'foto-event-mini/2.jpg', date: '2016-7-5', idEvent:"ev-02"},
//    {name: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, nameEvent:'Cudawianki', photo: 'foto-event-mini/3.jpg', date: '2016-7-7', idEvent:"ev-03"},
//    {name: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, nameEvent:'Festival trafik', photo: 'foto-event-mini/4.jpg', date: '2016-7-9', idEvent:"ev-04"},
//    {name: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, nameEvent:'Pozytywnie techno', photo: 'foto-event-mini/5.jpg', date: '2016-7-12', idEvent:"ev-05"},
//    {name: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Garden party', photo: 'foto-event-mini/6.jpg', date: '2016-7-14', idEvent:"ev-06"},
//    {name: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Techno night', photo: 'foto-event-mini/17.jpg', date: '2016-7-10', idEvent:"ev-07"},
//    {name: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'House Time', photo: 'foto-event-mini/7.jpg', date: '2016-7-8', idEvent:"ev-08"},
//    {name: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, nameEvent:'Destyroy Music', photo: 'foto-event-mini/8.jpg', date: '2016-7-9', idEvent:"ev-09"},
//    {name: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Sunrise', photo: 'foto-event-mini/9.jpg', date: '2016-7-11', idEvent:"ev-10"},
//    {name: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, nameEvent:'Ultra ', photo: 'foto-event-mini/10.jpg', date: '2016-7-13', idEvent:"ev-11"},
//    {name: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, nameEvent:'Tomoorowland', photo: 'foto-event-mini/11.jpg', date: '2016-7-15', idEvent:"ev-12"},
//    {name: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, nameEvent:'Rozpoczęcie sezonu', photo: 'foto-event-mini/12.jpg', date: '2016-7-17', idEvent:"ev-13"},
//    {name: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, nameEvent:'Scena odkryć', photo: 'foto-event-mini/13.jpg', date: '2016-7-19', idEvent:"ev-14"},
//    {name: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, nameEvent:'CD Haven', photo: 'foto-event-mini/14.jpg', date: '2016-7-21', idEvent:"ev-15"},
//    {name: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, nameEvent:'CazanTip', photo: 'foto-event-mini/15.jpg', date: '2016-7-23', idEvent:"ev-16"},
//    {name: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, nameEvent:'History Mix ', photo: 'foto-event-mini/16.jpg', date: '2016-7-25', idEvent:"ev-17"}
//];

var eventList=events;
var container = $('#gridster');
eventList.forEach(function (event) {

    var card = $("<li class=''></li>");
    var image = $("<img>").attr("src", event.photo);
    var caption = $("<div class='caption'>");
    var eventTitle = $("<h3>").text(event.nameEvent);
    var eventDescription = $("<p>").text(event.name);
    var eventDate=$("<p>").text(event.date);


    card.append(image);
    caption.append(eventTitle);
    caption.append(eventDescription);
    caption.append(eventDate);
    card.append(caption);
    container.append(card);

});