'use strict';


var allClubs = [
    {nameClub: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}},
    {nameClub: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}},
    {nameClub: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}},
    {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}},
    {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}},
    {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}},
    {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}},
    {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}},
    {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}},
    {nameClub: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}},
    {nameClub: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}},
    {nameClub: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}},
    {nameClub: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}},
    {nameClub: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}},
    {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}}
];
var allEvents = [
    {name: 'Ludzie ulicy', photo: 'img/foto-event-mini/1.jpg',date: '2016-7-1'},
    {name: 'Otwarcie ogródka', photo: 'img/foto-event-mini/2.jpg',date: '2016-7-2'},
    {name: 'Zaćmienie', photo: 'img/foto-event-mini/3.jpg',date: '2016-7-3'},
    {name: 'Cudawianki', photo: 'img/foto-event-mini/4.jpg',date: '2016-7-4'},
    {name: 'Pozytwynie', photo: 'img/foto-event-mini/5.jpg',date:'2016-7-5'},
    {name: 'Ziemia to za mało', photo: 'img/foto-event-mini/6.jpg',date: '2016-7-6'},
    {name: 'Festiwal trafik', photo: 'img/foto-event-mini/7.jpg',date: '2016-7-7'},
    {name: 'Garden party', photo: 'img/foto-event-mini/8.jpg',date: '2016-7-8'},
    {name: 'Wieczor piwa ', photo: 'img/foto-event-mini/9.jpg',date: '2016-7-11'},
    {name: 'Techno Night', photo: 'img/foto-event-mini/10.jpg',date: '2016-7-13'},
    {name: 'House Time', photo: 'img/foto-event-mini/11.jpg',date: '2016-7-15'},
    {name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/12.jpg',date: '2016-7-17'},
    {name: 'Destroy music', photo: 'img/foto-event-mini/13.jpg',date: '2016-7-19'},
    {name: 'Rozpoczecie seonu', photo: 'img/foto-event-mini/14.jpg',date: '2016-7-20'},
    {name: 'Zmiana miejsc', photo: 'img/foto-event-mini/15.jpg',date: '2016-7-21'},
    {name: 'Wystywa Fotografi', photo: 'img/foto-event-mini/16.jpg',date: '2016-7-23'},
    {name: 'Koncert na dachu', photo: 'img/foto-event-mini/17.jpg',date: '2016-7-25'},
    {name: 'Scena odkryć', photo: 'img/foto-event-mini/18.jpg',date: '2016-7-27'},
    {name: 'VHS HELL', photo: 'img/foto-event-mini/19.jpg',date: '2016-7-29'},
    {name: 'CD HEAVEN', photo: 'img/foto-event-mini/12.jpg',date: '2016-7-30'},
    {name: 'Wieczór', photo: 'img/foto-event-mini/21.jpg',date: '2016-7-10'},
    {name: 'Boat Party', photo: 'img/foto-event-mini/22.jpg',date: '2016-7-12'},
    {name: 'Disco 80', photo: 'img/foto-event-mini/23.jpg',date: '2016-7-14'},
    {name: 'Dance Time', photo:'img/foto-event-mini/24.jpg',date: '2016-7-20'},
    {name: 'Festiwal trafik', photo: 'img/foto-event-mini/25.jpg',date: '2016-7-9'},
    {name: 'Garden party', photo: 'img/foto-event-mini/26.jpg',date: '2016-7-10'},
    {name: 'Wieczor piwa ', photo: 'img/foto-event-mini/27.jpg',date: '2016-7-12'},
    {name: 'Techno Night', photo: 'img/foto-event-mini/28.jpg',date: '2016-7-14'},
    {name: 'House Time', photo: 'img/foto-event-mini/29.jpg',date: '2016-7-16'},
    {name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/30.jpg',date: '2016-7-18'},
    {name: 'Techno Night', photo: 'img/foto-event-mini/31.jpg',date: '2016-7-13'},
    {name: 'House Time', photo: 'img/foto-event-mini/32.jpg',date: '2016-7-15'},
    {name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/33.jpg',date: '2016-7-17'},
    {name: 'Destroy music', photo: 'img/foto-event-mini/343.jpg',date: '2016-7-19'},
    {name: 'Rozpoczecie seonu', photo: 'img/foto-event-mini/35.jpg',date: '2016-7-20'},
    {name: 'Zmiana miejsc', photo: 'img/foto-event-mini/36.jpg',date: '2016-7-21'},
    {name: 'Wystywa Fotografi', photo: 'img/foto-event-mini/37.jpg',date: '2016-7-23'},
    {name: 'Koncert na dachu', photo: 'img/foto-event-mini/38.jpg',date: '2016-7-25'},
    {name: 'Scena odkryć', photo: 'img/foto-event-mini/39.jpg',date: '2016-7-27'},
    {name: 'VHS HELL', photo: 'img/foto-event-mini/40.jpg',date: '2016-7-29'},
    {name: 'CD HEAVEN', photo: 'img/foto-event-mini/41.jpg',date: '2016-7-30'},
    {name: 'Wieczór', photo: 'img/foto-event-mini/42.jpg',date: '2016-7-10'},
    {name: 'Boat Party', photo: 'img/foto-event-mini/43.jpg',date: '2016-7-12'},
    {name: 'Disco 80', photo: 'img/foto-event-mini/44.jpg',date: '2016-7-14'},
    {name: 'Dance Time', photo:'img/foto-event-mini/45.jpg',date: '2016-7-20'},
    {name: 'Festiwal trafik', photo: 'img/foto-event-mini/46.jpg',date: '2016-7-9'},
    {name: 'Garden party', photo: 'img/foto-event-mini/47.jpg',date: '2016-7-10'},
    {name: 'Wieczor piwa ', photo: 'img/foto-event-mini/48.jpg',date: '2016-7-12'},
    {name: 'Techno Night', photo: 'img/foto-event-mini/49.jpg',date: '2016-7-14'},
    {name: 'House Time', photo: 'img/foto-event-mini/50.jpg',date: '2016-7-16'},
    ];


function generateEvents(events, clubs) {

    var newEvents = [];

    for (var i = 0; i < 100; i++) {

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
//    {name: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Ludzie ulicy', photo:'img/foto-event-mini/17.jpg', date: '2016-7-1', idEvent:"ev-00"},
//    {name: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Otwarcie ogródka', photo: 'img/foto-event-mini/1.jpg', date: '2016-7-3', idEvent:"ev-01"},
//    {name: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, nameEvent:'Zaćmienie', photo: 'img/foto-event-mini/2.jpg', date: '2016-7-5', idEvent:"ev-02"},
//    {name: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, nameEvent:'Cudawianki', photo: 'img/foto-event-mini/3.jpg', date: '2016-7-7', idEvent:"ev-03"},
//    {name: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, nameEvent:'Festival trafik', photo: 'img/foto-event-mini/4.jpg', date: '2016-7-9', idEvent:"ev-04"},
//    {name: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, nameEvent:'Pozytywnie techno', photo: 'img/foto-event-mini/5.jpg', date: '2016-7-12', idEvent:"ev-05"},
//    {name: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Garden party', photo: 'img/foto-event-mini/6.jpg', date: '2016-7-14', idEvent:"ev-06"},
//    {name: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, nameEvent:'Techno night', photo: 'img/foto-event-mini/17.jpg', date: '2016-7-10', idEvent:"ev-07"},
//    {name: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'House Time', photo: 'img/foto-event-mini/7.jpg', date: '2016-7-8', idEvent:"ev-08"},
//    {name: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, nameEvent:'Destyroy Music', photo: 'img/foto-event-mini/8.jpg', date: '2016-7-9', idEvent:"ev-09"},
//    {name: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, nameEvent:'Sunrise', photo: 'img/foto-event-mini/9.jpg', date: '2016-7-11', idEvent:"ev-10"},
//    {name: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, nameEvent:'Ultra ', photo: 'img/foto-event-mini/10.jpg', date: '2016-7-13', idEvent:"ev-11"},
//    {name: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, nameEvent:'Tomoorowland', photo: 'img/foto-event-mini/11.jpg', date: '2016-7-15', idEvent:"ev-12"},
//    {name: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, nameEvent:'Rozpoczęcie sezonu', photo: 'img/foto-event-mini/12.jpg', date: '2016-7-17', idEvent:"ev-13"},
//    {name: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, nameEvent:'Scena odkryć', photo: 'img/foto-event-mini/13.jpg', date: '2016-7-19', idEvent:"ev-14"},
//    {name: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, nameEvent:'CD Haven', photo: 'img/foto-event-mini/14.jpg', date: '2016-7-21', idEvent:"ev-15"},
//    {name: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, nameEvent:'CazanTip', photo: 'img/foto-event-mini/15.jpg', date: '2016-7-23', idEvent:"ev-16"},
//    {name: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, nameEvent:'History Mix ', photo: 'img/foto-event-mini/16.jpg', date: '2016-7-25', idEvent:"ev-17"},
//    {name: 'ColorFun', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'House Time', photo: 'img/foto-event-mini/17.jpg', date: '2016-7-8', idEvent:"ev-19"},
//    {name: 'Day-Mus', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, nameEvent:'Time pre', photo: 'img/foto-event-mini/18.jpg', date: '2016-7-8', idEvent:"ev-18"}
//];
//
var eventList=events;

var nEvents = [
    {nameClub: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Ludzie ulicy', photo: 'img/foto-event-mini/1.jpg',photo1:'img/foto-event-size/1.jpg',date: '2016-7-1'},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, name: 'Otwarcie ogródka', photo: 'img/foto-event-mini/2.jpg',photo1:'img/foto-event-size/2.jpg', date: '2016-7-2'},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'Zaćmienie', photo: 'img/foto-event-mini/3.jpg',photo1: 'img/foto-event-size/3.jpg', date: '2016-7-3'},
    {nameClub: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, name: 'Cudawianki', photo: 'img/foto-event-mini/4.jpg',photo1: 'img/foto-event-size/4.jpg', date: '2016-7-4'},
    {nameClub: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, name: 'Pozytwynie', photo: 'img/foto-event-mini/5.jpg',photo1: 'img/foto-event-size/5.jpg', date:'2016-7-5'},
    {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Ziemia to za mało', photo: 'img/foto-event-mini/6.jpg',photo1: 'img/foto-event-size/6.jpg', date: '2016-7-6'},
    {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/7.jpg',photo1: 'img/foto-event-size/7.jpg', date: '2016-7-7'},
    {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Garden party', photo: 'img/foto-event-mini/8.jpg',photo1: 'img/foto-event-size/8.jpg', date: '2016-7-8'},
    {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/9.jpg',photo1: 'img/foto-event-size/9.jpg', date: '2016-7-11'},
    {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Techno Night', photo: 'img/foto-event-mini/10.jpg',photo1: 'img/foto-event-size/10.jpg', date: '2016-7-13'},
    {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'House Time', photo: 'img/foto-event-mini/11.jpg',photo1: 'img/foto-event-size/11.jpg', date: '2016-7-15'},
    {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/12.jpg',photo1: 'img/foto-event-size/12.jpg', date: '2016-7-17'},
    {nameClub: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, name: 'Destroy music', photo: 'img/foto-event-mini/13.jpg',photo1: 'img/foto-event-size/13.jpg',date: '2016-7-19'},
    {nameClub: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, name: 'Rozpoczecie seonu', photo: 'img/foto-event-mini/14.jpg',photo1: 'img/foto-event-size/14.jpg',date: '2016-7-20'},
    {nameClub: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, name: 'Zmiana miejsc', photo: 'img/foto-event-mini/15.jpg',photo1: 'img/foto-event-size/15.jpg',date: '2016-7-21'},
    {nameClub: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, name: 'Wystywa Fotografi', photo: 'img/foto-event-mini/16.jpg',photo1: 'img/foto-event-size/16.jpg',date: '2016-7-23'},
    {nameClub: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, name: 'Koncert na dachu', photo: 'img/foto-event-mini/17.jpg',photo1: 'img/foto-event-size/17.jpg', date: '2016-7-25'},
    {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Scena odkryć', photo: 'img/foto-event-mini/18.jpg',photo1: 'img/foto-event-size/18.jpg',date: '2016-7-27'},
    {nameClub: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Dance Fest', photo: 'img/foto-event-mini/19.jpg',date: '2016-7-29'},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, name: 'CD HEAVEN', photo: 'img/foto-event-mini/12.jpg',date: '2016-7-30'},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'Wieczór', photo: 'img/foto-event-mini/21.jpg',date: '2016-7-10'},
    {nameClub: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, name: 'Boat Party', photo: 'img/foto-event-mini/22.jpg',date: '2016-7-12'},
    {nameClub: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, name: 'Disco 80', photo: 'img/foto-event-mini/23.jpg',date: '2016-7-14'},
    {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Dance Time', photo:'img/foto-event-mini/24.jpg',date: '2016-7-20'},
    {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/25.jpg',date: '2016-7-9'},
    {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Garden party', photo: 'img/foto-event-mini/26.jpg',date: '2016-7-10'},
    {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/27.jpg',date: '2016-7-12'},
    {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Techno Night', photo: 'img/foto-event-mini/28.jpg',date: '2016-7-14'},
    {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'House Time', photo: 'img/foto-event-mini/29.jpg',date: '2016-7-16'},
    {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/30.jpg',date: '2016-7-18'},
    {nameClub: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, name: 'Techno Night', photo: 'img/foto-event-mini/31.jpg',date: '2016-7-13'},
    {nameClub: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, name: 'House Time', photo: 'img/foto-event-mini/32.jpg',date: '2016-7-15'},
    {nameClub: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/33.jpg',date: '2016-7-17'},
    {nameClub: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, name: 'Destroy music', photo: 'img/foto-event-mini/34.jpg',date: '2016-7-19'},
    {nameClub: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, name: 'Rozpoczecie seonu', photo: 'img/foto-event-mini/35.jpg',date: '2016-7-20'},
    {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Zmiana miejsc', photo: 'img/foto-event-mini/36.jpg',date: '2016-7-21'},
    {nameClub: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Wystywa Fotografi', photo: 'img/foto-event-mini/37.jpg',date: '2016-7-23'},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, name: 'Koncert na dachu', photo: 'img/foto-event-mini/38.jpg',date: '2016-7-25'},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'Scena odkryć', photo: 'img/foto-event-mini/39.jpg',date: '2016-7-27'},
    {nameClub: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, name: 'VHS HELL', photo: 'img/foto-event-mini/40.jpg',date: '2016-7-29'},
    {nameClub: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, name: 'CD HEAVEN', photo: 'img/foto-event-mini/41.jpg',date: '2016-7-30'},
    {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Wieczór', photo: 'img/foto-event-mini/42.jpg',date: '2016-7-10'},
    {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Boat Party', photo: 'img/foto-event-mini/43.jpg',date: '2016-7-12'},
    {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Disco 80', photo: 'img/foto-event-mini/44.jpg',date: '2016-7-14'},
    {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Dance Time', photo:'img/foto-event-mini/45.jpg',date: '2016-7-20'},
    {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/46.jpg',date: '2016-7-9'},
    {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'Garden party', photo: 'img/foto-event-mini/47.jpg',date: '2016-7-10'},
    {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/48.jpg',date: '2016-7-12'},
    {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Techno Night', photo: 'img/foto-event-mini/49.jpg',date: '2016-7-14'},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'House Time', photo: 'img/foto-event-mini/50.jpg',date: '2016-7-16'},
    {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Dance Time', photo:'img/foto-event-mini/24.jpg',date: '2016-7-20'},
    {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/25.jpg',date: '2016-7-9'},
    {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Garden party', photo: 'img/foto-event-mini/26.jpg',date: '2016-7-10'},
    {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/27.jpg',date: '2016-7-12'},
    {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Techno Night', photo: 'img/foto-event-mini/28.jpg',date: '2016-7-14'},
    {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'House Time', photo: 'img/foto-event-mini/29.jpg',date: '2016-7-16'},
    {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/30.jpg',date: '2016-7-18'},
    {nameClub: 'HAH', city: 'Sopot', position: {lat: 54.453064, lng: 18.564116}, name: 'Techno Night', photo: 'img/foto-event-mini/31.jpg',date: '2016-7-13'},
    {nameClub: 'Wtedy', city: 'Sopot', position: {lat: 54.441044, lng: 18.563498}, name: 'House Time', photo: 'img/foto-event-mini/32.jpg',date: '2016-7-15'},
    {nameClub: 'Dwie zmiany', city: 'Sopot', position: {lat: 54.443651, lng: 18.5643276}, name: 'Muzyka elektroniczna', photo: 'img/foto-event-mini/33.jpg',date: '2016-7-17'},
    {nameClub: 'Scena', city: 'Sopot', position: {lat: 54.448498, lng: 18.568309}, name: 'Destroy music', photo: 'img/foto-event-mini/34.jpg',date: '2016-7-19'},
    {nameClub: 'TAN', city: 'Sopot', position: {lat: 54.445276, lng: 18.567748}, name: 'Rozpoczecie seonu', photo: 'img/foto-event-mini/35.jpg',date: '2016-7-20'},
    {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Zmiana miejsc', photo: 'img/foto-event-mini/36.jpg',date: '2016-7-21'},
    {nameClub: "Bunkier", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Wystywa Fotografi', photo: 'img/foto-event-mini/37.jpg',date: '2016-7-23'},
    {nameClub: 'Mewa Towarzyska', city: 'Sopot', position: {lat: 54.443701, lng: 18.567403}, name: 'Koncert na dachu', photo: 'img/foto-event-mini/38.jpg',date: '2016-7-25'},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'Scena odkryć', photo: 'img/foto-event-mini/39.jpg',date: '2016-7-27'},
    {nameClub: 'Sfinks 700', city: 'Sopot', position: {lat: 54.448606, lng: 18.567710}, name: 'VHS HELL', photo: 'img/foto-event-mini/40.jpg',date: '2016-7-29'},
    {nameClub: 'Kwadratowa', city: 'Gdansk', position: {lat: 54.370941, lng: 18.615147}, name: 'CD HEAVEN', photo: 'img/foto-event-mini/41.jpg',date: '2016-7-30'},
    {nameClub: 'Dream Club', city: 'Sopot', position: {lat: 54.444478, lng: 18.566645}, name: 'Wieczór', photo: 'img/foto-event-mini/42.jpg',date: '2016-7-10'},
    {nameClub: 'Bunkier', city: 'Gdansk', position: {lat: 54.354750, lng: 18.654678}, name: 'Boat Party', photo: 'img/foto-event-mini/43.jpg',date: '2016-7-12'},
    {nameClub: "B90", city: "Gdansk", position: {lat: 54.354750, lng: 18.654678}, name: 'Disco 80', photo: 'img/foto-event-mini/44.jpg',date: '2016-7-14'},
    {nameClub: 'Czekoladowa', city: 'Sopot', position: {lat: 54.454168, lng: 18.554595}, name: 'Dance Time', photo:'img/foto-event-mini/45.jpg',date: '2016-7-20'},
    {nameClub: 'SPATiF', city: 'Sopot', position: {lat: 54.444402, lng: 18.567747}, name: 'Festiwal trafik', photo: 'img/foto-event-mini/46.jpg',date: '2016-7-9'},
    {nameClub: 'Protokultura', city: 'Gdansk', position: {lat: 54.443701, lng: 18.567403}, name: 'Garden party', photo: 'img/foto-event-mini/47.jpg',date: '2016-7-10'},
    {nameClub: 'Atelier', city: 'Sopot', position: {lat: 54.448602, lng: 18.568387}, name: 'Wieczor piwa ', photo: 'img/foto-event-mini/48.jpg',date: '2016-7-12'},
    {nameClub: 'Libation ', city: 'Sopot', position: {lat: 54.444583, lng: 18.568565}, name: 'Techno Night', photo: 'img/foto-event-mini/49.jpg',date: '2016-7-14'},
    {nameClub: 'Absinthe', city: 'Gdansk', position: {lat: 54.351231, lng: 18.648594}, name: 'House Time', photo: 'img/foto-event-mini/50.jpg',date: '2016-7-16'},
];
var container = $('#tiles');
nEvents.forEach(function (event) {
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


$(function () {


    $(".gridster > ul").gridster({
        widget_margins: [0, 0],
        widget_base_dimensions: [180, 180],
        min_cols: 10
    });
});




